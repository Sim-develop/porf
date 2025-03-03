import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function handleStreamApi(
  res: Response,
  onChunkReceived: (x: string) => void,
  onComplete: () => void
) {
  if (!res.body) {
    throw new Error("Response body is null");
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      onComplete();
      break;
    }

    const chunk = decoder.decode(value, { stream: true });
    onChunkReceived(chunk);
  }
}
