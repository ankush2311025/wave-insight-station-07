import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Waves, ArrowLeft } from "lucide-react";
import incoLogo from "@/assets/incois-logo.png";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhar: "",
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location:", position.coords.latitude, position.coords.longitude);
          // Location will be stored when backend is connected
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-ocean flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={incoLogo} alt="INCOIS" className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">INCOIS</h1>
          <p className="text-white/80">Citizen Registration</p>
        </div>

        <Card className="shadow-ocean">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              Register as Citizen
            </CardTitle>
            <CardDescription className="text-center">
              Join the Ocean Hazard Reporting Platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange("fullName")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange("email")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange("phone")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Location Access</Label>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={handleGetLocation}
              >
                Get Current Location
              </Button>
              <p className="text-xs text-muted-foreground">
                We'll automatically detect your location for better service
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="aadhar">Aadhar Number *</Label>
              <Input
                id="aadhar"
                type="text"
                placeholder="Enter your 12-digit Aadhar number"
                value={formData.aadhar}
                onChange={handleInputChange("aadhar")}
                maxLength={12}
                pattern="[0-9]{12}"
                required
              />
            </div>

            <div className="space-y-2">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                disabled
              >
                Verify with DigiLocker
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                DigiLocker verification will be available after backend setup
              </p>
            </div>

            <Button className="w-full mt-6 bg-primary hover:bg-primary-dark" disabled>
              Complete Registration
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Registration requires Supabase backend connection
              </p>
              <Link to="/login">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;