
import { TopicCard } from "./TopicCard";
import { TopicSection } from "./types";

const pythonTopics: TopicSection[] = [
  {
    title: "1. Arrays & Hashing",
    problems: [
      {
        name: "Contains Duplicate",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        name: "Valid Anagram",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        name: "Two Sum",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/two-sum/",
      },
      {
        name: "Group Anagrams",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/group-anagrams/",
      },
    ],
  },
  {
    title: "2. Two Pointers",
    problems: [
      {
        name: "Valid Palindrome",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        name: "3Sum",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/3sum/",
      },
      {
        name: "Container With Most Water",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/container-with-most-water/",
      },
    ],
  },
  {
    title: "3. Binary Search",
    problems: [
      {
        name: "Binary Search",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/binary-search/",
      },
      {
        name: "Search a 2D Matrix",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        name: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
    ],
  },
  {
    title: "4. Stack",
    problems: [
      {
        name: "Valid Parentheses",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        name: "Min Stack",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/min-stack/",
      },
      {
        name: "Daily Temperatures",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/daily-temperatures/",
      },
    ],
  },
  {
    title: "5. Binary Tree",
    problems: [
      {
        name: "Invert Binary Tree",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        name: "Maximum Depth of Binary Tree",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        name: "Binary Tree Level Order Traversal",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
    ],
  },
  {
    title: "6. Graph",
    problems: [
      {
        name: "Number of Islands",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        name: "Clone Graph",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/clone-graph/",
      },
      {
        name: "Course Schedule",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/course-schedule/",
      },
    ],
  },
];

export const InterviewPython = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Python Interview Problems
        </h2>
        <p className="text-muted-foreground">
          Подборка задач с LeetCode для подготовки к техническим собеседованиям по Python. 
          Задачи упорядочены по темам и уровню сложности.
        </p>
      </div>

      {pythonTopics.map((topic, index) => (
        <TopicCard key={index} {...topic} />
      ))}
    </div>
  );
};
