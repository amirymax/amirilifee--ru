
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Users, Code, Bot, Award, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BOT_TOKEN = "7896528015:AAFo6wn_cAPwqiffhqwOAnJhiRWYvrdn7zc";
const CHAT_ID = "1007463279";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;


const Course = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    plan: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
  📝 <strong>Новая заявка с сайта:</strong>
  👤 <strong>Имя</strong>: ${formData.name}
  📧 <strong>ТАРИФ</strong>: ${formData.plan}
  📱 <strong>Телеграм</strong>: ${formData.telegram}
  💬 <strong>Сообщение</strong>: ${formData.message}
`;

    try {
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
    
    toast({
      title: "Дархост фиристода шуд!",
      description: "Мо бо шумо дар наздиктарин вақт тамос мегирем.",
    });

    setFormData({ name: "", plan: "", telegram: "", message: "" });
    }
    catch (error) {
      toast({
        title: "Мушкилӣ",
        description: "Дархост равон карда нашуд, илтимос шахсан дар телеграм нависед"
      });
  };}

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pricingPlans = [
    {
      name: ">_CODE: Minimum",
      price: "350",
      strikePrice: "400",
      currency: "TJS",
      period: "дастрасӣ 3 моҳ",
      description: "Барои шурӯъ кардани сафари барномасозӣ",
      features: [
        { text: "Пардохт 1 бор", included: true },
        { text: "Дастрасӣ ба видеодарсҳо", included: true },
        { text: "Корҳои амалӣ", included: true },
        { text: "Маводи таълимӣ", included: true },
        { text: "Маводи иловагӣ", included: false },
        { text: "Ментори шахсӣ", included: false },
        { text: "Гурӯҳ барои саволу ҷавоб", included: false },
        { text: "Дастрасии абадӣ", included: false },
        { text: "Вазифаи мустақилона", included: false },
        { text: "Вақти хондан ихтиёрӣ", included: true },
        { text: "Маслиҳатҳо баъди тамом кардани курс", included: true },
        { text: "Тестҳои худсанҷишӣ", included: false },
        { text: "Зангҳои гурӯҳӣ", included: false },
      ],
      cardClass: "bg-gray-900 text-white border-gray-700",
      buttonClass: "bg-white text-gray-900 hover:bg-gray-100",
    },
    {
      name: ">_CODE: PRO",
      price: "399",
      strikePrice: "500",
      currency: "TJS",
      period: "дастрасии абадӣ",
      description: "Бо дастгирии шахсӣ ва пешниҳодҳо",
      popular: true,
      features: [
        { text: "Пардохт 1 бор", included: true },
        { text: "Дастрасӣ ба видеодарсҳо", included: true },
        { text: "Корҳои амалӣ", included: true },
        { text: "Маводи таълимӣ", included: true },
        { text: "Маводи иловагӣ", included: true },
        { text: "Ментори шахсӣ", included: true },
        { text: "Гурӯҳ барои саволу ҷавоб", included: true },
        { text: "Дастрасии абадӣ", included: true },
        { text: "Вазифаи мустақилона", included: true },
        { text: "Вақти хондан ихтиёрӣ", included: true },
        { text: "Маслиҳатҳо баъди тамом кардани курс", included: true },
        { text: "Тестҳои худсанҷишӣ", included: true },
        { text: "Зангҳои шахсӣ", included: false },
        { text: "Зангҳои гурӯҳӣ", included: true },

      ],
      cardClass: "bg-white text-gray-900 border-2 border-primary shadow-xl relative",
      buttonClass: "bg-primary text-white hover:bg-primary/90",
    },
    {
      name: "Ментори ШАХСӢ",
      price: "150",
      currency: "TJS/дарс",
      strikePrice: "250",
      period: "дарсҳои шахсӣ",
      description: "Дарсҳои шахсӣ бо Амирӣ",
      features: [
        { text: "Барномаи фардӣ", included: true },
        { text: "Дарсҳои шахсӣ бо ментор", included: true },
        { text: "Лоиҳаҳои воқеӣ", included: true },
        { text: "Портфолиои шахсӣ", included: true },
        { text: "Дастгирии доимӣ", included: true },
        { text: "Маслиҳати касбӣ", included: true },
        { text: "Дастрасӣ ба сабти дарс", included: true },
        { text: "Корҳои амалӣ", included: true },
        { text: "Маводи таълимӣ", included: true },
        { text: "Маводи иловагӣ", included: true },
        { text: "Ментори шахсӣ", included: true },
        { text: "Вазифаи мустақилона", included: true },
        { text: "Вақти хондан ихтиёрӣ", included: true },
        { text: "Маслиҳатҳо баъди тамом кардани курс", included: true },
        { text: "Зангҳои шахсӣ", included: true },
      ],
      cardClass: "bg-red-600 text-white border-red-500",
      buttonClass: "bg-white text-red-600 hover:bg-gray-100",
    },
  ];

  const benefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Омӯзгор бо таҷрибаи 5+ сола",
      description: "Таҷрибаи амалӣ дар сохтани телеграм ботҳо, барномаҳо ва сайтҳо"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Амалиёти воқеӣ ва портфолио",
      description: "Проектҳои воқеӣ барои портфолиои шумо"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Сохтани ботҳо аз сифр",
      description: "Омӯзиши пурраи сохтани ботҳои Telegram"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Ёрдам аз Ментор",
      description: "Баҳогузорӣ ва маслиҳат дар ҳар қадам"
    }
  ];

   const courseProgram = [
    {
      title: "Асосҳои Python",
      items: [
        "Синтаксис ва ноилҳои асосӣ",
        "Рушдҳо ва структураҳои додаҳо",
        "Тагйирёбандаҳо ва типи додаҳо",
        "Амалҳо бо типи ададҳо ва сатрҳо",
        "Доҳил кардан ва баровардани додаҳо",
        "Операторҳои шартӣ (if-elif-else)",
        "Даврҳо (for-while loops)",
        "Кор бо рӯйхат ва луғат",
        "Функсияҳо ва модулҳо",
        "Импорт кардани китобхонаҳои стандартӣ ва берунӣ",
        "Кор бо файлҳо (Json)",
        "Сохтани барномаи консолӣ",
        "Барномасозии Объект-ориент",
        "Хатогиҳо ва истисноҳо"
      ]
    },
    {
      title: "Telegram Bot API",
      items: [
        "Танзими муҳити кор",
        "BotFather ва токени бот",
        "Китобхонаи aiogram",
        "Принсипхои асосии кор aiogram",
        "Сохтани якумин бот ва коркарди командаҳои оддӣ",
        "Китобхонаи aiogram",
        "Китобхонаи aiogram",
        "Keyboard ва InlineKeyboard",
        "Кор бо медиа ва файлҳо"
      ]
    },
    {
      title: "Лоиҳаҳои амалӣ ва иловагӣ",
      items: [
        "Delivery Бот",
        "Фармони бот аз Амрико",
        "Бот аз Душанбе",
        "Бот барои анкета",
        "Сервер",
        "Деплой ва хостинг",
        "Тарзи дурусти нарх мондани бот",
        "Сӯҳбат бо клиент",
        "Github",
        "VS Code",        
      ]
    }
  ];

  return (
    <div>
        <div id='top'></div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Header Section */}
      <section className="relative overflow-hidden py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              &#x1F525; Курси &gt;_CODE: Аз 0 то БОТСОЗӢ &#x1F525;
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Барномаи омӯзишӣ барои онҳое, ки орзу доранд БАРНОМАСОЗ шаванд!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="h-4 w-4 mr-2" />
                350+ хатмкардагон
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Star className="h-4 w-4 mr-2" />
                Аз сифр то мутахассис
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Clock className="h-4 w-4 mr-2" />
                Дастрасии 24/7
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Course Program Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Барномаи курс
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courseProgram.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Чаро курси моро интихоб кунед?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Нархҳои курс
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-white px-4 py-1 text-sm font-medium">
                      ПОПУЛЯРНЫЙ
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.cardClass} transition-transform hover:scale-105`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="text-2xl line-through mb-2">
                      {plan.strikePrice}
                      {plan.currency && <span className="text-2xl ml-1">{plan.currency}</span>}
                    </div>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      {plan.currency && <span className="text-lg ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-sm opacity-80">{plan.period}</p>
                    <p className="text-sm mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${!feature.included ? 'opacity-50 line-through' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full mt-6 ${plan.buttonClass}`}
                      onClick={() => {
                        const buyingSection = document.getElementById('buy');
                        if (buyingSection) {
                          buyingSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Интихоб кардан
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section id="buy" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ҳозир ба курс ворид шавед!
            </h2>
            <p className="text-gray-300">
              Формро пур кунед ва мо бо шумо тамос мегирем
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Номи шумо"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Ники Telegram (@username)"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
                    >
                      <option value="" className="text-gray-900">Нархро интихоб кунед</option>
                      <option value="CODE: Mini" className="text-gray-900">&gt;CODE: Mini - 350 TJS</option>
                      <option value="CODE: PRO" className="text-gray-900">&gt;CODE: PRO - 399 TJS</option>
                      <option value="ШАХСӢ" className="text-gray-900">ШАХСӢ - 150TJS/дарс</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Паёми шумо (ихтиёрӣ)"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3">
                    📩 Дарсро сар кардан
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Course;