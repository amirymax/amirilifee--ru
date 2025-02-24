import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { TopicCard } from "@/components/interview/TopicCard";
import { TopicSection } from "@/components/interview/types";
import { useLanguage } from "@/contexts/LanguageContext";

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
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/217.%20Contains%20Duplicate.py",
        },
        {
          name: "Valid Anagram",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/valid-anagram/",
          youtubeUrl: "https://youtu.be/BsfNa_YOGQU",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/242.%20Valid%20Anagram.py",
        },
        {
          name: "Two Sum",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/two-sum/",
          youtubeUrl: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/1.%20Two%20Sum.py",
        },
        {
          name: "Group Anagrams",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/group-anagrams/",
          youtubeUrl: "https://youtu.be/YMCEGVEc5n0",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/49.%20Group%20Anagrams.py",
        },
        {
          name: "Top K Frequent Elements",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/top-k-frequent-elements/",
          youtubeUrl: "https://youtu.be/2t0tMky_Nvg",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/347.%20Top%20K%20Frequent%20Elements.py",
        },
        {
          name: "Product of Array Except Self",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/product-of-array-except-self/",
          youtubeUrl: "https://youtu.be/nu_I2NO_Q48",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/238.%20Product%20of%20Array%20Except%20Self.py",
        },
        {
          name: "Valid Sudoku",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/valid-sudoku/",
          youtubeUrl: "https://youtu.be/vEzN_4hbDTw",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/36.%20Valid%20Sudoku.py",
        },
        {
          name: "Longest Consecutive Sequence",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/longest-consecutive-sequence/",
          youtubeUrl: "https://youtu.be/LSpg-TjH1JM",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Arrays%26Hashing/128.%20Longest%20Consecutive%20Sequence.py",
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
          youtubeUrl: "https://youtu.be/odupKkwBiZs",
          githubUrl: "https://tinyurl.com/leetcode-valid-palindrome",
        },
        {
          name: "Two Sum II - Input Array Is Sorted",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/",
          youtubeUrl: "https://youtu.be/lTF5-JXP7X0",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Two%20Pointers/167.%20Two%20Sum%20II%20-%20Input%20Array%20Is%20Sorted.py",
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
  const { t } = useLanguage();
  
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
            {t('interview.backToTopics')}
          </Button>
          
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {topicTitle || "Topic Not Found"}
              </h2>
              <p className="text-muted-foreground">
                {t('interview.practiceProblems')} {topicTitle?.toLowerCase()}
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
