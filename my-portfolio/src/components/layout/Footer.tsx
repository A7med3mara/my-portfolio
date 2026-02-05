 import { Heart } from 'lucide-react';
 
 export default function Footer() {
   return (
     <footer className="py-8 border-t border-border">
       <div className="container max-w-6xl mx-auto px-6 text-center">
         <p className="text-muted-foreground flex items-center justify-center gap-2">
           صُنع بـ <Heart className="w-4 h-4 text-primary fill-primary" /> بواسطة{' '}
           <span className="text-gradient font-semibold">ahmed sror mohamed emara</span>
         </p>
         <p className="text-sm text-muted-foreground mt-2">
           © {new Date().getFullYear()} جميع الحقوق محفوظة
         </p>
       </div>
     </footer>
   );
 }