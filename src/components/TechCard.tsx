
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface TechItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const TechCard = ({ tech }: { tech: TechItem }) => {
  return (
    <Link to={`/blog?category=${tech.id}`}>
      <Card className="overflow-hidden h-full hover:shadow-md transition-all border-t-4" 
        style={{ borderTopColor: tech.color }}>
        <CardContent className="pt-6">
          <div className="mb-4">
            <img src={tech.icon} alt={tech.title} className="h-12 w-12" />
          </div>
          <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
          <p className="text-muted-foreground">{tech.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TechCard;
