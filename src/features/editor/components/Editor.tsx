'use client';

import { useEditor } from '@/features/editor/hooks/useEditor';
import { useEffect, useRef } from 'react';

export default function Editor() {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    init({ initialCanvas: '', initialContainer: containerRef.current });
  }, [init]);

  return (
    <div ref={containerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
