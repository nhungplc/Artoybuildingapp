import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { Trophy, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function CompletionScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden">
       {/* Confetti */}
       <div className="absolute inset-0 pointer-events-none z-0">
         {[...Array(30)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ top: -20, left: `${Math.random() * 100}%`, rotate: 0, scale: Math.random() * 0.8 + 0.5 }}
             animate={{ top: '120%', rotate: 360 }}
             transition={{ duration: Math.random() * 2 + 2, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
             className={`absolute w-6 h-6 rounded-sm ${
               ['bg-yellow-400', 'bg-red-500', 'bg-green-400', 'bg-white', 'bg-cyan-400'][Math.floor(Math.random() * 5)]
             }`}
             style={{ opacity: 0.9 }}
           />
         ))}
       </div>

       <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 text-center pb-[100px]">
          <motion.div 
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", bounce: 0.6, duration: 1 }}
             className="relative mb-8"
          >
             <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-150"></div>
             
             <div className="w-64 h-64 bg-white rounded-[3rem] border-8 border-yellow-300 shadow-2xl overflow-hidden relative flex items-center justify-center z-10 rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Completed Build" 
                  className="w-full h-full object-cover scale-110" 
                />
             </div>
             
             {/* Badges */}
             {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  className={`absolute z-20 ${
                    i === 0 ? '-top-6 -left-6 rotate-[-15deg]' : i === 1 ? '-top-10 right-6 rotate-[15deg]' : 'bottom-6 -right-8 rotate-[25deg]'
                  }`}
                >
                   <div className="bg-yellow-400 p-3 rounded-full border-4 border-yellow-200 shadow-xl">
                      <Trophy size={40} className="text-yellow-900" />
                   </div>
                </motion.div>
             ))}
          </motion.div>

          <motion.h1 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6, type: "spring" }}
             className="text-5xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-4 leading-tight tracking-tight"
          >
             {t('Great job!')}
          </motion.h1>
          
          <motion.div 
             initial={{ y: 20, opacity: 0, scale: 0.9 }}
             animate={{ y: 0, opacity: 1, scale: 1 }}
             transition={{ delay: 0.8, type: "spring" }}
             className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-3xl border-4 border-white/40 mb-10 shadow-lg"
          >
             <p className="text-2xl font-black text-white drop-shadow-sm">
               {t('Model completed.')}
             </p>
          </motion.div>

          <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 1.1, type: "spring", bounce: 0.5 }}
             className="w-full relative z-50"
          >
             <Button3D color="yellow" fullWidth className="h-[76px] text-2xl" onClick={() => navigate("/main/home")}>
                {t('Awesome!')} <ChevronRight size={32} strokeWidth={3} />
             </Button3D>
          </motion.div>
       </div>
    </div>
  );
}
