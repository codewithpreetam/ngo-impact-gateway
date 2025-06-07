
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
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      title: "Digital Fundraising Workshop",
      description: "Learn modern fundraising techniques and digital marketing strategies for NGOs",
      date: "22 Dec, 2024", 
      location: "Mumbai",
      attendees: "150+ Expected",
      type: "Workshop",
      category: "Fundraising",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop"
    },
    {
      title: "Sustainable Development Goals Forum",
      description: "Collaborative forum on achieving SDGs through grassroots initiatives",
      date: "8 Jan, 2025",
      location: "Bangalore",
      attendees: "300+ Expected", 
      type: "Forum",
      category: "Policy",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-3">
                        <MapPin className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-medium">{event.attendees}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 font-semibold px-8 py-3">
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
