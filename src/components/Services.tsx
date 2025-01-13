import { Code2, Bot, BookOpen, Users, MessageSquare, Binary } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Code2,
    titleKey: "services.items.0.title",
    descriptionKey: "services.items.0.description",
  },
  {
    icon: Bot,
    titleKey: "services.items.1.title",
    descriptionKey: "services.items.1.description",
  },
  {
    icon: BookOpen,
    titleKey: "services.items.2.title",
    descriptionKey: "services.items.2.description",
  },
  {
    icon: Users,
    titleKey: "services.items.3.title",
    descriptionKey: "services.items.3.description",
  },
  {
    icon: MessageSquare,
    titleKey: "services.items.4.title",
    descriptionKey: "services.items.4.description",
  },
  {
    icon: Binary,
    titleKey: "services.items.5.title",
    descriptionKey: "services.items.5.description",
  },
];

const Services = () => {
  const { t } = useLanguage(); // Используем функцию перевода

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg hover-card"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground">{t(service.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
