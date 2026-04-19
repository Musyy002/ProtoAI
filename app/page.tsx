import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Header from "./_shared/Header";
import Hero from "./_shared/Hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen"> 
       <Header />
       <Hero />
       
      
       <div className="absolute -z-10 top-0 right-0 h-[500px] w-[500px] bg-pink-400/40 blur-[120px] rounded-full" />
       <div className="absolute -z-10 bottom-0 left-0 h-[500px] w-[500px] bg-blue-400/40 blur-[120px] rounded-full" />
       <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-sky-400/40 blur-[120px] rounded-full" />
    </div>
    
  );
}