"use client";

import { useState, FormEvent } from "react";
import {useRouter} from 'next/navigation';
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter(); //  Destructure useRouter to use push function
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    push(`/prediction/${inputVal}`);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2x1 text-black font-semibold mb-4">
          Enter your name
        </h1>
      
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="text" 
            placeholder="Type your name"
            value = {inputVal}
            className="text-black w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setInputVal(e.target.value)}/>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600"> 
            Predict Data
          </button>
        </form>
      </div>
    </div>
  )
}
