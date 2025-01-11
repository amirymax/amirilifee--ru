import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PythonRoadmap } from "@/components/roadmaps/PythonRoadmap";
import { DjangoRoadmap } from "@/components/roadmaps/DjangoRoadmap";
import { TelegramRoadmap } from "@/components/roadmaps/TelegramRoadmap";
import { AlgorithmsRoadmap } from "@/components/roadmaps/AlgorithmsRoadmap";

const Roadmaps = () => {
  return (
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
  );
};

export default Roadmaps;
