
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  const handleShare = (platform: string) => {
    let shareUrl = "";
    const currentUrl = window.location.href;
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank");
      toast.success(`Shared on ${platform}`, {
        description: "Thanks for sharing our content!"
      });
    }
  };

  return (
    <div>
      <div 
        className="blog-content prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <Separator className="my-8" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span>Share this article:</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => handleShare("facebook")}>
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleShare("twitter")}>
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
