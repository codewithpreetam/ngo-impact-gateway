
import { Button } from "@/components/ui/button";

const JobCategoriesSection = () => {
  const locationCategories = [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", 
    "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Bhopal", "Chandigarh",
    "Guwahati", "Patna", "Kochi", "Thiruvananthapuram", "Bhubaneswar", "Ranchi"
  ];

  const ngoCategories = [
    "Agriculture & Rural Development", "Education & Literacy", "Water & Sanitation",
    "Gender & Women Empowerment", "Child Rights & Protection", "Healthcare & Nutrition",
    "Environment & Climate Change", "Disability & Inclusion", "Elderly Care",
    "Skill Development & Livelihood", "Microfinance & SHGs", "Disaster Management",
    "Human Rights & Advocacy", "Arts & Culture", "Animal Welfare", "Sports & Recreation"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Jobs by Location */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Jobs by Location
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-8">
            Find opportunities in your city or explore positions across India
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {locationCategories.map((location) => (
              <Button
                key={location}
                variant="outline"
                className="bg-white hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200"
              >
                {location}
              </Button>
            ))}
          </div>
        </div>

        {/* Jobs by NGO Categories */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Jobs by NGO Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-8">
            Explore opportunities across different development sectors
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-6xl mx-auto">
            {ngoCategories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="bg-white hover:bg-green-50 hover:border-green-300 transition-colors duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;
