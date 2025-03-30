
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-power-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
