'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2, 
  UserCircle2
} from 'lucide-react';

export default function ValuesPage() {
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

  const values = [
    {
      title: 'Ownership',
      icon: <UserCircle2 className="h-8 w-8" />,
      description: 'Your data is yours. We provide the tools to control it, but you decide how it\'s used and shared.'
    },
    {
      title: 'Transparency',
      icon: <ShieldCheck className="h-8 w-8" />,
      description: 'No black boxes. We explain our processes in plain language and make our business model clear.'
    },
    {
      title: 'Co-Creation',
      icon: <Lightbulb className="h-8 w-8" />,
      description: 'AS1 evolves with our community. Your ideas and feedback directly shape our platform.'
    },
    {
      title: 'Soft Power',
      icon: <HeartHandshake className="h-8 w-8" />,
      description: 'We prioritize influence through attraction rather than coercion, building a platform people choose.'
    },
    {
      title: 'Joy & Discovery',
      icon: <CheckCircle2 className="h-8 w-8" />,
      description: 'AS1 is designed to bring delight and serendipity, not anxiety or addiction.'
    }
  ];

  const guidelines = [
    'Be respectful and considerate in all interactions.',
    'Share content you have the right to share.',
    'Respect others\' privacy and consent.',
    'No hate speech, harassment, or harmful content.',
    'Contribute to a positive, supportive community.',
    'Report issues and help us improve.'
  ];

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
            Our Values
          </h1>
          
          <p className="text-xl mb-12">
            AS1 is built on a foundation of principles that guide everything we do—from 
            design decisions to community policies. These values aren't just words; 
            they're commitments.
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                className="p-6 bg-secondary rounded-lg flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-background p-8 md:p-12 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">
            Community Guidelines
          </h2>
          
          <div className="mb-8">
            <p className="text-xl mb-6">
              Our community thrives on mutual respect and shared responsibility. 
              These guidelines help ensure AS1 remains a positive space for everyone.
            </p>
            
            <ul className="space-y-4">
              {guidelines.map((guideline, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="inline-flex mr-4 flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-lg">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Legal Framework</h3>
            <p className="mb-4">
              These community guidelines are supported by our full terms of service and privacy policy, 
              which provide the complete legal framework for using AS1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/terms" className="underline text-primary hover:text-primary/80">
                User Agreement
              </a>
              <a href="/privacy" className="underline text-primary hover:text-primary/80">
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}