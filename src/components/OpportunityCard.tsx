
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

interface OpportunityCardProps {
  title: string;
  organization: string;
  location: string;
  type: string;
  deadline: string;
  description: string;
  tags: string[];
}

const OpportunityCard = ({ title, organization, location, type, deadline, description, tags }: OpportunityCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {type}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Building size={16} className="mr-2 text-gray-400" />
            {organization}
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2 text-gray-400" />
            {location}
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={16} className="mr-2 text-gray-400" />
            Deadline: {deadline}
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;
