
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube, Github } from "lucide-react";

interface LeetCodeProblem {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
  youtubeUrl?: string;
  githubUrl?: string;
}

interface TopicCardProps {
  title: string;
  problems: LeetCodeProblem[];
}

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  Medium: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
  Hard: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
};

export const TopicCard = ({ title, problems }: TopicCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <span className="flex-1">{problem.name}</span>
              <div className="flex items-center gap-6">
                <Badge
                  variant="secondary"
                  className={difficultyColors[problem.difficulty]}
                >
                  {problem.difficulty}
                </Badge>
                <div className="flex items-center gap-4">
                  <a
                    href={problem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    title="LeetCode"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  {problem.youtubeUrl && (
                    <a
                      href={problem.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 transition-colors"
                      title="Video Solution"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  )}
                  {problem.githubUrl && (
                    <a
                      href={problem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      title="Solution Code"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
