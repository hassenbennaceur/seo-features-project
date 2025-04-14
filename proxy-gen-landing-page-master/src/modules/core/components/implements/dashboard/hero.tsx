// src/components/HeroSection.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-[#1a0b2e] to-[#250c4c] px-6 py-20">
      
      <Badge variant="outline" className="border-purple-500 text-purple-400 bg-black mb-6 ">
        <span className="font-bold mr-1">NEW</span> Latest integration just arrived
      </Badge>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Boost your <br />
        rankings with <span className="text-purple-400">AI.</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
        Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
      </p>

      <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold text-lg rounded-xl shadow-lg">
        Start for free
      </Button>
    </section>
  );
}
