import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { TopicCard } from "@/components/interview/TopicCard";
import { TopicSection } from "@/components/interview/types";

const topicData: Record<string, TopicSection[]> = {
  "arrays": [
    {
      title: "Arrays & Hashing",
      problems: [
        {
          name: "Contains Duplicate",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/contains-duplicate/",
          youtubeUrl: "https://www.youtube.com/watch?v=3OamzN90kPg",
          githubUrl: "https://github.com/example/contains-duplicate",
        },
        {
          name: "Valid Anagram",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/valid-anagram/",
          youtubeUrl: "https://www.youtube.com/watch?v=9UtInBqnCgA",
          githubUrl: "https://github.com/example/valid-anagram",
        },
        {
          name: "Two Sum",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/two-sum/",
          youtubeUrl: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
          githubUrl: "https://github.com/example/two-sum",
        },
      ],
    },
  ],
  "two-pointers": [
    {
      title: "Two Pointers",
      problems: [
        {
          name: "Valid Palindrome",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/valid-palindrome/",
          youtubeUrl: "https://www.youtube.com/watch?v=jJXJ16kPFWg",
          githubUrl: "https://github.com/example/valid-palindrome",
        },
        {
          name: "3Sum",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/3sum/",
          youtubeUrl: "https://www.youtube.com/watch?v=jzZsG8n2R9A",
          githubUrl: "https://github.com/example/3sum",
        },
      ],
    },
  ],
  // Add more topics as needed
};

const TopicPage = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  
  const topicSections = topic ? topicData[topic] : [];
  const topicTitle = topic?.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate("/interview")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Topics
          </Button>
          
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {topicTitle || "Topic Not Found"}
              </h2>
              <p className="text-muted-foreground">
                Practice problems for {topicTitle?.toLowerCase()}
              </p>
            </div>

            {topicSections ? (
              topicSections.map((section, index) => (
                <TopicCard key={index} {...section} />
              ))
            ) : (
              <p>No problems found for this topic.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
