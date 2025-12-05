import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealText } from "@/components/ui/RevealText";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0] text-[#111]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 min-h-[50vh] flex flex-col justify-center">
        <div className="max-w-[90rem] mx-auto w-full">
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
             <RevealText>Small Team,</RevealText><br />
             <RevealText delay={0.1}>Big Impact.</RevealText>
           </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-20">
         <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Image */}
            <div className="relative aspect-[4/5] md:aspect-[3/4] bg-gray-200 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                 alt="Studio Atmosphere" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-12">
               <div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Who We Are</h2>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                    Brunsohn is a creative development studio shaping digital work where clarity meets intensity. We merge design, engineering, and motion into experiences that feel alive.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-6">
                    Founded in 2025, we are a collective of designers, developers, and directors who believe that every interface has the power to express identity — not just through visuals, but through rhythm, movement, and the way it makes people feel.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-8 pt-12 border-t border-[#111]/10">
                  <div>
                     <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Locations</h3>
                     <ul className="space-y-1 font-medium">
                        <li>Tokyo, Japan</li>
                        <li>Paris, France</li>
                        <li>Berlin, Germany</li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Contact</h3>
                     <ul className="space-y-1 font-medium">
                        <li>hello@brunsohn.studio</li>
                        <li>+81 03 1234 5678</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Team Section (Abstract) */}
      <section className="px-6 md:px-12 py-32 bg-white">
         <div className="max-w-[90rem] mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
               <RevealText>The Collective</RevealText>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { 
                   name: "Valérian Kinyock", 
                   role: "Creative Director",
                   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                 },
                 { 
                   name: "Sophie Nguyen", 
                   role: "Lead Producer",
                   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop"
                 },
                 { 
                   name: "Nina Lens", 
                   role: "Design Engineer",
                   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
                 }
               ].map((member, i) => (
                 <div key={i} className="border-t border-[#111] pt-4 group cursor-pointer">
                    <div className="flex justify-between items-end mb-4">
                       <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                       <span className="text-xs uppercase tracking-widest opacity-50">{member.role}</span>
                    </div>
                    <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                       <img 
                         src={member.image} 
                         alt={member.name}
                         className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                         loading="lazy"
                       />
                       <div className="absolute inset-0 bg-[#111]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

