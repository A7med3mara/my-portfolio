 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Menu, X } from 'lucide-react';
 
 const navLinks = [
   { href: '#home', label: 'الرئيسية' },
   { href: '#about', label: 'عني' },
   { href: '#projects', label: 'المشاريع' },
   { href: '#contact', label: 'تواصل' },
 ];
 
 export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   return (
     <>
       <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.6 }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled ? 'glass py-3' : 'py-6'
         }`}
       >
         <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
           <a href="#home" className="text-2xl font-bold text-gradient">
             Portfolio
           </a>
 
           {/* Desktop Nav */}
           <ul className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <li key={link.href}>
                 <a
                   href={link.href}
                   className="text-muted-foreground hover:text-primary transition-colors"
                 >
                   {link.label}
                 </a>
               </li>
             ))}
           </ul>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 text-foreground"
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
       </motion.nav>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed top-16 left-0 right-0 z-40 glass md:hidden"
           >
             <ul className="flex flex-col items-center py-6 gap-6">
               {navLinks.map((link) => (
                 <li key={link.href}>
                   <a
                     href={link.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="text-lg text-muted-foreground hover:text-primary transition-colors"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 }