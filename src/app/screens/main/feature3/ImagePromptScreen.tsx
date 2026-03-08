import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { ChevronLeft, Wand2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function ImagePromptScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-6 pb-4 flex items-center gap-4 mb-4 mt-4">
          <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 border-[3px] border-slate-200 active:scale-95 transition-transform shadow-sm">
             <ChevronLeft size={28} strokeWidth={3} />
          </button>
          <h1 className="text-2xl font-black text-indigo-900 leading-tight">{t('Add Magic')}</h1>
       </div>

       <div className="flex-1 overflow-y-auto pb-[90px] flex flex-col">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full aspect-square bg-slate-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-lg mb-8 relative"
          >
             <img 
               src="https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Captured Build" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold border-2 border-white/20">
                {t('Original Photo')}
             </div>
          </motion.div>

          <div className="bg-white rounded-3xl p-6 border-b-[6px] border-slate-200 shadow-sm flex-1 flex flex-col">
             <h2 className="text-xl font-black text-slate-800 mb-2">{t('What should it do?')}</h2>
             <p className="text-slate-500 font-bold text-sm mb-4 leading-tight">{t('Describe the magical animation you want to see.')}</p>
             
             <div className="relative mb-6">
               <textarea 
                 rows={3}
                 placeholder={t('Type here...')} 
                 className="w-full bg-slate-50 border-4 border-slate-200 rounded-2xl p-4 text-lg font-bold text-slate-800 focus:outline-none focus:border-purple-400 focus:bg-purple-50 transition-colors placeholder:text-slate-300 resize-none"
                 defaultValue="A car driving across a rainbow"
               ></textarea>
               <div className="absolute bottom-4 right-4 text-purple-400 animate-pulse">
                  |
               </div>
             </div>

             <div className="mt-auto">
               <Button3D color="purple" fullWidth className="h-[72px] text-xl" onClick={() => navigate("/main/feature3/animation")}>
                  {t('Create Animation')} <Wand2 size={24} />
               </Button3D>
             </div>
          </div>
       </div>
    </div>
  );
}
