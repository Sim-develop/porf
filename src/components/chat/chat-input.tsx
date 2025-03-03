"use client";

import { ChatIcon, SendMessageArrowIcon, VoiceIcon } from "@/assets/svgs";
import { useState } from "react";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useChat } from "@ai-sdk/react";

const VoiceIconAnimated = () => {
  const delays = ["0s", "0.1s", "0.4s", "0.5s", "0.3s"];
  return (
    <div className="flex items-end justify-center h-5 gap-1">
      {delays.map((delay, index) => (
        <span
          key={index}
          className="w-[2px] bg-black animate-voicing"
          style={{ animationDelay: delay }}
        />
      ))}
    </div>
  );
};

const formSchema = z.object({
  chat: z.string().min(0),
});

const ChatInput = () => {
  // const [currentSelect, setCurrentSelect] = useState<"chat" | "voice">("voice");

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/deepseek",
    body: {
      promptType: "short",
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chat: "",
    },
  });

  // const { handleSubmit, control, setValue } = form;

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    const { chat } = formData;
    // setInput(chat);
    // await handleChatSubmit();
    // setValue("chat", "");
  }

  // const renderIcon = (type: "chat" | "voice") => {
  //   const isSelected = currentSelect === type;
  //   const IconComponent = type === "chat" ? ChatIcon : VoiceIcon;

  //   return (
  //     <div className={isSelected ? "flex-1" : ""}>
  //       {isSelected ? (
  //         type === "chat" ? (
  //           <FormField
  //             control={control}
  //             name="chat"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormControl>
  //                   <Input
  //                     placeholder="typing"
  //                     {...field}
  //                     className="focus-visible:ring-0"
  //                     onChange={(e) => {
  //                       field.onChange(e);
  //                       handleInputChange(e);
  //                     }}
  //                   />
  //                 </FormControl>
  //               </FormItem>
  //             )}
  //           />
  //         ) : (
  //           <VoiceIconAnimated />
  //         )
  //       ) : (
  //         <IconComponent
  //           onClick={() => setCurrentSelect(type)}
  //           className="text-white h-9 w-9 p-2 hover:bg-slate-50 rounded-full cursor-pointer"
  //         />
  //       )}
  //     </div>
  //   );
  // };

  return (
    <>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.role === "user" ? "You: " : "AI: "}</strong>
            {message.content}
          </div>
        ))}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
      </Form>
      {/* <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form> */}
    </>
  );
};

export default ChatInput;
