"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Rocket, 
  Users, 
  Target,
  Award,
  TrendingUp,
  Globe,
  Lightbulb,
  Heart,
  Star
} from 'lucide-react';

const stats = [
  { icon: Code2, label: "Projects Completed", value: "500+", color: "from-blue-500 to-purple-600" },
  { icon: Users, label: "Happy Clients", value: "200+", color: "from-emerald-500 to-teal-600" },
  { icon: Award, label: "Awards Won", value: "25+", color: "from-orange-500 to-red-600" },
  { icon: TrendingUp, label: "Years Experience", value: "8+", color: "from-violet-500 to-purple-600" }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve by embracing cutting-edge technologies and design patterns."
  },
  {
    icon: Heart,
    title: "User-Centered",
    description: "Every decision we make is guided by creating exceptional user experiences."
  },
  {
    icon: Target,
    title: "Quality Focused",
    description: "We deliver pixel-perfect, performant solutions that exceed expectations."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work reaches users worldwide, creating meaningful digital experiences."
  }
];

export default function About() {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              About Our Mission
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Crafting the Future
              </span>
              <span className="block text-gray-900 dark:text-white mt-2">
                of Web Development
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're passionate about pushing the boundaries of what's possible on the web. 
              Our team combines cutting-edge technology with thoughtful design to create 
              digital experiences that inspire and engage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className={`text-center group hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2017, WebTrends started as a small team of developers passionate about 
                creating exceptional web experiences. We saw the rapid evolution of web technologies 
                and wanted to help businesses stay ahead of the curve.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Today, we're proud to be at the forefront of web development trends, helping 
                companies worldwide build faster, more engaging, and more accessible digital products.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white">
                <Rocket className="w-5 h-5 mr-2" />
                Join Our Journey
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-24 h-24 mx-auto mb-4 text-emerald-500" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Innovation Driven
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Always exploring new possibilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`group hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}