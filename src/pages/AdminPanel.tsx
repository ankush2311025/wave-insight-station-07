import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Users, Activity, Database } from "lucide-react";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">System administration and user management</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              System Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">User Management</h3>
                <p className="text-sm text-muted-foreground">Manage roles and permissions</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <Activity className="h-8 w-8 mx-auto mb-2 text-accent" />
                <h3 className="font-medium">Activity Logs</h3>
                <p className="text-sm text-muted-foreground">Monitor system activity</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <Database className="h-8 w-8 mx-auto mb-2 text-success" />
                <h3 className="font-medium">Data Management</h3>
                <p className="text-sm text-muted-foreground">Database administration</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;