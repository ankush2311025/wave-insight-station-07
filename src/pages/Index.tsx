import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { 
  Waves, 
  AlertTriangle, 
  MapPin, 
  BarChart3, 
  Shield, 
  Users, 
  Activity,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import incoLogo from "@/assets/incois-logo.png";
import oceanHero from "@/assets/ocean-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Crowdsourced Reports",
      description: "Citizens can report ocean hazards with GPS location and media evidence",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Hotspot Mapping",
      description: "Advanced clustering algorithms identify high-risk coastal areas",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Social Media Analytics",
      description: "Monitor social platforms for early warning signals and public sentiment",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Expert Verification",
      description: "Professional verification team validates all citizen reports",
      color: "text-warning"
    }
  ];

  const stats = [
    { number: "1,234", label: "Reports Verified", icon: CheckCircle },
    { number: "23", label: "Active Hotspots", icon: AlertTriangle },
    { number: "156", label: "Social Alerts", icon: Activity },
    { number: "24/7", label: "Monitoring", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-ocean"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url(${oceanHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-col items-center mb-8">
            <img src={incoLogo} alt="INCOIS" className="h-20 w-20 mb-4 animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              INCOIS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2">
              Indian National Centre for Ocean Information Services
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Ocean Hazard Reporting & Analytics Platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protecting India's Coastline Through Advanced Ocean Monitoring
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Real-time hazard reporting, AI-powered analytics, and crowdsourced intelligence 
              for comprehensive ocean safety monitoring across India's 7,500km coastline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-ocean">
              <Link to="/report">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report Hazard
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-ocean">
              <Link to="/dashboard">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-white" />
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated wave */}
        <div className="absolute bottom-0 w-full">
          <Waves className="h-8 w-full text-white/20 animate-wave" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-ocean-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Advanced Ocean Monitoring Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combining citizen science, satellite data, and social media intelligence 
              for comprehensive ocean hazard detection and early warning systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-ocean transition-shadow duration-300">
                <CardHeader className="text-center">
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Access Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Access the Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your role to access the appropriate tools and dashboards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card hover:shadow-ocean transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>Citizens</CardTitle>
                <CardDescription>Report ocean hazards and track your submissions</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full mb-4">
                  <Link to="/report">
                    Report Hazard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/my-reports">View My Reports</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-ocean transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-accent" />
                <CardTitle>Officials</CardTitle>
                <CardDescription>Verify reports and monitor ocean conditions</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full mb-4" variant="secondary">
                  <Link to="/dashboard">
                    Access Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/verification">Verification Queue</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-ocean transition-shadow">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-success" />
                <CardTitle>Analysts</CardTitle>
                <CardDescription>Advanced analytics and hotspot identification</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full mb-4" variant="secondary">
                  <Link to="/hotspots">
                    Hotspot Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/social-analytics">Social Analytics</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={incoLogo} alt="INCOIS" className="h-10 w-10 mr-3" />
                <h3 className="text-xl font-bold">INCOIS</h3>
              </div>
              <p className="text-white/80 text-sm">
                Safeguarding India's marine environment through advanced ocean monitoring and early warning systems.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/report" className="text-white/80 hover:text-white">Report Hazard</Link></li>
                <li><Link to="/dashboard" className="text-white/80 hover:text-white">Dashboard</Link></li>
                <li><Link to="/hotspots" className="text-white/80 hover:text-white">Hotspot Analytics</Link></li>
                <li><Link to="/help" className="text-white/80 hover:text-white">Help & Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About INCOIS</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Our Mission</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Research</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Publications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-white/80">
                  <Phone className="h-4 w-4 mr-2" />
                  +91-40-2350-6713
                </p>
                <p className="flex items-center text-white/80">
                  <Mail className="h-4 w-4 mr-2" />
                  incois@incois.gov.in
                </p>
                <p className="flex items-center text-white/80">
                  <MapPin className="h-4 w-4 mr-2" />
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80 text-sm">
              © 2024 Indian National Centre for Ocean Information Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
