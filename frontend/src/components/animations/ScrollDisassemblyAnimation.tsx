'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 192;

export default function ScrollDisassemblyAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(5, '0');
      img.src = `/frames/frame-${frameIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;
    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    const render = (index: number) => {
      const img = images[Math.floor(index)];
      if (img) {
        // Clear canvas
        context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        
        // Calculate aspect ratio to cover canvas while maintaining ratio
        const canvasRatio = canvasRef.current!.width / canvasRef.current!.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvasRef.current!.width;
          drawHeight = drawWidth / imgRatio;
          offsetX = 0;
          offsetY = (canvasRef.current!.height - drawHeight) / 2;
        } else {
          drawHeight = canvasRef.current!.height;
          drawWidth = drawHeight * imgRatio;
          offsetX = (canvasRef.current!.width - drawWidth) / 2;
          offsetY = 0;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    render(0);

    const unsubscribe = frameIndex.on("change", (latest) => {
      render(latest);
    });

    return () => unsubscribe();
  }, [loaded, frameIndex, images]);

  return (
    <div ref={containerRef} className="h-[400vh] relative bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <span className="text-foreground tracking-widest uppercase text-sm animate-pulse">Loading Cinematic Experience...</span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-16 md:bottom-10 left-0 w-full flex justify-center z-20 pointer-events-none">
           <motion.div 
             style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
             className="flex flex-col items-center"
           >
             <span className="text-foreground text-xs tracking-widest uppercase mb-2">Scroll to disassemble</span>
             <div className="w-[1px] h-12 bg-foreground/30 overflow-hidden relative">
               <motion.div 
                 animate={{ y: [0, 48] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 className="w-full h-full bg-foreground absolute top-[-48px]"
               />
             </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
