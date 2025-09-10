import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageCircle, Hash, BarChart3 } from "lucide-react";

const SocialAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Social Media Analytics</h1>
          <p className="text-muted-foreground">Monitor social media buzz and sentiment around ocean hazards</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Social Media Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-muted rounded-lg border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <p>Social media analytics dashboard will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SocialAnalytics;