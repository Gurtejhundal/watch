import React from 'react';

export default function BoutiqueLocator() {
  return (
    <section className="relative z-20 overflow-hidden">
      {/* Full-width banner */}
      <div className="relative h-[420px] md:h-[600px] bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40 md:to-transparent z-10" />
        <img
          src="/frames/frame-00001.jpg"
          alt="Aether Boutique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase mb-3 md:mb-4 text-accent">The Aether Experience</p>
              <h2 className="text-2xl md:text-5xl font-serif mb-4 md:mb-6 text-white leading-tight">
                Find an Official<br />Retailer
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 md:mb-10 text-xs md:text-base hidden sm:block">
                Discover Aether timepieces in person at one of our authorized boutiques worldwide.
                Our specialists will guide you through every detail of your chosen masterpiece.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="bg-white text-foreground py-3 md:py-4 px-6 md:px-10 uppercase tracking-widest text-[10px] md:text-xs hover:bg-accent hover:text-white transition-colors">
                  Find a Boutique
                </button>
                <button className="bg-transparent border border-white/50 text-white py-3 md:py-4 px-6 md:px-10 uppercase tracking-widest text-[10px] md:text-xs hover:border-white transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service highlights */}
      <div className="bg-background border-t border-metal/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 border border-metal/30 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold mb-1 md:mb-2">5-Year Warranty</h4>
            <p className="text-foreground/60 text-xs md:text-sm hidden sm:block">International guarantee on every timepiece</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 border border-metal/30 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold mb-1 md:mb-2">Free Engraving</h4>
            <p className="text-foreground/60 text-xs md:text-sm hidden sm:block">Personalize your timepiece at purchase</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 border border-metal/30 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold mb-1 md:mb-2">Global Shipping</h4>
            <p className="text-foreground/60 text-xs md:text-sm hidden sm:block">Insured delivery to your doorstep</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 border border-metal/30 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 3.02 1.37-5.68L2.84 8.4l5.79-.5L11.42 2.9l2.79 5 5.79.5-4.85 4.11 1.37 5.68z" />
              </svg>
            </div>
            <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold mb-1 md:mb-2">Lifetime Service</h4>
            <p className="text-foreground/60 text-xs md:text-sm hidden sm:block">Expert maintenance and restoration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
