import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Mail, MessageSquare, Instagram, Youtube, Linkedin } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const BOT_TOKEN = "7896528015:AAHonD4gkY3xb2GDG_jE686DABM_R1YuVUk";
const CHAT_ID = "1007463279";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
const sendToTelegram = async (data: { name: string; telegram: string; email: string; message: string }) => {
  const message = `
📝 Новое сообщение с сайта:
👤 Имя: ${data.name}
🔗 Telegram: ${encodeURIComponent(data.telegram)}
📧 Email: ${data.email}
💬 Сообщение: ${data.message}
  `;

  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      console.log("NOOOOOO not sent!");
      throw new Error("Failed to send message to Telegram");
    }

    console.log("Message sent successfully to Telegram!");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};


const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    email: "",
    message: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await sendToTelegram(formData);
    toast({
      title: t("contact.form.sendSuccess"),
      description: t("contact.form.sendMessage"),
    });
    setFormData({ name: "", telegram: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Ошибка",
      description: "Не удалось отправить сообщение.",
      variant: "destructive",
    });
  }
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t("contact.form.name")}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder={t("contact.form.telegram")}
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t("contact.form.email")}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder={t("contact.form.message")}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                {t("contact.form.send")}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.info.title")}
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:amirymax@mail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  amirymax@mail.com
                </a>
                <div className="flex items-center justify-start gap-6">
                  <a
                    href="https://t.me/amirilifee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageSquare className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com/amirilifee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com/@amirilifee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/amirymax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/amirymax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.info.quickResponse.title")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("contact.info.quickResponse.description")}
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <a
                  href="https://t.me/Amiri_Talks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {t("contact.info.quickResponse.button")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
