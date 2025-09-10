import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves, Shield, Users, BarChart, Settings } from "lucide-react";
import incoLogo from "@/assets/incois-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const roles = [
    { value: "citizen", label: "Citizen", icon: Users, description: "Report ocean hazards" },
    { value: "analyst", label: "Analyst", icon: BarChart, description: "Advanced analytics" },
    { value: "official", label: "Official", icon: BarChart, description: "Monitor and analyze data" },
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={incoLogo} alt="INCOIS" className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">INCOIS</h1>
          <p className="text-white/80">Ocean Hazard Reporting Platform</p>
        </div>

        <Card className="shadow-ocean">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              Sign In
            </CardTitle>
            <CardDescription className="text-center">
              Access the Ocean Hazard Reporting & Analytics Platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </TabsContent>

              <div className="space-y-2 mt-4">
                <Label htmlFor="role">Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((roleOption) => (
                      <SelectItem key={roleOption.value} value={roleOption.value}>
                        <div className="flex items-center gap-2">
                          <roleOption.icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{roleOption.label}</div>
                            <div className="text-sm text-muted-foreground">{roleOption.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-6 bg-primary hover:bg-primary-dark">
                Send OTP
              </Button>
            </Tabs>

            {role === "citizen" && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  First time user?{" "}
                  <Link to="/register">
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Register here
                    </Button>
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;