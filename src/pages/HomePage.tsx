
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import BlogCard from "@/components/BlogCard";
import TechCard from "@/components/TechCard";
import { posts, techItems } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Technology Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Power Platform Technologies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our expert content on all Microsoft Power Platform technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techItems.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay up to date with our newest content
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
