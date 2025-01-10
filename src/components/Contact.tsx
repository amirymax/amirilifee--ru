import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Mail, MessageSquare } from "lucide-react";
import { useToast } from "./ui/use-toast";

const BOT_TOKEN = "7896528015:AAHonD4gkY3xb2GDG_jE686DABM_R1YuVUk";
const CHAT_ID = "1007463279";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
const sendToTelegram = async (data: { name: string; email: string; message: string }) => {
  const message = `
📝 Новое сообщение с сайта:
👤 Имя: ${data.name}
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
      throw new Error("Failed to send message to Telegram");
    }

    console.log("Message sent successfully to Telegram!");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await sendToTelegram(formData);

    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за ваш запрос. Я скоро свяжусь с вами.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch {
    toast({
      title: "Ошибка",
      description: "Не удалось отправить сообщение. Попробуйте позже.",
    });
  } finally {
    setIsLoading(false);
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться со Мной</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Есть проект или хотите изучать программирование? Буду рад обсудить
            с вами.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше Имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Ваш Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше Сообщение"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Отправка..." : "Отправить Сообщение"}
            </Button>

            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Контактная Информация</h3>
              <div className="space-y-4">
                <a
                  href="mailto:amirymax@mail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  amirymax@mail.com
                </a>
                <a
                  href="https://github.com/amirymax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  github.com/amirymax
                </a>
                <a
                  href="https://t.me/amirilifee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  t.me/amirilifee
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Быстрый Ответ</h3>
              <p className="text-muted-foreground mb-4">
                Нужен быстрый ответ? Свяжитесь со мной через Telegram для
                оперативного общения.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <a
                  href="https://t.me/amirilifee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Написать в Telegram
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
