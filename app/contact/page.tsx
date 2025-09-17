"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Globe,
  Twitter,
  Github,
  Linkedin
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@webtrends2025.com",
    description: "Send us an email anytime",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Innovation Street",
    description: "San Francisco, CA 94105",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 8am - 6pm",
    description: "Weekend support available",
    color: "from-violet-500 to-purple-600"
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Website" }
];

export default function Contact() {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <span className="block text-gray-900 dark:text-white mt-2">
                Amazing Together
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your project 
              and discuss how we can help you create exceptional web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className={`text-center group hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-3 text-emerald-500" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Expert Team</h4>
                      <p className="text-gray-600 dark:text-gray-300">Experienced developers and designers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Latest Technologies</h4>
                      <p className="text-gray-600 dark:text-gray-300">Always using cutting-edge tools and frameworks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">24/7 Support</h4>
                      <p className="text-gray-600 dark:text-gray-300">We're here when you need us</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="sm"
                        className="w-12 h-12 p-0 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5" />
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                    Stay updated with our latest projects and insights
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}