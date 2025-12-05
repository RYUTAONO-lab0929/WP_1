import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealText } from "@/components/ui/RevealText";

const services = [
  {
    title: "Creative Direction",
    description: "Defining the core idea, tone and territories that guide all expressions. We build the visual and narrative foundation for your brand.",
    items: ["Visual Language", "Narrative Systems", "Campaign Concepts", "Art Direction"]
  },
  {
    title: "Film & Motion",
    description: "Motion language, transitions, type in motion, and direction for live-action & CG. We bring static ideas to life through rhythm and timing.",
    items: ["Motion Design", "3D / CGI", "Video Editing", "Sound Design"]
  },
  {
    title: "Digital Experiences",
    description: "Crafting immersive web experiences that balance precision and emotion. From portfolio sites to complex interactive platforms.",
    items: ["Web Design", "Frontend Development", "Creative Coding", "WebGL / 3D Web"]
  },
  {
    title: "Brand Identity",
    description: "Typography, color, grids, and imagery systems for a cohesive look & feel. We design systems that scale across every touchpoint.",
    items: ["Logo Design", "Brand Guidelines", "Typography", "Print Design"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 min-h-[60vh] flex flex-col justify-end border-b border-white/10">
        <div className="max-w-[90rem] mx-auto w-full">
           <p className="text-sm md:text-base font-mono mb-6 opacity-50 uppercase tracking-widest">Our Expertise</p>
           <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none uppercase max-w-5xl">
             <RevealText>We shape</RevealText><br />
             <RevealText delay={0.1}>Digital</RevealText><br />
             <RevealText delay={0.2} className="text-[#333]">Culture.</RevealText>
           </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-[90rem] mx-auto">
           <div className="grid grid-cols-1 gap-32">
             {services.map((service, index) => (
               <div key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/20 pt-12 hover:border-white transition-colors duration-500">
                 <div className="md:col-span-4">
                   <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 group-hover:text-gray-400 transition-colors">
                     {service.title}
                   </h2>
                 </div>
                 <div className="md:col-span-4">
                   <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                     {service.description}
                   </p>
                 </div>
                 <div className="md:col-span-4">
                   <ul className="space-y-2">
                     {service.items.map((item, i) => (
                       <li key={i} className="text-sm uppercase tracking-widest border-b border-white/10 pb-2 mb-2 last:border-0 opacity-70">
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Process / Philosophy */}
      <section className="px-6 md:px-12 py-32 bg-[#111]">
         <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-2xl leading-relaxed font-light text-gray-400">
              We approach every project as a system — where clarity, rhythm, and motion define how ideas take shape. We design not just for screens, but for the way people feel and interact.
            </p>
            <div className="mt-12">
               <span className="text-xs uppercase tracking-[0.3em] border border-white/20 px-6 py-3 rounded-full">The Brunsohn Method</span>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

