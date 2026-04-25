import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollDisassemblyAnimation from '@/components/animations/ScrollDisassemblyAnimation';

export default async function Home() {
  // Fetch featured products from backend
  let products = [];
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
      
      {/* Hero & Disassembly Section */}
      <section className="relative w-full">
        <ScrollDisassemblyAnimation />
        
        {/* Absolute Hero Text overlay on the first frame before scrolling */}
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-between px-12 md:px-24 pointer-events-none z-10">
          <div className="max-w-md mt-[-10%]">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 text-foreground/70">The Masterpiece</p>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6">
              Engineering<br />Beyond Time
            </h1>
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

      {/* Featured Collection Section */}
      <section className="py-32 px-6 bg-background-secondary relative z-20 border-t border-metal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">The Collection</h2>
            <p className="text-sm tracking-widest uppercase text-foreground/50">Masterpieces of Horology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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

      {/* Craftsmanship Section */}
      <section className="py-32 px-6 bg-background relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="aspect-square bg-background-secondary rounded-full flex items-center justify-center relative overflow-hidden border border-metal/30 shadow-inner">
            <div className="w-[80%] h-[80%] rounded-full border border-metal/20 flex items-center justify-center">
              <div className="w-[60%] h-[60%] rounded-full border border-metal/10" />
            </div>
            <img src="/frames/frame-00001.jpg" alt="Mechanism" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 text-accent">Craftsmanship</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              The Soul of the<br />Machine
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              At the heart of every Aether watch lies an automatic movement of unparalleled precision. 
              Forged from medical-grade stainless steel and protected by scratch-resistant sapphire crystal,
              it represents the pinnacle of modern horology.
            </p>
            <div className="grid grid-cols-2 gap-8 text-sm">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
