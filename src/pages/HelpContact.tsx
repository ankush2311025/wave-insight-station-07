import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Phone, Mail, MapPin } from "lucide-react";

const HelpContact = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Help & Contact</h1>
          <p className="text-muted-foreground">Get help with the platform or contact our support team</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">How do I report a hazard?</h3>
                  <p className="text-sm text-muted-foreground">Use the Report Hazard page to submit details about ocean hazards you observe.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What types of hazards can I report?</h3>
                  <p className="text-sm text-muted-foreground">You can report tsunamis, high waves, flooding, oil spills, and other ocean-related hazards.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How are reports verified?</h3>
                  <p className="text-sm text-muted-foreground">Our verification team reviews all reports using satellite data and expert analysis.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Email Address" type="email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your message..." rows={4} />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              INCOIS Regional Offices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background rounded-lg border">
                <h3 className="font-medium mb-2">Chennai Office</h3>
                <p className="text-sm text-muted-foreground mb-2">Tamil Nadu Regional Center</p>
                <p className="text-sm flex items-center justify-center gap-1">
                  <Phone className="h-3 w-3" />
                  +91-44-2450-5700
                </p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <h3 className="font-medium mb-2">Visakhapatnam Office</h3>
                <p className="text-sm text-muted-foreground mb-2">Andhra Pradesh Regional Center</p>
                <p className="text-sm flex items-center justify-center gap-1">
                  <Phone className="h-3 w-3" />
                  +91-891-250-6700
                </p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <h3 className="font-medium mb-2">Kochi Office</h3>
                <p className="text-sm text-muted-foreground mb-2">Kerala Regional Center</p>
                <p className="text-sm flex items-center justify-center gap-1">
                  <Phone className="h-3 w-3" />
                  +91-484-239-6700
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpContact;