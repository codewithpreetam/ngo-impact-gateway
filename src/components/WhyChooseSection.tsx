
import { Shield, Heart, Zap, Users } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All opportunities are carefully verified and reviewed by our team to ensure authenticity and quality."
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description: "Focus exclusively on meaningful work that creates positive social and environmental impact."
    },
    {
      icon: Zap,
      title: "Updated Daily",
      description: "Fresh opportunities added every day from leading NGOs, foundations, and social enterprises across India."
    },
    {
      icon: Users,
      title: "Free Access",
      description: "Complete access to all listings and resources at no cost, supporting the development sector community."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose NGO Hiring?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding meaningful opportunities in the development sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                  <IconComponent size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
