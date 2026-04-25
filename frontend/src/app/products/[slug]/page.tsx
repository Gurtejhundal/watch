import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Wait for params as required in Next.js app router for dynamic routes
  const { slug } = await params;
  
  let product: any = null;
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/products/${slug}/`, { cache: 'no-store' });
    if (res.ok) {
      product = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch product:", error);
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <h1 className="text-2xl font-serif text-foreground">Product not found.</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white pb-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="flex flex-col gap-6">
          <div className="aspect-[3/4] bg-background-secondary border border-metal/20 overflow-hidden relative group">
             {product.images && product.images[0] ? (
               <img 
                 src={product.images[0]} 
                 alt={product.name}
                 className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-125 origin-center cursor-zoom-in"
               />
             ) : (
               <div className="absolute inset-0 flex items-center justify-center text-metal/50 text-xs tracking-widest uppercase">
                 No Image Available
               </div>
             )}
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="aspect-square bg-background-secondary border border-metal/20 flex items-center justify-center overflow-hidden">
                <img src="/frames/frame-00045.jpg" alt="Detail 1" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
             </div>
             <div className="aspect-square bg-background-secondary border border-metal/20 flex items-center justify-center overflow-hidden">
                <img src="/frames/frame-00085.jpg" alt="Detail 2" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
             </div>
          </div>
        </div>

        {/* Sticky Purchase Panel */}
        <div className="relative">
          <div className="sticky top-32">
            <p className="text-xs tracking-widest text-foreground/50 uppercase mb-4">{product.collection}</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{product.name}</h1>
            <p className="text-xl font-medium mb-8">${parseFloat(product.price).toLocaleString()}</p>
            
            <p className="text-foreground/70 leading-relaxed mb-12 text-sm">
              {product.description}
            </p>

            <div className="flex flex-col gap-4 mb-12">
              <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-xs hover:bg-foreground/90 transition-colors">
                Add to Cart
              </button>
              <button className="w-full bg-transparent border border-metal/50 text-foreground py-4 uppercase tracking-widest text-xs hover:border-foreground transition-colors">
                Add to Wishlist
              </button>
            </div>

            {/* Technical Specifications */}
            <div className="border-t border-metal/20 pt-8">
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Technical Specifications</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-metal/10 pb-2">
                  <span className="text-foreground/60">Movement</span>
                  <span className="text-right">{product.movement_type}</span>
                </li>
                <li className="flex justify-between border-b border-metal/10 pb-2">
                  <span className="text-foreground/60">Case Material</span>
                  <span className="text-right">{product.case_material}</span>
                </li>
                <li className="flex justify-between border-b border-metal/10 pb-2">
                  <span className="text-foreground/60">Strap</span>
                  <span className="text-right">{product.strap_material}</span>
                </li>
                <li className="flex justify-between border-b border-metal/10 pb-2">
                  <span className="text-foreground/60">Dial Color</span>
                  <span className="text-right">{product.dial_color}</span>
                </li>
                <li className="flex justify-between border-b border-metal/10 pb-2">
                  <span className="text-foreground/60">Water Resistance</span>
                  <span className="text-right">{product.water_resistance}</span>
                </li>
                <li className="flex justify-between border-b border-metal/10 pb-2">
                  <span className="text-foreground/60">Case Size</span>
                  <span className="text-right">{product.case_size}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-foreground/60">Power Reserve</span>
                  <span className="text-right">{product.power_reserve}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
