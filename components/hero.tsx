'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative w-full h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images_assets/backgrounds/GAMMA POP.svg"
          alt="Gamma Pop Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-black text-white p-6 rounded-lg inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight">
              OWN YOUR DATA
              <div className="mt-2">OWN YOUR FUTURE</div>
            </h1>
            
            <div className="mt-6">
              <div className="text-3xl uppercase mb-2" style={{ fontSize: '36px' }}>WELCOME TO</div>
              <div className="flex justify-center">
                <Image 
                  src="/images_assets/logos/as1_logotype_neg.png"
                  alt="AS1 Logo"
                  width={325}
                  height={100}
                  priority
                  className="w-[325px] h-auto"
                />
              </div>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 md:mb-10 bg-black text-white p-4 rounded-lg inline-block"
          >
            Join the founding circle for a new kind of platform—one that prioritizes
            your data ownership, personal curation, and community connection.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="#founding-circle">Join the Founding Circle</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white text-black hover:bg-white/90 hover:text-black border-black">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"
      />
    </div>
  );
}