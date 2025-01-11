import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface RoadmapSection {
  title: string;
  goal: string;
  topics?: string[];
  project?: string;
  projects?: string[];
  resources?: string[];
  recommendations?: string[];
}
interface RoadmapCardProps {
  section: RoadmapSection;
}
export const RoadmapCard = ({ section }: RoadmapCardProps) => {
  return (
    <Card className="hover-card">
      <CardHeader>
        <CardTitle>{section.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          <strong>Цель:</strong> {section.goal}
        </p>
        {section.topics && (
          <div>
            <h4 className="font-semibold mb-2">Темы:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {section.topics.map((topic, i) => (
                <li key={i} className="text-muted-foreground">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}
        {section.project && (
          <div>
            <h4 className="font-semibold mb-2">Проект:</h4>
            <p className="text-muted-foreground">{section.project}</p>
          </div>
        )}
        {section.projects && (
          <div>
            <h4 className="font-semibold mb-2">Идеи проектов:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {section.projects.map((project, i) => (
                <li key={i} className="text-muted-foreground">
                  {project}
                </li>
              ))}
            </ul>
          </div>
        )}
        {section.resources && (
          <div>
            <h4 className="font-semibold mb-2">Ресурсы:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {section.resources.map((resource, i) => (
                <li key={i} className="text-muted-foreground">
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        )}
        {section.recommendations && (
          <div>
            <h4 className="font-semibold mb-2">Рекомендации:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {section.recommendations.map((rec, i) => (
                <li key={i} className="text-muted-foreground">
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
