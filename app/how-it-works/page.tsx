'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, Users, Layers, Filter } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState('data');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      id: 'data',
      title: 'You Own Your Data',
      icon: <Database className="h-10 w-10" />,
      description: 'At AS1, your data belongs to you—not us. Access, download, or delete your information at any time. We never sell your data to advertisers or third parties.',
      details: [
        'Complete transparency about what data we collect',
        'Download all your data in standard formats',
        'Delete your information permanently at any time',
        'Control exactly who sees what you share',
        'No hidden tracking or shadow profiles'
      ]
    },
    {
      id: 'feed',
      title: 'You Curate Your Feed',
      icon: <Filter className="h-10 w-10" />,
      description: 'Say goodbye to black-box algorithms. On AS1, you decide what appears in your feed, with clear controls for content discovery and filtering.',
      details: [
        'Choose content categories you want to see',
        'Adjust algorithmic recommendations with simple controls',
        'Create custom filters for different moods or purposes',
        'Chronological timeline always available',
        'No engagement-maximizing manipulation'
      ]
    },
    {
      id: 'community',
      title: 'Community-First Design',
      icon: <Users className="h-10 w-10" />,
      description: 'AS1 is built to foster genuine connections. Our features encourage meaningful interactions rather than viral spread or addictive scrolling.',
      details: [
        'Tools for creating micro-communities around shared interests',
        'Focus on quality connections over quantity of followers',
        'Community guidelines co-created with our users',
        'Moderation tools that respect context and nuance',
        'Spaces for collaborative creation and feedback'
      ]
    },
    {
      id: 'platform',
      title: 'A Platform That Evolves',
      icon: <Layers className="h-10 w-10" />,
      description: 'AS1 grows with its community. As a founding circle member, your input directly shapes our development priorities and feature roadmap.',
      details: [
        'Regular community feedback sessions and transparent development',
        'Founding circle members get early access to new features',
        'Open API for community-created tools and extensions',
        'Clear documentation of changes and updates',
        'Commitment to long-term sustainability, not short-term growth'
      ]
    }
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
            How It Works
          </h1>
          
          <p className="text-xl mb-12">
            AS1 is designed around a simple principle: technology should serve people, not exploit them.
            Here's how we're building a platform that puts you in control:
          </p>

          <Tabs defaultValue="data" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
              {features.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className={`
                    h-auto py-4 px-4 flex flex-col items-center text-center gap-2 data-[state=active]:bg-primary 
                    data-[state=active]:text-primary-foreground border border-border rounded-lg
                  `}
                >
                  {feature.icon}
                  <span className="font-medium text-sm md:text-base mt-2">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {features.map((feature) => (
              <TabsContent 
                key={feature.id} 
                value={feature.id}
                className={`
                  p-8 border border-border rounded-lg bg-card transition-all duration-300
                  ${activeTab === feature.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg mb-6">{feature.description}</p>
                    
                    <h4 className="font-semibold text-lg mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm mr-3 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}