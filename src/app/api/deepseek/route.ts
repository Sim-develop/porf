import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL_NAME = "google/gemini-exp-1206:free";
const MAX_TOKEN_LENGTH = 1024;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const openrouter = createOpenRouter({
      apiKey: OPENROUTER_API_KEY,
    });

    const response = streamText({
      model: openrouter(MODEL_NAME),
      messages: [
        { role: "system", content: "Return a short answer from AI side" },
        ...messages,
      ],
      maxTokens: MAX_TOKEN_LENGTH,
    });

    const stream = response.toDataStreamResponse();

    return stream;
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Error calling OpenRouter API:",
        details: err,
      }),
      { status: 500 }
    );
  }
}
