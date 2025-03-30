
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-power-500 to-blog-600 text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master the Power Platform
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Expert articles, tutorials, and resources to help you build better
            business solutions with Microsoft's Power Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-power-600 hover:bg-white/90">
              <Link to="/blog">
                Explore Articles
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/about">
                About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
