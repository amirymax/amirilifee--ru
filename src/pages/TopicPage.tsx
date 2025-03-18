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
          youtubeUrl: "https://youtu.be/IFAeXPPjV_g",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Two%20Pointers/15.%203Sum",
        },
        {
          name: "Container With Most Water",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/container-with-most-water/",
          youtubeUrl: "https://youtu.be/jmClZVGWsf4",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Two%20Pointers/11.%20Container%20With%20Most%20Water.py",
        },
        {
          name: "Trapping Rain Water",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/trapping-rain-water/",
          youtubeUrl: "https://youtu.be/VqJeeFLxWFo",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Two%20Pointers/42.%20Trapping%20Rain%20Water.py",
        },
      ],
    },
  ],

  "stack": [
    {
      title: "Stack",
      problems: [
        {
          name: "Valid Parentheses",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/valid-parentheses/",
          youtubeUrl: "https://youtu.be/BLaog36sOqg",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Stack/20.%20Valid%20Parentheses.py",
        },
        {
          name: "Min Stack",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/min-stack/",
          youtubeUrl: "https://youtu.be/I7mz1kClcws",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Stack/155.%20Min%20Stack.py",
        },
        {
          name: "Evaluate Reverse Polish Notation",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
          youtubeUrl: "https://youtu.be/MeNXvUNUg_I",
          githubUrl: "https://github.com/amirymax/FromVideos/blob/main/Stack/150.%20Evaluate%20Reverse%20Polish%20Notation.py",
        },
        {
          name: "Generate Parentheses",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/generate-parentheses/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Daily Temperatures",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/daily-temperatures/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Car Fleet",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/car-fleet/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
         {
          name: "Largest Rectangle in Histogram",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
      ],
    },
  ],

  "binary-search": [
    {
      title: "Binary Search",
      problems: [
        {
          name: "Binary Search",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/binary-search/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Search a 2D Matrix",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/search-a-2d-matrix/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Koko Eating Bananas",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/koko-eating-bananas/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Find Minimum in Rotated Sorted Array",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Search in Rotated Sorted Array",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Time Based Key-Value Store",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/time-based-key-value-store/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
         {
          name: "Median of Two Sorted Arrays",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },        
      ],
    },
  ],

  "sliding-window": [
    {
      title: "Sliding Window",
      problems: [
        {
          name: "Best Time to Buy and Sell Stock",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Longest Substring Without Repeating Characters",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Longest Repeating Character Replacement",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Permutation In String",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/permutation-in-string/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Minimum Window Substring",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/minimum-window-substring/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Sliding Window Maximum",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/sliding-window-maximum/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
      ],
    },
  ],

  "linked-list": [
    {
      title: "Linked List",
      problems: [
        {
          name: "Reverse Linked List",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/reverse-linked-list/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Merge Two Sorted Lists",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/merge-two-sorted-lists/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Linked List Cycle",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/linked-list-cycle/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Reorder List",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/reorder-list/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Remove Nth Node From End of List",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Copy List With Random Pointer",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Add Two Numbers",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/add-two-numbers/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Find The Duplicate Number",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/find-the-duplicate-number/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "LRU Cache",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/lru-cache/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Merge K Sorted Lists",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/merge-k-sorted-lists/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Reverse Nodes In K Group",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
      ],
    },
  ],

  "trees": [
    {
      title: "Trees",
      problems: [
        {
          name: "Invert Binary Tree",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/invert-binary-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Maximum Depth of Binary Tree",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Diameter of Binary Tree",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/diameter-of-binary-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Balanced Binary Tree",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/balanced-binary-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Same Tree",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/same-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Subtree of Another Tree",
          difficulty: "Easy" as const,
          url: "https://leetcode.com/problems/subtree-of-another-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Lowest Common Ancestor of a Binary Search Tree",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Binary Tree Level Order Traversal",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Binary Tree Right Side View",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/binary-tree-right-side-view/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Count Good Nodes In Binary Tree",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Validate Binary Search Tree",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/validate-binary-search-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Kth Smallest Element In a Bste",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Construct Binary Tree From Preorder And Inorder Traversal",
          difficulty: "Medium" as const,
          url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Binary Tree Maximum Path Sum",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
        },
        {
          name: "Serialize And Deserialize Binary Tree",
          difficulty: "Hard" as const,
          url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
          youtubeUrl: "https://www.youtube.com/@amirilifee/videos",
          githubUrl: "https://github.com/amirymax/",
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
