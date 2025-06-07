
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OpportunityCard from "./OpportunityCard";

const OpportunitiesSection = () => {
  const opportunities = {
    jobs: [
      {
        title: "Program Manager - Rural Development",
        organization: "Akshaya Patra Foundation",
        location: "Bangalore, Karnataka",
        type: "Full-time",
        deadline: "15 Jul 2024",
        description: "Lead rural development initiatives focusing on sustainable agriculture and community empowerment programs across Karnataka state.",
        tags: ["Rural Development", "Program Management", "Agriculture"]
      },
      {
        title: "Education Coordinator",
        organization: "Teach for India",
        location: "Mumbai, Maharashtra",
        type: "Full-time",
        deadline: "20 Jul 2024",
        description: "Coordinate educational programs and teacher training initiatives in underserved communities across Mumbai metropolitan area.",
        tags: ["Education", "Training", "Community Work"]
      },
      {
        title: "Health Program Officer",
        organization: "Smile Foundation",
        location: "Delhi, NCR",
        type: "Full-time",
        deadline: "25 Jul 2024",
        description: "Implement healthcare programs focusing on maternal and child health in urban slum communities.",
        tags: ["Healthcare", "Maternal Health", "Urban Development"]
      }
    ],
    fellowships: [
      {
        title: "Gandhi Fellowship - Education Leadership",
        organization: "Piramal Foundation",
        location: "Multiple Locations",
        type: "Fellowship",
        deadline: "10 Aug 2024",
        description: "Two-year fellowship program focusing on systemic change in government school education across rural India.",
        tags: ["Leadership", "Education", "Government Schools"]
      },
      {
        title: "Climate Action Fellowship",
        organization: "Centre for Science and Environment",
        location: "New Delhi",
        type: "Fellowship",
        deadline: "5 Aug 2024",
        description: "Research and advocacy fellowship focusing on climate policy and environmental sustainability initiatives.",
        tags: ["Climate Change", "Policy", "Research"]
      }
    ],
    scholarships: [
      {
        title: "Scholarship for Development Studies",
        organization: "Tata Institute of Social Sciences",
        location: "Mumbai, Maharashtra",
        type: "Scholarship",
        deadline: "30 Jul 2024",
        description: "Merit-based scholarship for students pursuing Masters in Development Studies with focus on social work.",
        tags: ["Development Studies", "Social Work", "Masters"]
      },
      {
        title: "Women in Leadership Scholarship",
        organization: "Azim Premji Foundation",
        location: "Bangalore, Karnataka",
        type: "Scholarship",
        deadline: "15 Aug 2024",
        description: "Supporting women professionals pursuing advanced degrees in public policy and social development.",
        tags: ["Women Leadership", "Public Policy", "Social Development"]
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover meaningful career paths and growth opportunities in India's development sector
          </p>
        </div>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="fellowships">Fellowships</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.jobs.map((job, index) => (
                <OpportunityCard key={index} {...job} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fellowships" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.fellowships.map((fellowship, index) => (
                <OpportunityCard key={index} {...fellowship} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.scholarships.map((scholarship, index) => (
                <OpportunityCard key={index} {...scholarship} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
