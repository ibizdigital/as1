'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  affiliation: z.string().min(2, {
    message: "Please enter your Harvard affiliation.",
  }),
  interests: z.string().min(1, {
    message: "Please select your primary interest.",
  }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and privacy policy.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function FoundingCircle() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      affiliation: "",
      interests: "",
      consent: false,
    },
  });

  function onSubmit(data: FormValues) {
    // In a real implementation, you would submit to an API
    console.log(data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've joined the AS1 founding circle!",
      });
    }, 1000);
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const benefits = [
    "Early access to the AS1 platform",
    "Shape features through direct feedback",
    "Connect with the founding community",
    "Special recognition as a founding member",
    "Invitation to launch events"
  ];

  return (
    <section id="founding-circle" className="py-20 relative">
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
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
              Join the Founding Circle
            </h2>
            <p className="text-xl mb-8">
              Be among the first to experience AS1 and help shape its future. As a founding member, 
              you'll have direct input on features and access to exclusive events.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="shadow-lg bg-white">
            <CardHeader>
              <CardTitle>Sign Up for the Founding Circle</CardTitle>
              <CardDescription>
                Fill out this form to join the first wave of AS1 members. Harvard affiliation required during beta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@harvard.edu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="affiliation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Harvard Affiliation</FormLabel>
                          <FormControl>
                            <Input placeholder="College, GSAS, HBS, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Interest</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your primary interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="data-ownership">Data Ownership</SelectItem>
                              <SelectItem value="content-creation">Content Creation</SelectItem>
                              <SelectItem value="community">Community Building</SelectItem>
                              <SelectItem value="privacy">Privacy & Security</SelectItem>
                              <SelectItem value="technology">Technology & Development</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{' '}
                              <a href="/terms" className="text-primary hover:underline">
                                terms of service
                              </a>{' '}
                              and{' '}
                              <a href="/privacy" className="text-primary hover:underline">
                                privacy policy
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Join Now
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">You're In!</h3>
                  <p className="mb-4">
                    Thank you for joining the AS1 founding circle. We've sent a confirmation email with next steps.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2"
                  >
                    Sign Up Another Person
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              We respect your privacy. Your information will never be sold or shared.
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}