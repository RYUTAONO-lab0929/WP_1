import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f0] text-[#1a1a1a]">
       <Header />
       <Hero />
       <Works />
       {/* ServicesやAboutもここに挟むイメージですが、まずはWorksまで */}
       <Footer />
    </main>
  );
}
