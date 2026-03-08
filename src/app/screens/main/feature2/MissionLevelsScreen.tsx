import { useNavigate } from "react-router";
import { ChevronLeft, Lock, Star, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function MissionLevelsScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const levels = [
    { level: 1, title: t('Simple Bridge'), desc: t('Build a bridge that spans 10 inches.'), unlocked: true, stars: 0 },
    { level: 2, title: t('Sturdy Bridge'), desc: t('Must hold the weight of 5 toy cars.'), unlocked: true, stars: 0 },
    { level: 3, title: t('Master Bridge'), desc: t('Build a suspension bridge with towers.'), unlocked: false, stars: 0 },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-6 pb-4 flex items-center gap-4 border-b-[6px] border-slate-200 mb-6 mt-4">
          <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 border-[3px] border-slate-200 active:scale-95 transition-transform shadow-sm">
             <ChevronLeft size={28} strokeWidth={3} />
          </button>
          <div>
             <h1 className="text-2xl font-black text-indigo-900 leading-tight">{t('Strongest Bridge')}</h1>
             <p className="text-slate-500 font-bold leading-tight mt-1 text-sm">{t('Select a level')}</p>
          </div>
       </div>

       <div className="flex-1 overflow-y-auto space-y-4">
          {levels.map((lvl, i) => (
             <motion.div 
               key={lvl.level}
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: i * 0.1, type: "spring" }}
               onClick={() => lvl.unlocked ? navigate("/main/feature2/hint") : null}
               className={`relative bg-white p-5 rounded-3xl border-b-[6px] border-slate-200 shadow-sm flex items-center gap-4 ${lvl.unlocked ? 'hover:border-blue-300 cursor-pointer active:scale-95 transition-all' : 'opacity-60 bg-slate-100'}`}
             >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border-b-4 ${lvl.unlocked ? 'bg-blue-500 border-blue-700 text-white' : 'bg-slate-300 border-slate-400 text-slate-500'}`}>
                   {lvl.unlocked ? <span className="text-2xl font-black">{lvl.level}</span> : <Lock size={28} strokeWidth={3} />}
                </div>
                <div className="flex-1">
                   <h3 className="text-xl font-black text-slate-800">{lvl.title}</h3>
                   <p className="text-sm font-bold text-slate-500 leading-tight mt-1 pr-2">{lvl.desc}</p>
                   {lvl.unlocked && (
                     <div className="flex gap-1 mt-2">
                       {[1,2,3].map(star => <Star key={star} size={16} className="text-slate-300 fill-slate-300" />)}
                     </div>
                   )}
                </div>
                {lvl.unlocked && <ChevronRight size={28} className="text-slate-300" strokeWidth={3} />}
             </motion.div>
          ))}
       </div>
    </div>
  );
}
