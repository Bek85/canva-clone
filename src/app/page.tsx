"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");
  const clickHandler = async () => {
    const response = await fetch("api/test");

    const result = await response.json();
    setResponse(result.response);
  };

  return (
    <div>
      <Button onClick={clickHandler}>Click me</Button>
      <p>{response}</p>
    </div>
  );
}
