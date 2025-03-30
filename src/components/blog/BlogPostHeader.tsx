
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User } from "lucide-react";

interface BlogPostHeaderProps {
  title: string;
  category: string;
  author: string;
  date: string;
  views: number;
  imageUrl: string;
}

const BlogPostHeader = ({
  title,
  category,
  author,
  date,
  views,
  imageUrl,
}: BlogPostHeaderProps) => {
  return (
    <div>
      <Badge className="mb-4 bg-blog-100 text-blog-800 hover:bg-blog-200">
        {category}
      </Badge>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
        <div className="flex items-center">
          <User size={18} className="mr-2" />
          <span>{author}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={18} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <Eye size={18} className="mr-2" />
          <span>{views} views</span>
        </div>
      </div>
      
      <div className="mb-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default BlogPostHeader;
