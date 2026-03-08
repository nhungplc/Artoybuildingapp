import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { ChevronLeft, Play, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function HintScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-6 pb-4 flex items-center justify-between mb-2 mt-4">
          <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 border-[3px] border-slate-200 active:scale-95 transition-transform shadow-sm">
             <ChevronLeft size={28} strokeWidth={3} />
          </button>
          <div className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-bold border-2 border-yellow-200 flex items-center gap-2 shadow-sm">
             <Lightbulb size={20} /> {t('Hint')}
          </div>
       </div>

       <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-full aspect-square bg-slate-900 rounded-[3rem] p-6 relative overflow-hidden shadow-xl border-8 border-white mb-8"
          >
             <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
             
             {/* Silhouette Image */}
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1604011393833-3b74b478f689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwYnJpZGdlfGVufDF8fHx8MTc3Mjc1ODk2NHww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Bridge Silhouette" 
                  className="w-full h-full object-contain brightness-0 invert opacity-40" 
                />
             </div>
             
             {/* Scanning/Grid Effect */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
          </motion.div>

          <h2 className="text-2xl font-black text-indigo-900 mb-2 text-center">{t('Here is a clue!')}</h2>
          <p className="text-slate-500 font-bold text-center px-4 leading-snug">
             {t('Try building arches to support the weight in the middle of your bridge.')}
          </p>
       </div>

       <div className="mt-auto pb-[90px]">
          <Button3D color="blue" fullWidth className="h-[76px] text-2xl" onClick={() => navigate("/main/feature2/completion")}>
             {t('Start Building')} <Play size={28} className="fill-current" />
          </Button3D>
       </div>
    </div>
  );
}
