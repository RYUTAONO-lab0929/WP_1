import React from "react";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full py-20 px-6 md:px-12 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              Let's create <br /> together.
            </h2>
            <a href="mailto:hello@brunsohn.studio" className="text-xl md:text-2xl border-b border-white/30 pb-1 hover:border-white hover:opacity-70 transition-all">
              hello@brunsohn.studio
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm text-white/60">
             <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Socials</h4>
                <ul className="space-y-2">
                    <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
                    <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h4>
                <ul className="space-y-2">
                    <li className="hover:text-white cursor-pointer transition-colors">Works</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Services</li>
                    <li className="hover:text-white cursor-pointer transition-colors">About</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© Brunsohn 2025.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Legals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

