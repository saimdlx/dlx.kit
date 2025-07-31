'use client'
import React, { use } from "react";
import { useState } from "react";
import textInput from "@/app/textinput";
import { motion } from "motion/react";

export default function Home() {
  const textI = textInput()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[3px] row-start-2 items-center sm:items-start">
      <motion.div className="justify-items-center text-4xl font-bold "
      whileHover={{scale:1.2, color: "white"}}>
        dlx.kit
      </motion.div>
      <div className="text-black bg-slate-100 rounded-sm">
        {textI}
      </div>
      </main>
    </div>
  );
}
