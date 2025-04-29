'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Database, Users, Layers, Filter } from 'lucide-react';

export function HowItWorks() {
  const features = [
    {
      title: 'You Own Your Data',
      icon: <Database className="h-8 w-8" />,
      description: 'Your personal information belongs to you—not us. Download, delete, or modify at any time.'
    },
    {
      title: 'You Curate Your Feed',
      icon: <Filter className="h-8 w-8" />,
      description: 'No black-box algorithms. You control what content you see and how it\'s organized.'
    },
    {
      title: 'Community-First Design',
      icon: <Users className="h-8 w-8" />,
      description: 'Built for meaningful connections, not just scrolling and likes.'
    },
    {
      title: 'A Platform That Evolves',
      icon: <Layers className="h-8 w-8" />,
      description: 'Founding members shape our roadmap through direct feedback and co-creation.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            AS1 is designed from the ground up with a different approach to social platforms.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}