import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { ArrowDown, Check, X, Box, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function ARAssemblyScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-900 relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1730641322856-fb667b7a9235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjByb2JvdCUyMGJ1aWxkfGVufDF8fHx8MTc3Mjc1Njk4Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="camera feed" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Top Bar */}
        <div className="p-6 pt-10 flex justify-between items-center mt-4">
          <button onClick={() => navigate("/main/feature1/library")} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/40 active:scale-95 transition-transform shadow-md">
             <X size={28} strokeWidth={3} />
          </button>
          <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border-4 border-white font-black text-indigo-900 shadow-xl">
            {t('Step 1 of 12')}
          </div>
        </div>

        {/* AR Overlay Area */}
        <div className="flex-1 relative">
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           >
              <div className="relative">
                 <div className="w-32 h-32 bg-cyan-400/40 border-[6px] border-cyan-300 rounded-full flex items-center justify-center shadow-[0_0_40px_#22d3ee] backdrop-blur-sm">
                    <Box size={56} className="text-white drop-shadow-xl" />
                 </div>
                 <motion.div 
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 1, repeat: Infinity }}
                   className="absolute -top-16 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                 >
                   <ArrowDown size={56} strokeWidth={4} />
                 </motion.div>
              </div>
           </motion.div>
        </div>

        {/* Bottom Panel */}
        <div className="bg-white rounded-t-[3rem] p-6 pt-8 pb-[100px] border-t-8 border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] relative">
           <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 border-b-4 border-blue-200">
                 <Box size={32} strokeWidth={3} />
              </div>
              <div className="pt-1">
                 <h2 className="text-2xl font-black text-indigo-900 mb-1 leading-tight tracking-tight">{t('Attach the wheel')}</h2>
                 <p className="text-slate-500 font-bold leading-snug text-sm">{t('Find the blue wheel piece and snap it onto the front axle.')}</p>
              </div>
           </div>
           
           <div className="flex gap-4 relative z-50">
             <Button3D color="yellow" className="px-6 h-[72px]" onClick={() => navigate("/main/feature1/completion")}>
                {t('Skip')}
             </Button3D>
             <Button3D color="blue" fullWidth className="h-[72px] text-xl" onClick={() => navigate("/main/feature1/completion")}>
                {t('Next Step')} <ArrowRight size={28} />
             </Button3D>
           </div>
        </div>
      </div>
    </div>
  );
}
