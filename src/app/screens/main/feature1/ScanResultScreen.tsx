import { useNavigate } from "react-router";
import { ChevronLeft, MoreHorizontal, Box } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function ScanResultScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-900 relative overflow-hidden">
       {/* Camera Background */}
       <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1752322069850-f92b5ce0e961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdvJTIwcGllY2VzJTIwc2NhdHRlcmVkfGVufDF8fHx8MTc3Mjc1ODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Table top with toys" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90"></div>
       </div>

       {/* Top Nav */}
       <div className="relative z-10 p-6 pt-10 flex justify-between items-center mt-4">
          <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/40 active:scale-95 transition-transform shadow-sm">
             <ChevronLeft size={28} strokeWidth={3} />
          </button>
          
          <div className="bg-green-500 px-4 py-2 rounded-full border-2 border-green-300 font-bold text-white shadow-lg flex items-center gap-2 mt-4">
             <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
             {t('12 Pieces Found')}
          </div>
       </div>

       {/* AR Overlays */}
       <div className="flex-1 relative">
         {[
           { top: "30%", left: "20%" },
           { top: "50%", left: "70%" },
           { top: "65%", left: "40%" },
           { top: "20%", left: "60%" }
         ].map((pos, i) => (
           <motion.div 
             key={i}
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
             className="absolute w-12 h-12 bg-green-400/30 border-2 border-green-400 rounded-lg shadow-[0_0_15px_#4ade80]"
             style={pos}
           />
         ))}
       </div>

       {/* Bottom Actions */}
       <div className="relative z-10 p-6 pb-12">
          <button 
             onClick={() => navigate("/main/feature1/library")}
             className="w-16 h-16 bg-blue-600 rounded-full border-4 border-blue-400 text-white flex items-center justify-center shadow-xl mx-auto hover:bg-blue-500 active:scale-95 transition-all"
          >
             <MoreHorizontal size={36} />
          </button>
          <p className="text-white font-bold text-center mt-4 drop-shadow-md">
            {t('Open Library')}
          </p>
       </div>
    </div>
  );
}
