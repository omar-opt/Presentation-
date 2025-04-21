"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import DataProtectionDemo from "@/components/demos/data-protection-demo";
import EncryptionDemo from "@/components/demos/encryption-demo";

import Slide1 from "@/components/slides/slide-1";
import Slide10 from "@/components/slides/slide-10";
import Slide2 from "@/components/slides/slide-2";
import Slide3 from "@/components/slides/slide-3";
import Slide4 from "@/components/slides/slide-4";
import Slide5 from "@/components/slides/slide-5";
import Slide6 from "@/components/slides/slide-6";
import Slide7 from "@/components/slides/slide-7";
import Slide8 from "@/components/slides/slide-8";
import Slide9 from "@/components/slides/slide-9";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showDemo, setShowDemo] = useState<string | null>(null);
  const totalSlides = 10;

  const nextSlide = () => {
    if (showDemo) {
      setShowDemo(null);
      return;
    }
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (showDemo) {
      setShowDemo(null);
      return;
    }
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleDemo = (demoName: string) => {
    if (showDemo === demoName) {
      setShowDemo(null);
    } else {
      setShowDemo(demoName);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape" && showDemo) {
        setShowDemo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, showDemo]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
      case 3:
        return <Slide3 />;
      case 4:
        return <Slide4 />;
      case 5:
        return <Slide5 />;
      case 6:
        return <Slide6 />;
      case 7:
        return <Slide7 />;
      case 8:
        return <Slide8 />;
      case 9:
        return <Slide9 />;
      case 10:
        return <Slide10 />;
      default:
        return <Slide1 />;
    }
  };

  const renderDemo = () => {
    switch (showDemo) {
      case "data-masking":
        return <DataProtectionDemo />;
      case "tokenization":
        return <EncryptionDemo />;

      default:
        return null;
    }
  };

  // Determine which demos are available for the current slide
  const getAvailableDemos = () => {
    switch (currentSlide) {
      case 3: // Key Concepts slide
        return [{ id: "data-masking", name: "Data Masking Demo" }];
      case 6: // Visual/Diagram slide
        return [{ id: "tokenization", name: "Tokenization Demo" }];

      default:
        return [];
    }
  };

  const availableDemos = getAvailableDemos();

  return (
    <main className=" overflow-x-hidden h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white  ">
      <AnimatePresence mode="wait">
        {showDemo ? (
          <motion.div
            key="demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" "
          >
            {renderDemo()}
          </motion.div>
        ) : (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full "
          >
            {renderSlide()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      {!showDemo && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1 && !showDemo}
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setShowDemo(null);
                  setCurrentSlide(index + 1);
                }}
                className={`h-2 w-2 rounded-full transition ${
                  currentSlide === index + 1 && !showDemo
                    ? "bg-white"
                    : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides && !showDemo}
            className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
        {showDemo ? "Interactive Demo" : `${currentSlide} / ${totalSlides}`}
      </div>

      {/* Download Button
      <button className="absolute right-8 top-8 flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20">
        <Download className="h-4 w-4" />
        <span>Download PDF</span>
      </button> */}

      {/* Demo Button - Only show if demos are available for this slide */}
      {availableDemos.length > 0 && !showDemo && (
        <div className="absolute left-8 top-8 flex flex-col space-y-2">
          {availableDemos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => toggleDemo(demo.id)}
              className="flex items-center space-x-2 rounded-full bg-cyan-600/80 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-cyan-500/80"
            >
              <Lightbulb className="h-4 w-4" />
              <span>{demo.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Back to Slide Button - Only show during demo */}
      {showDemo && (
        <button
          onClick={() => setShowDemo(null)}
          className="absolute left-8 top-8 flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Presentation</span>
        </button>
      )}
    </main>
  );
}
