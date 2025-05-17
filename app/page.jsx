'use client';

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Card";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/traffic_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 bg-black/60 min-h-screen">
        <header className="px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest text-white">NEOGLASS</h1>
          <Button className="text-sm px-4 py-2">Pre-Order</Button>
        </header>

        <main className="px-8 md:px-20 py-10 space-y-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
          >
            Welcome to the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
          >
            Introducing NeoGlass — AI-powered AR glasses that redefine your world.
          </motion.p>
          <Button className="inline-flex items-center gap-2">
            Explore Features <ArrowRight size={18} />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {["AI Integration", "Real-time AR", "Gesture Control"].map((feature, index) => (
              <Card key={index}>
                <CardContent className="space-y-4">
                  <Sparkles className="text-purple-400 w-8 h-8" />
                  <h3 className="text-xl font-semibold">{feature}</h3>
                  <p className="text-sm text-gray-400">
                    Experience cutting-edge tech like never before.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <footer className="px-8 py-10 text-center text-gray-500 text-sm">
          © 2025 NeoGlass Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
