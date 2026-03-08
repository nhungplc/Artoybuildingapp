import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { Play, Sparkles, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function ARAnimationScreen() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-900 relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="camera feed" 
          className="w-full h-full object-cover opacity-60" 
        />
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent mix-blend-overlay"
          ></motion.div>
        )}
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Top Bar */}
        <div className="p-6 pt-10 flex justify-between items-center mt-4">
          <button onClick={() => navigate("/main/feature3/prompt")} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/40 active:scale-95 transition-transform shadow-md">
             <X size={28} strokeWidth={3} />
          </button>
          <div className="bg-purple-500 px-5 py-2.5 rounded-full border-4 border-purple-300 font-black text-white shadow-xl flex items-center gap-2">
            <Sparkles size={20} /> {t('AR Magic')}
          </div>
        </div>

        {/* AR Animation Overlay Area */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
           {isPlaying && (
             <motion.div
               initial={{ x: -200, y: 100, rotate: -15 }}
               animate={{ 
                 x: [ -200, 0, 200, 400 ],
                 y: [ 100, -50, -100, 50 ],
                 rotate: [ -15, 0, 15, 30 ]
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative"
             >
                <div className="w-32 h-12 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-full blur-xl absolute top-1/2 -left-10 opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Floating Car" 
                  className="w-40 h-40 object-cover rounded-3xl border-4 border-white shadow-2xl drop-shadow-[0_20px_30px_rgba(168,85,247,0.6)]" 
                />
             </motion.div>
           )}
           
           {!isPlaying && (
             <div className="w-40 h-40 object-cover rounded-3xl border-4 border-white shadow-2xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Idle Car" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-purple-600 pl-1 backdrop-blur-sm animate-pulse">
                      <Play size={24} className="fill-current" />
                   </div>
                </div>
             </div>
           )}
        </div>

        {/* Bottom Actions */}
        <div className="p-8 pb-[100px] flex flex-col gap-4 relative z-50 bg-gradient-to-t from-slate-900 to-transparent">
           <Button3D color="purple" fullWidth className="h-[76px] text-xl" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? t('Stop Animation') : t('Play Animation')} <Play size={28} className={!isPlaying ? "fill-current" : ""} />
           </Button3D>
           
           {isPlaying && (
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
               <Button3D color="blue" fullWidth className="h-[76px] text-xl" onClick={() => navigate("/main/feature3/save")}>
                  {t('Next')} <ChevronRight size={32} />
               </Button3D>
             </motion.div>
           )}
        </div>
      </div>
    </div>
  );
}
