import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollDisassemblyAnimation from '@/components/animations/ScrollDisassemblyAnimation';
import CategoryShowcase from '@/components/ui/CategoryShowcase';
import WorldOfAether from '@/components/ui/WorldOfAether';
import BoutiqueLocator from '@/components/ui/BoutiqueLocator';

export default async function Home() {
  // Fetch featured products from backend
  let products: any[] = [];
  try {
    const res = await fetch('http://127.0.0.1:8000/api/products/', { cache: 'no-store' });
    if (res.ok) {
      products = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* ─── HERO & DISASSEMBLY ─── */}
      <section className="relative w-full">
        <ScrollDisassemblyAnimation />
        
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-4 md:px-24 pointer-events-none z-10 text-center md:text-left gap-8 md:gap-0">
          <div className="max-w-md mt-[-30%] md:mt-[-10%]">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 md:mb-4 text-foreground/70">The Masterpiece</p>
            <h1 className="text-4xl md:text-7xl font-serif text-foreground leading-tight mb-4 md:mb-6">
              Engineering<br />Beyond Time
            </h1>
            <button className="md:hidden pointer-events-auto bg-transparent border border-metal text-foreground hover:bg-foreground hover:text-white transition-all px-6 py-2.5 text-[10px] tracking-widest uppercase mt-2">
              Discover
            </button>
          </div>
          <div className="hidden md:block max-w-xs text-right mt-[10%]">
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              A symphony of 192 components perfectly synchronized to capture eternity.
            </p>
            <button className="pointer-events-auto bg-transparent border border-metal text-foreground hover:bg-foreground hover:text-white transition-all px-8 py-3 text-xs tracking-widest uppercase">
              Discover
            </button>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY SHOWCASE (Classic vs Professional) ─── */}
      <CategoryShowcase />

      {/* ─── FEATURED COLLECTION ─── */}
      <section className="py-20 md:py-32 px-6 bg-background-secondary relative z-20 border-t border-metal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">The Collection</h2>
            <p className="text-sm tracking-widest uppercase text-foreground/50">Masterpieces of Horology</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product: any) => (
              <a href={`/products/${product.slug}`} key={product.id} className="group block cursor-pointer">
                <div className="aspect-[3/4] bg-background relative mb-6 flex items-center justify-center overflow-hidden border border-metal/20 shadow-sm transition-shadow group-hover:shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
                  {product.images && product.images[0] ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-48 h-48 rounded-full border border-metal/30 flex items-center justify-center text-metal/50 text-xs">No Image</div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-serif mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-xs tracking-widest text-foreground/50 uppercase mb-2">{product.collection}</p>
                  <p className="text-sm font-medium">${parseFloat(product.price).toLocaleString()}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRAFTSMANSHIP (Expanded Rolex Watchmaking) ─── */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-background relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 md:mb-32">
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 text-accent">Craftsmanship</p>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
                The Soul of the<br className="hidden md:block" /> Machine
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                At the heart of every Aether watch lies an automatic movement of unparalleled precision. 
                Forged from medical-grade stainless steel and protected by scratch-resistant sapphire crystal,
                it represents the pinnacle of modern horology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-sm">
                <div>
                  <strong className="block text-foreground mb-1 uppercase tracking-wider text-xs">Movement</strong>
                  <span className="text-foreground/60">Calibre 4500 Automatic</span>
                </div>
                <div>
                  <strong className="block text-foreground mb-1 uppercase tracking-wider text-xs">Water Resistance</strong>
                  <span className="text-foreground/60">300m / 1000ft</span>
                </div>
                <div>
                  <strong className="block text-foreground mb-1 uppercase tracking-wider text-xs">Power Reserve</strong>
                  <span className="text-foreground/60">70 Hours</span>
                </div>
                <div>
                  <strong className="block text-foreground mb-1 uppercase tracking-wider text-xs">Material</strong>
                  <span className="text-foreground/60">316L Stainless Steel</span>
                </div>
              </div>
            </div>
            <div className="aspect-square w-full max-w-md mx-auto md:max-w-none bg-background-secondary rounded-full flex items-center justify-center relative overflow-hidden border border-metal/30 shadow-inner order-2 md:order-1">
              <div className="w-[80%] h-[80%] rounded-full border border-metal/20 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-metal/10" />
              </div>
              <img src="/frames/frame-00001.jpg" alt="Mechanism" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
          </div>

          {/* Deep-Dive Material Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="border border-metal/20 p-6 md:p-10 group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-metal/30 flex items-center justify-center mb-4 md:mb-6 group-hover:border-accent/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-foreground/60 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-lg font-serif mb-3">The Steel</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                Aether exclusively uses Oystersteel — a superalloy belonging to the 904L steel family. 
                Its exceptional resistance to corrosion gives it a superior finish that retains its beauty 
                even in the harshest environments.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent cursor-pointer hover:underline">Learn More</span>
            </div>

            <div className="border border-metal/20 p-6 md:p-10 group hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-metal/30 flex items-center justify-center mb-4 md:mb-6 group-hover:border-accent/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-foreground/60 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif mb-3">The Movement</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                The Calibre 4500 is a self-winding mechanical movement entirely developed and manufactured 
                by Aether. With 28,800 oscillations per hour and a 70-hour power reserve, it defines 
                chronometric excellence.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent cursor-pointer hover:underline">Learn More</span>
            </div>

            <div className="border border-metal/20 p-6 md:p-10 group hover:border-accent/30 transition-colors sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-metal/30 flex items-center justify-center mb-4 md:mb-6 group-hover:border-accent/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-foreground/60 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif mb-3">Superlative Certification</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                Every Aether timepiece undergoes rigorous testing that goes beyond industry standards. 
                Certified to -2/+2 seconds per day, our Superlative Chronometer ensures precision that 
                exceeds COSC requirements.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent cursor-pointer hover:underline">Learn More</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORLD OF AETHER ─── */}
      <WorldOfAether />

      {/* ─── BOUTIQUE LOCATOR ─── */}
      <BoutiqueLocator />

      {/* ─── NEWSLETTER BANNER ─── */}
      <section className="py-16 md:py-28 px-4 md:px-6 bg-background-secondary border-t border-metal/20 relative z-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-accent">Stay Informed</p>
          <h2 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6">Keep in Touch</h2>
          <p className="text-foreground/60 text-sm leading-relaxed mb-10">
            Be the first to discover new Aether timepieces, exclusive events, and insights 
            into the world of precision watchmaking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border border-metal/30 px-6 py-4 text-sm outline-none placeholder:text-foreground/40 text-foreground focus:border-accent transition-colors"
            />
            <button className="bg-foreground text-background py-4 px-8 uppercase tracking-widest text-xs hover:bg-foreground/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
