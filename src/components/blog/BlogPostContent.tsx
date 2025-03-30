
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
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
  );
};

export default BlogPostContent;
