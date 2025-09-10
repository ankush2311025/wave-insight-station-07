import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, AlertTriangle, Waves, Navigation, Zap } from "lucide-react";

interface HazardZone {
  id: string;
  name: string;
  riskLevel: 'high' | 'medium' | 'low';
  coordinates: { x: number; y: number };
  alerts: number;
  type: string;
}

interface HazardReport {
  id: string;
  type: string;
  location: string;
  coordinates: { x: number; y: number };
  severity: 'high' | 'medium' | 'low';
  time: string;
}

const HazardMap = () => {
  const [selectedZone, setSelectedZone] = useState<HazardZone | null>(null);
  const [selectedReport, setSelectedReport] = useState<HazardReport | null>(null);

  const hazardZones: HazardZone[] = [
    { id: 'z1', name: 'Chennai Coast', riskLevel: 'high', coordinates: { x: 60, y: 35 }, alerts: 8, type: 'Tsunami Warning' },
    { id: 'z2', name: 'Visakhapatnam', riskLevel: 'medium', coordinates: { x: 55, y: 25 }, alerts: 3, type: 'High Waves' },
    { id: 'z3', name: 'Kochi Harbor', riskLevel: 'high', coordinates: { x: 45, y: 55 }, alerts: 12, type: 'Oil Spill' },
    { id: 'z4', name: 'Mumbai Coast', riskLevel: 'medium', coordinates: { x: 35, y: 40 }, alerts: 5, type: 'Storm Surge' },
    { id: 'z5', name: 'Goa Beaches', riskLevel: 'low', coordinates: { x: 40, y: 50 }, alerts: 1, type: 'Monitoring' },
    { id: 'z6', name: 'Paradip Port', riskLevel: 'medium', coordinates: { x: 58, y: 30 }, alerts: 4, type: 'Cyclone Alert' },
    { id: 'z7', name: 'Kandla Port', riskLevel: 'low', coordinates: { x: 25, y: 30 }, alerts: 2, type: 'Normal' },
  ];

  const recentReports: HazardReport[] = [
    { id: 'r1', type: 'Tsunami', location: 'Chennai', coordinates: { x: 62, y: 37 }, severity: 'high', time: '2 mins' },
    { id: 'r2', type: 'Oil Spill', location: 'Kochi', coordinates: { x: 47, y: 57 }, severity: 'high', time: '5 mins' },
    { id: 'r3', type: 'High Waves', location: 'Vizag', coordinates: { x: 57, y: 27 }, severity: 'medium', time: '8 mins' },
    { id: 'r4', type: 'Storm', location: 'Mumbai', coordinates: { x: 37, y: 42 }, severity: 'medium', time: '12 mins' },
  ];

  const getRiskColor = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high': return 'bg-destructive';
      case 'medium': return 'bg-warning';
      case 'low': return 'bg-success';
    }
  };

  const getRiskTextColor = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high': return 'text-destructive-foreground';
      case 'medium': return 'text-warning-foreground';
      case 'low': return 'text-success-foreground';
    }
  };

  const getIcon = (type: string) => {
    if (type.includes('Tsunami')) return Waves;
    if (type.includes('Oil')) return AlertTriangle;
    if (type.includes('Storm') || type.includes('Cyclone')) return Navigation;
    return Zap;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Live Hazard Map
        </CardTitle>
        <CardDescription>
          Interactive risk zones with real-time alerts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Map Container */}
          <div className="h-96 bg-gradient-to-br from-accent/10 to-primary/5 rounded-lg border relative overflow-hidden">
            {/* Coastline representation */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Indian coastline outline */}
                <path
                  d="M20 25 Q30 20 40 25 L50 20 Q60 25 65 35 L70 45 Q65 55 60 60 L50 65 Q40 70 35 65 L25 60 Q20 50 15 40 L20 25"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                  className="opacity-50"
                />
                {/* Water areas */}
                <circle cx="30" cy="35" r="3" fill="hsl(var(--accent))" opacity="0.1" />
                <circle cx="50" cy="45" r="4" fill="hsl(var(--accent))" opacity="0.1" />
                <circle cx="45" cy="60" r="3" fill="hsl(var(--accent))" opacity="0.1" />
              </svg>
            </div>

            {/* Risk Zones */}
            {hazardZones.map((zone) => {
              const IconComponent = getIcon(zone.type);
              return (
                <div
                  key={zone.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    selectedZone?.id === zone.id ? 'scale-125 z-20' : 'z-10'
                  }`}
                  style={{ left: `${zone.coordinates.x}%`, top: `${zone.coordinates.y}%` }}
                  onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                >
                  <div className={`w-8 h-8 rounded-full ${getRiskColor(zone.riskLevel)} flex items-center justify-center shadow-lg animate-pulse`}>
                    <IconComponent className={`h-4 w-4 ${getRiskTextColor(zone.riskLevel)}`} />
                  </div>
                  {zone.alerts > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {zone.alerts}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Recent Reports */}
            {recentReports.map((report) => (
              <div
                key={report.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                  selectedReport?.id === report.id ? 'scale-125 z-20' : 'z-10'
                }`}
                style={{ left: `${report.coordinates.x}%`, top: `${report.coordinates.y}%` }}
                onClick={() => setSelectedReport(selectedReport?.id === report.id ? null : report)}
              >
                <div className={`w-3 h-3 rounded-full ${getRiskColor(report.severity)} shadow-md animate-glow`} />
              </div>
            ))}

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border shadow-soft">
              <div className="text-xs font-medium mb-2 text-foreground">Risk Levels</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <span className="text-xs text-muted-foreground">High Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <span className="text-xs text-muted-foreground">Medium Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span className="text-xs text-muted-foreground">Low Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zone Details */}
          {selectedZone && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-foreground">{selectedZone.name}</h3>
                <Badge 
                  className={`${getRiskColor(selectedZone.riskLevel)} ${getRiskTextColor(selectedZone.riskLevel)}`}
                >
                  {selectedZone.riskLevel.toUpperCase()}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{selectedZone.type}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Alerts: {selectedZone.alerts}</span>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          )}

          {/* Report Details */}
          {selectedReport && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-foreground">{selectedReport.type} Report</h3>
                <Badge 
                  className={`${getRiskColor(selectedReport.severity)} ${getRiskTextColor(selectedReport.severity)}`}
                >
                  {selectedReport.severity.toUpperCase()}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{selectedReport.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Reported: {selectedReport.time} ago</span>
                <Button variant="outline" size="sm">View Report</Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HazardMap;