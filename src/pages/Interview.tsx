
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const interviewTopics = [
  { name: "Arrays & Hashing", value: "arrays" },
  { name: "Two Pointers", value: "two-pointers" },
  { name: "Binary Search", value: "binary-search" },
  { name: "Stack", value: "stack" },
  { name: "Binary Tree", value: "binary-tree" },
  { name: "Graph", value: "graph" },
  { name: "Dynamic Programming", value: "dp" },
  { name: "Sliding Window", value: "sliding-window" },
  { name: "Backtracking", value: "backtracking" },
  { name: "Heap", value: "heap" },
  { name: "Greedy", value: "greedy" },
  { name: "Intervals", value: "intervals" },
  { name: "Math & Geometry", value: "math" },
];

const Interview = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const SideMenu = () => (
    <div className="flex flex-col gap-2">
      {interviewTopics.map((topic) => (
        <Button
          key={topic.value}
          variant="ghost"
          className="w-full justify-start text-left"
          onClick={() => navigate(`/interview/${topic.value}`)}
        >
          {topic.name}
        </Button>
      ))}
      
      <div className="mt-8 border-t pt-6">
        <Button
          size="lg"
          className="w-full py-6 px-6 gap-3 text-sm sm:text-base flex items-center justify-center leading-relaxed rounded-lg shadow-lg"
          onClick={handleContactClick}
          style={{height: '60px'}}
        >
          Нужен ментор?<br />Оставь заявку 💬 
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto">
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {t('interview.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('interview.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interviewTopics.map((topic) => (
                <Button
                  key={topic.value}
                  variant="outline"
                  className="h-24 text-lg justify-center"
                  onClick={() => navigate(`/interview/${topic.value}`)}
                >
                  {topic.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
