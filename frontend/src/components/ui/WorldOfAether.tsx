import React from 'react';

export default function WorldOfAether() {
  return (
    <section className="py-32 px-6 bg-foreground text-background relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-accent">Beyond Watchmaking</p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">The World of Aether</h2>
          <p className="text-background/70 max-w-2xl leading-relaxed text-sm md:text-base">
            Where human achievement meets flawless timing. We stand alongside those who push boundaries, 
            break records, and define the spirit of excellence in sports and exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[600px]">
          {/* Main feature (Sailing) */}
          <div className="md:col-span-8 relative group overflow-hidden bg-background/5 h-[400px] md:h-full cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img 
              src="/lifestyle/sailing.png" 
              alt="Aether in Sailing" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 z-20 text-white">
              <span className="text-[10px] tracking-widest uppercase font-semibold mb-2 block text-accent">Yachting</span>
              <h3 className="text-2xl md:text-3xl font-serif mb-2">Mastering the Oceans</h3>
              <p className="text-white/80 text-sm hidden md:block">The Official Timekeeper of the Global Regatta.</p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 h-full">
            {/* Secondary feature 1 (Golf) */}
            <div className="relative group overflow-hidden bg-background/5 flex-1 h-[300px] md:h-auto cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/lifestyle/golf.png" 
                alt="Aether in Golf" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <span className="text-[10px] tracking-widest uppercase font-semibold mb-1 block text-accent">Golf</span>
                <h3 className="text-xl font-serif">Precision on the Green</h3>
              </div>
            </div>

            {/* Secondary feature 2 (Motorsport) */}
            <div className="relative group overflow-hidden bg-background/5 flex-1 h-[300px] md:h-auto cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/lifestyle/motorsport.png" 
                alt="Aether in Motorsport" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <span className="text-[10px] tracking-widest uppercase font-semibold mb-1 block text-accent">Motorsport</span>
                <h3 className="text-xl font-serif">The Race Against Time</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:text-left">
          <button className="bg-transparent border border-metal/50 text-background py-4 px-12 uppercase tracking-widest text-xs hover:border-background transition-colors">
            Discover Our Partnerships
          </button>
        </div>
      </div>
    </section>
  );
}
