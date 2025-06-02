import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage(); // Получаем функцию перевода

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Анимация изображения */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/fa503710-1190-4914-a9b1-1668ddfcf673.png"
                alt={t("about.title")} // Используем перевод для alt текста
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>

          {/* Анимация текста */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Заголовок */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>

            {/* Описание 1 */}
            <p className="text-muted-foreground mb-6">{t("about.description1")}</p>

            {/* Описание 2 */}
            <p className="text-muted-foreground mb-6">{t("about.description2")}</p>

            {/* Кнопка "Скачать резюме" */}
            <a
              href="https://drive.google.com/file/d/1wACwGSo0JFOXGzLyFRd5BFTqXAEWvQ3r/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group">
                <FileText className="mr-2 h-4 w-4" />
                {t("about.downloadCV")}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
