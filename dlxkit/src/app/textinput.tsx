'use client'
import React, { use } from "react";
import { useState } from "react";

export default function textInput() {

    const [inputVal, setInputValue] = useState(' ');
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value)
    }

    return (
      <div>
        <input
          type="text"
          value={inputVal}
          onChange={handleChange}
          placeholder="Paste link here"
        />
      </div>
    );
}