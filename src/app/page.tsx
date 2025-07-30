"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const clickHandler = async () => {
    const response = await fetch("api/test");

    const result = await response.json();
    setResponse(result.response);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <Button onClick={clickHandler}>Fetch something from API</Button>
      <p>{response}</p>
      <div className='flex gap-4'>
        <Link href='/editor/1'>Editor 1</Link>
      </div>
    </div>
  );
}
