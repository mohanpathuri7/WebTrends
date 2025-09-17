"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkles, 
  Zap, 
  Palette, 
  Globe, 
  Code2, 
  Rocket,
  Brain,
  Eye,
  Smartphone,
  Monitor,
  ArrowRight,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

const trends = [
  {
    id: 1,
    icon: Brain,
    title: "AI-Powered Interfaces",
    description: "Smart components that adapt to user behavior and provide personalized experiences.",
    color: "from-blue-500 to-purple-600",
    features: ["Adaptive UX", "Smart Predictions", "Auto-optimization"]
  },
  {
    id: 2,
    icon: Eye,
    title: "Immersive Animations",
    description: "Sophisticated micro-interactions and smooth transitions that enhance user engagement.",
    color: "from-emerald-500 to-teal-600",
    features: ["Micro-interactions", "Gesture-based", "Performance-first"]
  },
  {
    id: 3,
    icon: Palette,
    title: "Dynamic Gradients",
    description: "Living gradients that respond to user actions and create engaging visual experiences.",
    color: "from-orange-500 to-red-600",
    features: ["Interactive colors", "Mood-based", "Accessibility-aware"]
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile-First Everything",
    description: "Designs that prioritize mobile experience while scaling beautifully to desktop.",
    color: "from-violet-500 to-purple-600",
    features: ["Touch-optimized", "Responsive grids", "Progressive enhancement"]
  }
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      
      <Navigation isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Latest in Web Development
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Web Trends
              </span>
              <span className="block text-gray-900 dark:text-white mt-2">
                for 2025
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the cutting-edge technologies and design patterns that are shaping 
              the future of web development. From AI-powered interfaces to immersive animations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-4 text-lg">
                Explore Trends
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                <Code2 className="w-5 h-5 mr-2" />
                View Demos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leading Trends
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The innovations that are defining modern web experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trends.map((trend, index) => (
              <Card 
                key={trend.id}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${trend.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${trend.color} flex items-center justify-center shadow-lg`}>
                      <trend.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{trend.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {trend.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {trend.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Showcase
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience these trends in action with live, interactive examples
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Fluid layouts that adapt seamlessly across all devices
                </p>
                <Button variant="outline" className="group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  Try Demo
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance First</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Lightning-fast loading with optimized animations
                </p>
                <Button variant="outline" className="group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  View Metrics
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern UX</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Intuitive interfaces with delightful interactions
                </p>
                <Button variant="outline" className="group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  Explore UX
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                WebTrends 2025
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              Exploring the future of web development, one trend at a time.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
            
            <Separator className="w-full max-w-md mb-6" />
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 WebTrends. Built with Next.js and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}