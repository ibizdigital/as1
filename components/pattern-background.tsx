'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type ZoomState = 'close' | 'mid' | 'wide';

interface PatternBackgroundProps {
  className?: string;
  zoomState?: ZoomState;
}

export function PatternBackground({ 
  className, 
  zoomState = 'mid' 
}: PatternBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;
    
    const resizeCanvas = () => {
      const { width: canvasWidth, height: canvasHeight } = canvas.getBoundingClientRect();
      canvas.width = canvasWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      width = canvas.width;
      height = canvas.height;
    };
    
    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Choose zoom level based on zoomState
    let scale = 1;
    switch (zoomState) {
      case 'close':
        scale = 1.5;
        break;
      case 'mid':
        scale = 1;
        break;
      case 'wide':
        scale = 0.7;
        break;
      default:
        scale = 1;
    }
    
    // Pattern settings
    const cellSize = 40 * scale;
    const patternColor = '#000';
    
    // Animation settings
    let t = 0;
    const speed = 0.0005;
    
    const drawPattern = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = patternColor;
      
      // Calculate grid dimensions based on canvas size
      const cols = Math.ceil(width / cellSize) + 2;
      const rows = Math.ceil(height / cellSize) + 2;
      
      // Slight offset for animation
      const offsetX = Math.sin(t * 0.5) * cellSize * 0.3;
      const offsetY = Math.cos(t * 0.3) * cellSize * 0.2;
      
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const x = i * cellSize + offsetX;
          const y = j * cellSize + offsetY;
          
          const size = cellSize * 0.15 + Math.sin(i * 0.5 + t) * cellSize * 0.05 + Math.cos(j * 0.5 + t) * cellSize * 0.05;
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Sometimes connect dots with lines
          if (Math.random() > 0.8) {
            ctx.lineWidth = size * 0.3;
            ctx.strokeStyle = patternColor;
            ctx.globalAlpha = 0.1 + Math.sin(t + i + j) * 0.05;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize, y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + cellSize);
            ctx.stroke();
            
            ctx.globalAlpha = 1;
          }
        }
      }
      
      t += speed;
      animationFrameId = requestAnimationFrame(drawPattern);
    };
    
    drawPattern();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [zoomState]);
  
  return (
    <canvas 
      ref={canvasRef}
      className={cn('w-full h-full bg-gray-100', className)}
    />
  );
}