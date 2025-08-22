"use client";

import { useEffect, useRef } from "react";
import { useEditor } from "@/features/editor/hooks/use-editor";
import * as fabric from "fabric";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Editor = () => {
  const { init } = useEditor();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current!, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({ initialCanvas: canvas, initialContainer: containerRef.current! });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <div className='h-full flex flex-col'>
      <Navbar />
      <div className='absolute h-[calc(100%-68px)] w-full top-[68px] flex'>
        <Sidebar />
        <div className='flex-1 h-full bg-muted' ref={containerRef}>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
};
