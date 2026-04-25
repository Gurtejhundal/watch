export default function Footer() {
  return (
    <footer className="bg-background-secondary pt-24 pb-12 border-t border-metal/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-serif text-2xl tracking-[0.2em] text-foreground mb-6">AETHER</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Precision engineering meets timeless elegance. Crafted for the extraordinary.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Collections</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-accent transition-colors">Deep Sea</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Astral</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Aero</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Legacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li><a href="#" className="hover:text-accent transition-colors">Care & Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Find a Boutique</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Warranty</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Newsletter</h4>
          <p className="text-sm text-foreground/60 mb-4">Subscribe to receive updates on exclusive releases.</p>
          <div className="flex border-b border-metal/50 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent w-full text-sm outline-none placeholder:text-foreground/40 text-foreground"
            />
            <button className="text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 border-t border-metal/20 pt-8">
        <p>&copy; {new Date().getFullYear()} Aether Watches. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
