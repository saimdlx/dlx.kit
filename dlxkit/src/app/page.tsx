'use client'
import React, { use } from "react";
import { useState } from "react";
import textInput from "@/app/textinput";


export default function Home() {
  const textI = textInput()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="text-blue-500 bg-slate-100">
        {textI}
      </div>
      </main>
    </div>
  );
}
