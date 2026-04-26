export default function Footer() {
  return (
    <footer className="bg-background-secondary pt-16 md:pt-24 pb-8 md:pb-12 border-t border-metal/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] text-foreground mb-4 md:mb-6">AETHER</h3>
          <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
            Precision engineering meets timeless elegance. Crafted for the extraordinary.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-foreground mb-4 md:mb-6">Collections</h4>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-foreground/70">
            <li><a href="#" className="hover:text-accent transition-colors">Deep Sea</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Astral</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Aero</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Legacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-foreground mb-4 md:mb-6">Support</h4>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-foreground/70">
            <li><a href="#" className="hover:text-accent transition-colors">Care &amp; Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Find a Boutique</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Warranty</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-foreground mb-4 md:mb-6">Newsletter</h4>
          <p className="text-xs md:text-sm text-foreground/60 mb-3 md:mb-4">Subscribe for exclusive releases.</p>
          <div className="flex border-b border-metal/50 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent w-full text-xs md:text-sm outline-none placeholder:text-foreground/40 text-foreground"
            />
            <button className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors whitespace-nowrap ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-foreground/40 border-t border-metal/20 pt-6 md:pt-8">
        <p>&copy; {new Date().getFullYear()} Aether Watches. All rights reserved.</p>
        <div className="flex gap-4 md:gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
