'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
          <Menu className="w-5 h-5 text-foreground cursor-pointer" />
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
  );
}
