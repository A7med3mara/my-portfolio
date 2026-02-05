 import { motion } from 'framer-motion';
 import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
 import { useState } from 'react';
 
 const contactInfo = [
   { icon: Mail, label: 'البريد الإلكتروني', value: 'saferjohanem@gmail.com' },
   { icon: Phone, label: 'رقم الهاتف', value: '01227603461' },
   { icon: MapPin, label: 'الموقع', value: 'دمياط , مصر' },
 ];
 
 const socialLinks = [
   { icon: Github, href: 'https://github.com/A7med3mara#', label: 'GitHub' },
   { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmed-emara-15a60a377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
   { icon: Twitter, href: 'https://x.com/ahmedemara2004?s=21', label: 'Twitter' },
 ];
 
 export default function ContactSection() {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     message: '',
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Handle form submission
     console.log('Form submitted:', formData);
   };
 
   return (
     <section id="contact" className="section-padding relative">
       <div className="container max-w-6xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
             <span className="text-gradient">تواصل معي</span>
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <h3 className="text-2xl font-semibold mb-6 text-foreground">لنتحدث!</h3>
             <p className="text-muted-foreground mb-8">
               أنا دائماً مهتم بفرص العمل الجديدة والمشاريع المميزة. لا تتردد في التواصل معي!
             </p>
 
             <div className="space-y-6 mb-8">
               {contactInfo.map((info) => (
                 <div key={info.label} className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                     <info.icon className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">{info.label}</p>
                     <p className="text-foreground font-medium">{info.value}</p>
                   </div>
                 </div>
               ))}
             </div>
 
             {/* Social Links */}
             <div className="flex gap-4">
               {socialLinks.map((social) => (
                 <a
                   key={social.label}
                   href={social.href}
                   className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
                   aria-label={social.label}
                 >
                   <social.icon className="w-5 h-5 text-foreground" />
                 </a>
               ))}
             </div>
           </motion.div>
 
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
               <div className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                     الاسم
                   </label>
                   <input
                     type="text"
                     id="name"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                     placeholder="اسمك الكريم"
                     required
                   />
                 </div>
 
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                     البريد الإلكتروني
                   </label>
                   <input
                     type="email"
                     id="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                     placeholder="email@example.com"
                     required
                   />
                 </div>
 
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                     الرسالة
                   </label>
                   <textarea
                     id="message"
                     rows={5}
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground"
                     placeholder="اكتب رسالتك هنا..."
                     required
                   />
                 </div>
 
                 <button
                   type="submit"
                   className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 glow-primary"
                 >
                   <Send className="w-5 h-5" />
                   إرسال الرسالة
                 </button>
               </div>
             </form>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }