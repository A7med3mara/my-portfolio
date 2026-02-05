 import { motion } from 'framer-motion';
 import FloatingShapes from '../3d/FloatingShapes';
 import profileImage from '@/assets/profile-placeholder.jpg';
 
 export default function HeroSection() {
   return (
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       <FloatingShapes />
       
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
       
       <div className="container relative z-10 flex flex-col items-center text-center px-6">
         {/* Profile Image */}
         <motion.div
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, type: "spring" }}
           className="relative mb-8"
         >
           <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/50 glow-primary">
             <img
               src={profileImage}
               alt="Profile"
               className="w-full h-full object-cover"
             />
           </div>
           <div className="absolute -inset-2 rounded-full border border-primary/30 animate-pulse-glow" />
         </motion.div>
 
         {/* Name & Title */}
         <motion.div
           initial={{ y: 30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
             <span className="text-foreground">مرحباً، أنا  </span>
             <span className="text-gradient">احمد سرور محمد عمارة</span>
           </h1>
           <p className="text-xl md:text-2xl text-muted-foreground mb-8">
             مطور ويب متخصص • مصمم UI/UX
           </p>
         </motion.div>
 
         {/* CTA Buttons */}
         <motion.div
           initial={{ y: 30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex flex-wrap gap-4 justify-center"
         >
           <a
             href="#projects"
             className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform glow-primary"
           >
             عرض المشاريع
           </a>
           <a
             href="#contact"
             className="px-8 py-3 rounded-full glass text-foreground font-semibold hover:scale-105 transition-transform border border-primary/30"
           >
             تواصل معي
           </a>
         </motion.div>
 
         {/* Scroll indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2"
         >
           <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center">
             <motion.div
               animate={{ y: [0, 12, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-1.5 h-3 bg-primary rounded-full mt-2"
             />
           </div>
         </motion.div>
       </div>
     </section>
   );
 }