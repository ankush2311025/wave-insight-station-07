import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Home, 
  AlertTriangle, 
  BarChart3, 
  MapPin, 
  Shield, 
  Users, 
  Search,
  Bell,
  HelpCircle,
  LogIn,
  Settings
} from "lucide-react";
import incoLogo from "@/assets/incois-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { path: "/report", label: "Report Hazard", icon: AlertTriangle, highlight: true },
    { path: "/hotspots", label: "Hotspots", icon: MapPin },
    { path: "/verification", label: "Verification", icon: Shield },
    { path: "/social-analytics", label: "Social Analytics", icon: Users },
    { path: "/search", label: "Search", icon: Search },
    { path: "/alerts", label: "Alerts", icon: Bell },
    { path: "/help", label: "Help", icon: HelpCircle },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0], mobile?: boolean }) => (
    <Link
      to={item.path}
      onClick={() => mobile && setIsOpen(false)}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
        ${isActive(item.path) 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-accent hover:text-accent-foreground"
        }
        ${item.highlight ? "relative" : ""}
      `}
    >
      <item.icon className="h-4 w-4" />
      <span className={mobile ? "text-base" : "text-sm font-medium"}>{item.label}</span>
      {item.highlight && (
        <Badge variant="destructive" className="ml-auto text-xs">
          Live
        </Badge>
      )}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={incoLogo} alt="INCOIS" className="h-8 w-8" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary">INCOIS</h1>
            <p className="text-xs text-muted-foreground">Ocean Hazard Platform</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 6).map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(6).map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>
          
          <Button asChild variant="outline" size="sm">
            <Link to="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={incoLogo} alt="INCOIS" className="h-8 w-8" />
                    <div>
                      <h1 className="text-lg font-bold text-primary">INCOIS</h1>
                      <p className="text-xs text-muted-foreground">Ocean Hazard Platform</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <NavLink key={item.path} item={item} mobile />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <Button asChild className="w-full">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};