import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, MapPin, Clock } from "lucide-react";

const NotificationsAlerts = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Notifications & Alerts</h1>
          <p className="text-muted-foreground">Manage and monitor alert notifications</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((alert) => (
                <div key={alert} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <div>
                      <h3 className="font-medium">High Wave Alert - Zone {alert}</h3>
                      <p className="text-sm text-muted-foreground">Activated 5 minutes ago</p>
                    </div>
                  </div>
                  <Badge variant="destructive">Active</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotificationsAlerts;