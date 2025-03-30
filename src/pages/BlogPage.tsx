
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { posts, popularPosts } from "@/data/mockData";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = posts.filter((post) => {
    // Filter by category if present
    if (category && !post.category.toLowerCase().includes(category.toLowerCase())) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">
              {category ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Articles` : "All Articles"}
            </h1>
            <div className="relative mb-8 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or category filter.
                  </p>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                <h2 className="text-xl font-bold mb-4">Popular Posts</h2>
                <div className="space-y-6">
                  {popularPosts.map((post) => (
                    <div key={post.id}>
                      <BlogCard post={post} variant="compact" />
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
                
                <h2 className="text-xl font-bold mb-4 mt-8">Categories</h2>
                <div className="space-y-2">
                  {Array.from(new Set(posts.map(post => post.category))).map((category) => (
                    <div key={category} className="text-muted-foreground hover:text-power-600 transition-colors">
                      <a href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}>
                        {category}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
