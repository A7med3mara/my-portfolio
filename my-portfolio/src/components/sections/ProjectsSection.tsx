 import { motion } from 'framer-motion';
 import { ExternalLink, Github } from 'lucide-react';
 
 const projects = [
   {
     title: 'مشروع التجارة الإلكترونية',
     description: 'متجر إلكتروني متكامل مع نظام دفع وإدارة المنتجات',
     tags: ['React', 'Node.js', 'MongoDB'],
     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
     liveUrl: '#',
     githubUrl: '#',
   },
   {
     title: 'تطبيق إدارة المهام',
     description: 'تطبيق لإدارة المهام والمشاريع مع واجهة سهلة الاستخدام',
     tags: ['React', 'TypeScript', 'Firebase'],
     image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
     liveUrl: '#',
     githubUrl: '#',
   },
   {
     title: 'لوحة تحكم تحليلية',
     description: 'لوحة تحكم لعرض وتحليل البيانات مع رسوم بيانية تفاعلية',
     tags: ['Next.js', 'Chart.js', 'Tailwind'],
     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
     liveUrl: '#',
     githubUrl: '#',
   },
   {
     title: 'موقع شخصي',
     description: 'موقع شخصي تفاعلي مع تأثيرات 3D ورسوم متحركة',
     tags: ['React', 'Three.js', 'Framer Motion'],
     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
     liveUrl: '#',
     githubUrl: '#',
   },
 ];
 
 export default function ProjectsSection() {
   return (
     <section id="projects" className="section-padding relative bg-secondary/30">
       <div className="container max-w-6xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
             <span className="text-gradient">مشاريعي</span>
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-8">
           {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
             >
               <div className="relative overflow-hidden">
                 <img
                   src={project.image}
                   alt={project.title}
                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 
                 {/* Overlay buttons */}
                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <a
                     href={project.liveUrl}
                     className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                   >
                     <ExternalLink className="w-5 h-5" />
                   </a>
                   <a
                     href={project.githubUrl}
                     className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
                   >
                     <Github className="w-5 h-5" />
                   </a>
                 </div>
               </div>
 
               <div className="p-6">
                 <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                 <p className="text-muted-foreground mb-4">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag) => (
                     <span
                       key={tag}
                       className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                     >
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }