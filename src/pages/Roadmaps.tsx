import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PythonRoadmap } from "@/components/roadmaps/PythonRoadmap";
import { DjangoRoadmap } from "@/components/roadmaps/DjangoRoadmap";
import { TelegramRoadmap } from "@/components/roadmaps/TelegramRoadmap";
import { AlgorithmsRoadmap } from "@/components/roadmaps/AlgorithmsRoadmap";
import { Link } from "react-router-dom";

const Roadmaps = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Amiri | Главное
          </Link>
        </div>
      </nav>

      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Roadmaps</h1>

          <Tabs defaultValue="python" className="w-full">
            <TabsList className="mb-8 flex flex-wrap gap-2 justify-start">
              <TabsTrigger value="python" className="flex-grow sm:flex-grow-0">Python</TabsTrigger>
              <TabsTrigger value="django" className="flex-grow sm:flex-grow-0">Django</TabsTrigger>
              <TabsTrigger value="telegram" className="flex-grow sm:flex-grow-0">Создание телеграм бота</TabsTrigger>
              <TabsTrigger value="algorithms" className="flex-grow sm:flex-grow-0">Алгоритмы</TabsTrigger>
            </TabsList>

            <TabsContent value="python">
              <PythonRoadmap />
            </TabsContent>

            <TabsContent value="django">
              <DjangoRoadmap />
            </TabsContent>

            <TabsContent value="telegram">
              <TelegramRoadmap />
            </TabsContent>

            <TabsContent value="algorithms">
              <AlgorithmsRoadmap />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
