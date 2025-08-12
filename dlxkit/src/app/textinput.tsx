'use client'
import React, { use } from "react";
import { useState } from "react";

export default function textInput() {

    const [inputVal, setInputValue] = useState(' ');
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value)
    }

    return (
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
    );
}