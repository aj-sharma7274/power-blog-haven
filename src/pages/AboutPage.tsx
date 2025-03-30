
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="bg-power-600 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About PowerBlog
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                We're passionate about Microsoft Power Platform and helping others build better business solutions
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                PowerBlog was created with a clear mission: to democratize access to high-quality Power Platform learning resources. We believe that technology should empower everyone, regardless of their technical background.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Through our articles, tutorials, and resources, we aim to help professionals at all levels harness the full potential of Microsoft's Power Platform to solve real business problems efficiently.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a business user looking to create your first app, or an experienced developer seeking to enhance your skills, PowerBlog is your trusted companion on the journey.
              </p>
            </div>
            
            <div>
              <img
                src="https://learn.microsoft.com/en-us/power-platform/admin/media/new-experience/power-platform-admin-center.png"
                alt="Power Platform Admin Center"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet the Author</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Doe"
                  className="rounded-full w-48 h-48 object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">John Doe</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  John is a Microsoft MVP with over 10 years of experience working with Microsoft technologies. He's passionate about the Power Platform and has helped numerous organizations implement successful solutions using Power Apps, Power Automate, Power BI, and Power Pages.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  When he's not building apps or writing tutorials, John enjoys hiking, photography, and mentoring new developers entering the Power Platform ecosystem.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-power-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Practical Learning</h3>
                <p className="text-muted-foreground">
                  We focus on practical, applicable knowledge that you can immediately use in your projects. No fluff, just useful content.
                </p>
              </div>
              <div className="bg-power-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Community Focus</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community learning and sharing knowledge to help everyone advance together.
                </p>
              </div>
              <div className="bg-power-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  Technology evolves, and so do we. We're committed to continuous learning and sharing the latest best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
