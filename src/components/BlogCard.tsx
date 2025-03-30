
import { Link } from "react-router-dom";
import { Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  views: number;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "compact";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  if (variant === "compact") {
    return (
      <div className="flex gap-3">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-16 w-16 rounded-md object-cover"
        />
        <div>
          <h3 className="font-medium line-clamp-2">
            <Link
              to={`/blog/${post.id}`}
              className="hover:text-power-600 transition-colors"
            >
              {post.title}
            </Link>
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <Calendar size={12} />
            <span>{post.date}</span>
            <Eye size={12} />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-all">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-blog-100 text-blog-800 hover:bg-blog-200">
            {post.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Eye size={16} className="mr-1" />
            <span>{post.views}</span>
          </div>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-power-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <span className="text-sm text-muted-foreground">By {post.author}</span>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar size={16} className="mr-1" />
          <span>{post.date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
