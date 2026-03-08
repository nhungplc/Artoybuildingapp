import { useState } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import logoImage from "figma:asset/f45d5762279a1d43b6105426e703180fbdecc448.png";

export function GlobalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "zh", label: "中文" },
    { code: "fr", label: "Français" },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-start p-4 pointer-events-none">
      <div className="flex-1 flex justify-center mt-1">
        <img 
          src={logoImage}
          alt="Melissa & Doug" 
          className="h-6 object-contain opacity-90 drop-shadow-md pointer-events-auto"
        />
      </div>

      <div className="absolute top-4 right-4 pointer-events-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 shadow-md border-2 border-white/50 active:scale-95 transition-transform"
        >
          <Globe size={20} strokeWidth={2.5} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, originTopRight: true }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-12 right-0 bg-white rounded-2xl p-2 shadow-xl border-2 border-slate-100 min-w-[120px]"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                    language === lang.code 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
