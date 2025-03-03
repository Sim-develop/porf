"use client";

import { doodleImage } from "@/assets/images/index";
import { ChatInput } from "@/components/chat";
import Image from "next/image";

const Interview = () => {
  return (
    <div className="flex flex-col gap-10">
      This is interview page
      <div className="w-full lg:max-w-3xl aspect-square relative rounded-[10px] lg:rounded-xl">
        <Image
          src={doodleImage}
          alt="chat-background"
          fill
          className="opacity-10 -z-10 bg-slate-500"
        />
        <ChatInput />
      </div>
    </div>
  );
};

export default Interview;
