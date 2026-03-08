import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { Camera, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function MissionCompletionScreen() {
  const navigate = useNavigate();
  const [photoTaken, setPhotoTaken] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-900 relative">
       {/* Camera View */}
       <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1607729050964-7bafb9dc1346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBicmlkZ2V8ZW58MXx8fHwxNzcyNzU4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Camera" 
            className={`w-full h-full object-cover transition-all duration-500 ${photoTaken ? 'brightness-110 scale-105' : 'opacity-80'}`} 
          />
          {!photoTaken && <div className="absolute inset-0 border-[12px] border-white/20"></div>}
       </div>

       {/* Top UI */}
       {!photoTaken && (
         <div className="relative z-10 p-6 pt-12 flex justify-center mt-4">
            <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/20">
               <p className="text-white font-bold text-center text-lg">{t('Align your build in frame')}</p>
            </div>
         </div>
       )}

       {/* Camera Reticle */}
       {!photoTaken && (
         <div className="flex-1 relative z-10 flex items-center justify-center p-12 pointer-events-none">
            <div className="w-full aspect-square border-4 border-dashed border-white/50 rounded-3xl relative">
               <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-400 rounded-tl-2xl"></div>
               <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-400 rounded-tr-2xl"></div>
               <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-400 rounded-bl-2xl"></div>
               <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-400 rounded-br-2xl"></div>
            </div>
         </div>
       )}

       {/* Flash Effect */}
       {photoTaken && (
         <motion.div 
           initial={{ opacity: 1 }}
           animate={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           className="absolute inset-0 bg-white z-20 pointer-events-none"
         />
       )}

       {/* Bottom Controls */}
       <div className={`relative z-30 p-8 flex flex-col items-center justify-end ${photoTaken ? 'flex-1 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pb-[100px]' : 'pb-[100px] mt-auto'}`}>
          {!photoTaken ? (
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setPhotoTaken(true)}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-slate-300 shadow-[0_0_0_6px_rgba(255,255,255,0.4)]"
            >
               <Camera size={36} className="text-slate-800" />
            </motion.button>
          ) : (
            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="w-full flex flex-col gap-4"
            >
               <div className="bg-green-500 text-white font-black text-xl px-6 py-3 rounded-full mx-auto mb-4 border-4 border-green-400 shadow-xl flex items-center gap-2">
                  <Check size={28} strokeWidth={3} /> {t('Mission Complete!')}
               </div>
               <Button3D color="blue" fullWidth className="h-[76px] text-xl" onClick={() => navigate("/main/feature2")}>
                  {t('Save to Collection')} <Sparkles size={24} />
               </Button3D>
               <button onClick={() => setPhotoTaken(false)} className="text-white/80 font-bold py-2 mt-2">
                  {t('Retake Photo')}
               </button>
            </motion.div>
          )}
       </div>
    </div>
  );
}
