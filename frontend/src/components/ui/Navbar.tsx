'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6 md:hidden">
            <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu className="w-5 h-5 text-foreground cursor-pointer" />
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-foreground/80 font-medium">
            <Link href="/collections" className="hover:text-foreground transition-colors">Collections</Link>
            <Link href="/craftsmanship" className="hover:text-foreground transition-colors">Craftsmanship</Link>
            <Link href="/heritage" className="hover:text-foreground transition-colors">Heritage</Link>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif tracking-[0.2em] text-foreground">
            AETHER
          </Link>

          <div className="flex items-center gap-6 text-foreground/80">
            <Search className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors hidden md:block" />
            <User className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors hidden md:block" />
            <button className="relative">
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-[85%] max-w-sm h-full bg-background z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-metal/20">
                <span className="font-serif text-xl tracking-[0.2em]">AETHER</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
                <Link href="/collections" onClick={() => setMobileOpen(false)} className="py-4 text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground border-b border-metal/10 transition-colors">
                  Collections
                </Link>
                <Link href="/craftsmanship" onClick={() => setMobileOpen(false)} className="py-4 text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground border-b border-metal/10 transition-colors">
                  Craftsmanship
                </Link>
                <Link href="/heritage" onClick={() => setMobileOpen(false)} className="py-4 text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground border-b border-metal/10 transition-colors">
                  Heritage
                </Link>
                <Link href="/boutiques" onClick={() => setMobileOpen(false)} className="py-4 text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground border-b border-metal/10 transition-colors">
                  Find a Boutique
                </Link>
                <Link href="/account" onClick={() => setMobileOpen(false)} className="py-4 text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground border-b border-metal/10 transition-colors">
                  My Account
                </Link>
              </nav>
              <div className="px-6 py-6 border-t border-metal/20">
                <div className="flex items-center gap-6">
                  <Search className="w-5 h-5 text-foreground/60" />
                  <User className="w-5 h-5 text-foreground/60" />
                  <ShoppingBag className="w-5 h-5 text-foreground/60" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
