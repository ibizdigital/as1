'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative">
      {/* SVG Background */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/images_assets/backgrounds/GAMMA POP.svg"
          alt="Gamma Pop Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container max-w-6xl px-4 py-16 mx-auto -mt-32 relative z-10">
        <motion.div 
          className="bg-background p-8 md:p-12 rounded-lg shadow-lg mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
            What is AS1?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-4">
                AS1 is a new kind of platform built around a simple yet powerful idea: <strong>you own your data</strong>. 
                We're creating a digital space where people can connect, share, and discover without sacrificing their 
                privacy or autonomy.
              </p>
              <p className="text-lg mb-4">
                Unlike other platforms that monetize your personal information and attention, AS1 puts you in control. 
                You decide what to share, who to connect with, and how your information is used.
              </p>
              <p className="text-lg">
                Born at Harvard but built for everyone, AS1 combines cutting-edge technology with thoughtful 
                design to create a more ethical, transparent, and joyful digital experience.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden relative h-[300px] md:h-auto">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Diverse group of people collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-background p-8 md:p-12 rounded-lg shadow-lg mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold uppercase tracking-tight mb-8">
            Why We're Building This
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn} className="rounded-lg overflow-hidden relative h-[300px] md:h-auto">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Innovation concept"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <p className="text-lg mb-4">
                We believe the current social media landscape is broken. Algorithms designed to maximize engagement 
                have led to addictive patterns, privacy violations, and the spread of misinformation.
              </p>
              <p className="text-lg mb-4">
                AS1 was created to prove there's a better way forward—one where technology serves people, not the 
                other way around. We're building a platform that respects your attention, protects your data, 
                and fosters meaningful connections.
              </p>
              <p className="text-lg">
                Our mission is to create a space that encourages discovery, creativity, and genuine human connection—all
                while giving you complete ownership of your digital presence.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-background p-8 md:p-12 rounded-lg shadow-lg"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold uppercase tracking-tight mb-8">
            Who It's For
          </motion.h2>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Students & Creators</h3>
              <p>
                AS1 provides a platform where your original content remains yours. Connect with peers, showcase your 
                work, and build your portfolio without losing control of your creative assets.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Community Organizers</h3>
              <p>
                Create vibrant digital spaces for your communities. AS1 offers tools to foster meaningful connections 
                and collaborations while maintaining privacy and trust.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Anyone Who Values Privacy</h3>
              <p>
                If you're tired of being the product, AS1 welcomes you. Experience social connectivity without 
                sacrificing your data or attention to advertisers and algorithms.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}