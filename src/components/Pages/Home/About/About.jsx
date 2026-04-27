/** @format */

import { motion } from "framer-motion";
import { Heart, Star, Coffee } from "lucide-react";
import chefImage from "../../../../assets/images/image_1.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-rose-50">
              <img 
                src={chefImage} 
                alt="Shaheen Banu baking" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-rose-500 text-white p-8 rounded-[2rem] shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold mb-1">2+</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Years of Baking Passion</p>
            </div>

            {/* Decorative shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose-50 rounded-full -z-10 blur-3xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rose-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Meet the Founder</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#3e2723] mb-8 leading-tight">
              Crafting sweet memories with <span className="italic text-rose-400">Shaheen Banu</span>
            </h2>
            
            <div className="space-y-6 text-gray-500 leading-relaxed text-base font-light italic">
              <p>
                Welcome to Zahra's Delights! My journey began in a small kitchen filled with the aroma of freshly baked cocoa and the warmth of family traditions. As a passionate baker, I, <span className="font-semibold text-[#3e2723]">Shaheen Banu</span>, believe that every treat should tell a story.
              </p>
              <p>
                What started as a labor of love for friends and family has blossomed into a destination for artisanal desserts. From our signature "Zahra's Fudgy" brownies to our royal Arabian treats, every ingredient is hand-selected to ensure the highest quality and most authentic flavors.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center group">
                <Heart className="text-rose-300 mb-4 group-hover:text-rose-500 transition-colors" size={24} />
                <h4 className="font-serif font-medium text-[#3e2723] mb-1">Made with Love</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Handcrafted daily</p>
              </div>
              <div className="flex flex-col items-center text-center group border-x border-rose-50 px-4">
                <Star className="text-rose-300 mb-4 group-hover:text-rose-500 transition-colors" size={24} />
                <h4 className="font-serif font-medium text-[#3e2723] mb-1">Quality First</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Premium ingredients</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <Coffee className="text-rose-300 mb-4 group-hover:text-rose-500 transition-colors" size={24} />
                <h4 className="font-serif font-medium text-[#3e2723] mb-1">Tradition</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Authentic recipes</p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="w-12 h-[1px] bg-rose-100" />
              <p className="font-['Great_Vibes'] text-3xl text-rose-400">Shaheen Banu</p>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
