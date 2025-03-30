
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }
    
    // This would typically be an API call
    console.log("Contact form submission:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="bg-blog-600 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Have questions, feedback, or just want to say hello? We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Feel free to reach out to us with any questions or inquiries. We're here to help and would love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-power-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-power-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@powerblog.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-power-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-power-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-power-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-power-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      123 Tech Lane, Suite 500<br />
                      Seattle, WA 98101
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-power-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.16c-.406.946-1.076 1.773-1.89 2.43v.5c0 5.1-3.88 11-11 11-2.18 0-4.21-.636-5.93-1.723.305.036.61.054.92.054 1.81 0 3.47-.62 4.79-1.66-1.69-.032-3.11-1.15-3.6-2.68.304.056.62.085.94.085.45 0 .89-.06 1.31-.173-1.76-.357-3.09-1.915-3.09-3.783v-.05c.51.286 1.1.46 1.73.48-1.03-.69-1.71-1.87-1.71-3.2 0-.71.19-1.37.52-1.94C7.76 6.29 10.6 7.57 13.82 7.74c-.06-.29-.1-.58-.1-.87 0-2.11 1.71-3.83 3.83-3.83 1.1 0 2.1.46 2.8 1.2.87-.17 1.7-.48 2.44-.9-.29.9-.9 1.65-1.7 2.13.78-.09 1.52-.3 2.22-.57z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-power-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-3 7h-1.924C13.461 7 13 7.252 13 7.889V9h3l-.238 3H13v8h-3v-8H8V9h2V7.077C10 5.055 11.064 4 13.461 4H16v3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-power-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.84-2-1.88 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.88-2.05 1.88zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.86 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54c.48-.72 1.35-1.76 3.27-1.76 2.4 0 4.2 1.57 4.2 4.92l-.04 6.14z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
