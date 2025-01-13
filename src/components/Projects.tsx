import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    titleKey: "projects.items.bebetter.title",
    descriptionKey: "projects.items.bebetter.description",
    image: "/lovable-uploads/5b5f502d-c863-455e-9af7-5509228f8467.png",
    github: "https://github.com/amirymax/BeBetter",
    tags: ["Python", "Django", "Bootstrap", "Telegram API"],
  },
  {
    titleKey: "projects.items.sofiai.title",
    descriptionKey: "projects.items.sofiai.description",
    image: "/lovable-uploads/f817e49f-155d-4b13-a8d3-4c604d7fe143.png",
    github: "https://github.com/amirymax/SofiAI",
    tags: ["Python", "JavaScript", "Vosk", "Flask"],
  },
  {
    titleKey: "projects.items.twitclone.title",
    descriptionKey: "projects.items.twitclone.description",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    github: "https://github.com/amirymax/TwitClone",
    tags: ["Python", "Django", "Bootstrap", "SQLite"],
  },
  {
    titleKey: "projects.items.moodmonitorbot.title",
    descriptionKey: "projects.items.moodmonitorbot.description",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    github: "https://github.com/amirymax/MoodMonitorBot",
    tags: ["Python", "Aiogram", "OpenCV"],
  },
];

const Projects = () => {
  const { t } = useLanguage(); // Используем функцию перевода

  return (
    <section id="projects" className="section-padding bg-secondary/5">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg overflow-hidden hover-card"
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
