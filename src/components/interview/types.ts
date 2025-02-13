
export interface LeetCodeProblem {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
  youtubeUrl?: string;
  githubUrl?: string;
}

export interface TopicSection {
  title: string;
  problems: LeetCodeProblem[];
}
