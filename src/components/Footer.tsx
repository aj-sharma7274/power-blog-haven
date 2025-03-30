
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-power-600 mb-4">PowerBlog</h2>
            <p className="text-gray-600 mb-4 max-w-sm">
              The ultimate resource for Power Platform enthusiasts. Tutorials, tips, and
              insights to help you build better solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-power-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-power-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-power-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-power-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-power-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-power-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-power-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-power-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=power-apps" className="text-gray-600 hover:text-power-600 transition-colors">
                  Power Apps
                </Link>
              </li>
              <li>
                <Link to="/blog?category=power-automate" className="text-gray-600 hover:text-power-600 transition-colors">
                  Power Automate
                </Link>
              </li>
              <li>
                <Link to="/blog?category=power-bi" className="text-gray-600 hover:text-power-600 transition-colors">
                  Power BI
                </Link>
              </li>
              <li>
                <Link to="/blog?category=power-pages" className="text-gray-600 hover:text-power-600 transition-colors">
                  Power Pages
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} PowerBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
