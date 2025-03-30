'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-dark via-primary/90 to-accent">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark/30"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom relative z-10 pt-10 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm text-white rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Revolutionizing LinkedIn Engagement
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block">Next-Gen LinkedIn</span>{' '}
              <span className="inline-block text-gradient bg-gradient-to-r from-white to-accent/90 bg-clip-text text-transparent">
                Automation Tool
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Maintain an active LinkedIn presence without lifting a finger. Our AI-driven tool autonomously creates, posts, and engages—giving you complete freedom.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#signup" className="btn-accent text-white">
                Start for Free
              </a>
              <a href="#features" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                See Features
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-8 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-white/80 text-sm mb-2">Trusted by professionals from:</p>
              <div className="flex items-center gap-6">
                <div className="text-white/70 font-bold">Google</div>
                <div className="text-white/70 font-bold">Microsoft</div>
                <div className="text-white/70 font-bold">Adobe</div>
                <div className="text-white/70 font-bold">IBM</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9 bg-dark">
              {/* Add a placeholder for video/image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-primary to-accent/80">
                <div className="text-white text-xl font-bold">SociallyAI Demo</div>
              </div>
              {/* Uncomment if you have a demo video */}
              {/* <video 
                ref={videoRef}
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video> */}
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Post Published</div>
                <div className="text-xs text-gray-500">+287 views</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <div className="text-sm">
                <div className="font-semibold">AI Responding</div>
                <div className="text-xs text-gray-500">to 4 comments</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F3F2EF" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,133.3C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 