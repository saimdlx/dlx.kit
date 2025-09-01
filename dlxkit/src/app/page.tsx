'use client'
import React, { use } from "react";
import { useState } from "react";


export default function Home() {
  const [inputVal, setInputValue] = useState(' ');
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
  setInputValue(event.target.value)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[3px] row-start-2 items-center sm:items-start">
      <div className="justify-items-center text-4xl font-bold">
        dlx.kit
      </div>
      <div className="flex gap-x-2 font-bold text-black">
        <input
          type="text"
          value={inputVal}
          onChange={handleChange}
          placeholder="Paste A Link Here."
          className="rounded-sm bg-slate-100 border-1 border-gray-400 px-4 py-1"
        />

        <button className="rounded-sm bg-slate-100 border-1 border-gray-400 px-4 py-1">mp3</button>
        <button className="rounded-sm bg-slate-100 border-1 border-gray-400 px-4 py-1">mp4</button>
      </div>
      </main>
    </div>
  );
}
