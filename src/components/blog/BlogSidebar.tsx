
import { Separator } from "@/components/ui/separator";

interface Resource {
  imageUrl: string;
  title: string;
  link: string;
  source: string;
}

interface BlogSidebarProps {
  resources: Resource[];
}

const BlogSidebar = ({ resources }: BlogSidebarProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
      <h2 className="text-xl font-bold mb-4">More Resources</h2>
      <div className="space-y-6">
        {resources.map((resource, index) => (
          <div key={index}>
            <div className="flex gap-3">
              <img
                src={resource.imageUrl}
                alt={resource.title}
                className="h-16 w-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-medium line-clamp-2">
                  <a 
                    href={resource.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-power-600 transition-colors"
                  >
                    {resource.title}
                  </a>
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <span>{resource.source}</span>
                </div>
              </div>
            </div>
            {index < resources.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
