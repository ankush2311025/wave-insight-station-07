import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const ReportVerification = () => {
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Report Verification</h1>
          <p className="text-muted-foreground">Review and verify citizen-submitted hazard reports</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Pending Verification Queue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((report) => (
                <div key={report} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <div className="flex-1">
                    <h3 className="font-medium">Report REP-2024-{report.toString().padStart(3, '0')}</h3>
                    <p className="text-sm text-muted-foreground">Tsunami warning - Chennai Coast</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-success border-success">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verify
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive border-destructive">
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportVerification;