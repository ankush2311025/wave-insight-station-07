import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, AlertCircle, BarChart3 } from "lucide-react";

const HotspotAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Hotspot Analytics</h1>
          <p className="text-muted-foreground">Identify and analyze high-risk areas with clustering algorithms</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Interactive Hotspot Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-muted rounded-lg border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Advanced clustering visualization will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Top Hotspots</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { location: "Chennai Marina", incidents: 15, severity: "High" },
                  { location: "Visakhapatnam Port", incidents: 12, severity: "Medium" },
                  { location: "Kochi Harbor", incidents: 8, severity: "Medium" },
                ].map((hotspot, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded border">
                    <div>
                      <p className="font-medium">{hotspot.location}</p>
                      <p className="text-sm text-muted-foreground">{hotspot.incidents} incidents</p>
                    </div>
                    <Badge variant={hotspot.severity === 'High' ? 'destructive' : 'secondary'}>
                      {hotspot.severity}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotspotAnalytics;