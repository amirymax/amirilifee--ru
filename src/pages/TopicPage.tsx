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
          youtubeUrl: "https://youtu.be/ASNyAbh3Bzo",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Leetcode%20%D0%BF%D0%BE%20%D0%BF%D1%83%D1%82%D0%B8!/217.%20Contains%20Duplicate.py",
        },
        {
          name: "Valid Anagram",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/valid-anagram/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Two Sum",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/two-sum/",
          youtubeUrl: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
          githubUrl: "https://github.com/example/two-sum",
        },
        {
          name: "Group Anagrams",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/group-anagrams/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Top K Frequent Elements",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/top-k-frequent-elements/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Product of Array Except Self",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/product-of-array-except-self/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Valid Sudoku",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/valid-sudoku/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Longest Consecutive Sequence",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/longest-consecutive-sequence/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
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
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Two Sum II - Input Array Is Sorted",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "3Sum",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/3sum/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Container With Most Water",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/container-with-most-water/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
        },
        {
          name: "Trapping Rain Water",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/trapping-rain-water/",
          youtubeUrl: "https://www.youtube.com/@amirilifee",
          githubUrl: "https://github.com/amirymax",
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
