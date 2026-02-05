 import { motion } from 'framer-motion';
 import { Code2, Palette, Rocket } from 'lucide-react';
 
 const skills = [
   {
     icon: Code2,
     title: 'تطوير الويب',
     description: 'بناء تطبيقات ويب حديثة باستخدام أحدث التقنيات مثل React و TypeScript و Node.js',
   },
   {
     icon: Palette,
     title: 'تصميم UI/UX',
     description: 'تصميم واجهات مستخدم جذابة وسهلة الاستخدام مع تجربة مستخدم مميزة',
   },
   {
     icon: Rocket,
     title: 'تحسين الأداء',
     description: 'تحسين سرعة وأداء المواقع لضمان أفضل تجربة للمستخدمين',
   },
 ];
 
 export default function AboutSection() {
   return (
     <section id="about" className="section-padding relative">
       <div className="container max-w-6xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
             <span className="text-gradient">عني</span>
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
           className="glass rounded-2xl p-8 md:p-12 mb-16"
         >
           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
             أنا مطور ويب شغوف بإنشاء تجارب رقمية استثنائية. أمتلك خبرة واسعة في تطوير 
             تطبيقات الويب الحديثة وتصميم واجهات المستخدم. أسعى دائماً لتعلم التقنيات الجديدة 
             وتطبيقها في مشاريعي لتقديم أفضل الحلول للعملاء. أؤمن بأن الكود النظيف والتصميم 
             الجميل يجب أن يسيرا جنباً إلى جنب.
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-3 gap-6">
           {skills.map((skill, index) => (
             <motion.div
               key={skill.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
             >
               <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                 <skill.icon className="w-7 h-7 text-primary" />
               </div>
               <h3 className="text-xl font-semibold mb-3 text-foreground">{skill.title}</h3>
               <p className="text-muted-foreground">{skill.description}</p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }