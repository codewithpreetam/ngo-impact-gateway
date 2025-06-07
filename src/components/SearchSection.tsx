
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Search Opportunities
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Keyword search */}
              <div className="lg:col-span-2">
                <Input
                  placeholder="Enter keywords (e.g., project manager, rural development)"
                  className="h-12 text-base"
                />
              </div>
              
              {/* Location */}
              <div>
                <Input
                  placeholder="Location (e.g., Delhi, Mumbai)"
                  className="h-12 text-base"
                />
              </div>
              
              {/* Category */}
              <div>
                <Select>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jobs">Jobs</SelectItem>
                    <SelectItem value="fellowships">Fellowships</SelectItem>
                    <SelectItem value="scholarships">Scholarships</SelectItem>
                    <SelectItem value="internships">Internships</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="funding">Funding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button size="lg" className="w-full sm:w-auto px-12 py-3 text-lg rounded-full">
                Search Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
