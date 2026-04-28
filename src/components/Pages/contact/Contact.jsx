/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Camera, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Inquiry about Cakes",
    message: "",
  });

  const ownerNumber = "+6581045226";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = `*New Inquiry from Zahra's Delights Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    window.open(`https://wa.me/${ownerNumber.replace("+", "")}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-rose-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-[#3e2723]"
          >
            Let's start a <span className="italic text-rose-400">sweet</span> conversation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#3e2723] text-lg mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm mb-1 tracking-wider">{ownerNumber}</p>
                  <p className="text-[10px] uppercase font-bold text-rose-400">Available 9am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#3e2723] text-lg mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm mb-1 tracking-wider">shazhiya9686@gmail.com</p>
                  <p className="text-[10px] uppercase font-bold text-rose-400">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#3e2723] text-lg mb-1">Our Studio</h4>
                  <p className="text-gray-400 text-sm mb-1 tracking-wider">Singapore, Home-based Kitchen</p>
                  <p className="text-[10px] uppercase font-bold text-rose-400">Island-wide delivery available</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-rose-50">
              <h4 className="font-serif font-bold text-[#3e2723] mb-6">Follow our journey</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/zahras_delights?igsh=aTF1ZnZneWdzN2I2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#3e2723] text-white rounded-xl flex items-center justify-center hover:bg-rose-500 transition-all active:scale-90">
                  <Camera size={20} />
                </a>

                <a href={`https://wa.me/${ownerNumber.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#3e2723] text-white rounded-xl flex items-center justify-center hover:bg-rose-500 transition-all active:scale-90">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-rose-50/20 p-8 md:p-12 rounded-[3rem] border border-rose-50/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-[#3e2723]/60 ml-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Shaheen Banu"
                    className="w-full bg-white border-0 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rose-200 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-[#3e2723]/60 ml-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full bg-white border-0 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rose-200 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-[#3e2723]/60 ml-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border-0 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rose-200 transition-all shadow-sm appearance-none"
                >
                  <option>Inquiry about Cakes</option>
                  <option>Bulk Order / Events</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-[#3e2723]/60 ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your sweet requirement..."
                  className="w-full bg-white border-0 rounded-3xl px-6 py-4 text-sm focus:ring-2 focus:ring-rose-200 transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3e2723] text-white rounded-2xl py-5 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-rose-500 transition-all shadow-xl shadow-rose-100 active:scale-95 group"
              >
                Send via WhatsApp
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
