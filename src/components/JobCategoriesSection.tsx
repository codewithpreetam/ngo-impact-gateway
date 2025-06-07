
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

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

  const upcomingEvents = [
    {
      title: "NGO Leadership Summit 2024",
      description: "Annual conference bringing together NGO leaders, social entrepreneurs, and impact investors",
      date: "15 Dec, 2024",
      location: "New Delhi",
      attendees: "500+ Expected",
      type: "Conference",
      category: "Leadership"
    },
    {
      title: "Digital Fundraising Workshop",
      description: "Learn modern fundraising techniques and digital marketing strategies for NGOs",
      date: "22 Dec, 2024", 
      location: "Mumbai",
      attendees: "150+ Expected",
      type: "Workshop",
      category: "Fundraising"
    },
    {
      title: "Sustainable Development Goals Forum",
      description: "Collaborative forum on achieving SDGs through grassroots initiatives",
      date: "8 Jan, 2025",
      location: "Bangalore",
      attendees: "300+ Expected", 
      type: "Forum",
      category: "Policy"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Jobs by Location */}
        <div className="mb-16">
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

        {/* Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Upcoming Events & Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Connect, learn, and grow with the NGO community through workshops, conferences, and networking events
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">{event.category}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      {event.attendees}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="bg-white hover:bg-gray-50">
              View All Events
            </Button>
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
