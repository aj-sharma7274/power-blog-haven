
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [showSearch, setShowSearch] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b py-3 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-merriweather text-2xl font-bold text-power-600">
              PowerBlog
            </div>
          </Link>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 pt-10">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-medium hover:text-power-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium hover:text-power-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
      
      {showSearch && (
        <div className="container py-2 transition-all">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search articles..."
              className="rounded-full"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
