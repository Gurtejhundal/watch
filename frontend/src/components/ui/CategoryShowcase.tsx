import React from 'react';

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-serif mb-3 md:mb-4">Find Your Aether</h2>
          <p className="text-xs md:text-sm tracking-widest uppercase text-foreground/50">Explore the collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <a href="/collections/classic" className="group block relative overflow-hidden aspect-[16/10] md:aspect-square bg-background-secondary border border-metal/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <img 
              src="/frames/frame-00045.jpg" 
              alt="Classic Watches" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-6 md:bottom-10 w-full text-center z-20 px-4 md:px-6">
              <h3 className="text-white text-xl md:text-3xl font-serif mb-2 md:mb-3">Classic Watches</h3>
              <p className="text-white/80 text-sm md:text-base font-light mb-4 md:mb-6 hidden md:block">
                Timeless elegance. The pure expression of Aether&apos;s watchmaking heritage.
              </p>
              <span className="inline-block border border-white/50 text-white text-[10px] md:text-xs uppercase tracking-widest px-5 md:px-6 py-2.5 md:py-3 hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                Discover Classic
              </span>
            </div>
          </a>

          <a href="/collections/professional" className="group block relative overflow-hidden aspect-[16/10] md:aspect-square bg-background-secondary border border-metal/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <img 
              src="/lifestyle/sailing.png" 
              alt="Professional Watches" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-6 md:bottom-10 w-full text-center z-20 px-4 md:px-6">
              <h3 className="text-white text-xl md:text-3xl font-serif mb-2 md:mb-3">Professional Watches</h3>
              <p className="text-white/80 text-sm md:text-base font-light mb-4 md:mb-6 hidden md:block">
                Built for extremes. Precision instruments for the most demanding environments.
              </p>
              <span className="inline-block border border-white/50 text-white text-[10px] md:text-xs uppercase tracking-widest px-5 md:px-6 py-2.5 md:py-3 hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                Discover Professional
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
