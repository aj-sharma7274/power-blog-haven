
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fullBlogPost, popularPosts } from "@/data/mockData";
import { Calendar, Eye, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = fullBlogPost; // In a real app, you'd fetch the post based on the ID

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div>
                <Badge className="mb-4 bg-blog-100 text-blog-800 hover:bg-blog-200">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                  <div className="flex items-center">
                    <User size={18} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={18} className="mr-2" />
                    <span>{post.views} views</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div 
                  className="blog-content prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <Separator className="my-8" />
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <span>Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
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

export default BlogPostPage;
