import { useNavigate } from "react-router";
import { ChevronLeft, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function ModelLibraryScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const models = [
    { name: t('Bridge'), icon: "🌉", img: "https://images.unsplash.com/photo-1607729050964-7bafb9dc1346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBicmlkZ2V8ZW58MXx8fHwxNzcyNzU4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080", pieces: 10, unlocked: true },
    { name: t('House'), icon: "🏠", img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBob3VzZXxlbnwxfHx8fDE3NzI3NTg5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080", pieces: 15, unlocked: true },
    { name: t('Car'), icon: "🚗", img: "https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080", pieces: 12, unlocked: true },
    { name: t('Robot'), icon: "🤖", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjByb2JvdHxlbnwxfHx8fDE3NzI3NTcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080", pieces: 20, unlocked: false },
    { name: t('Tower'), icon: "🗼", img: "https://images.unsplash.com/photo-1714519046792-66bf98dd3bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1aWxkaW5nJTIwYmxvY2tzfGVufDF8fHx8MTc3MjcxNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080", pieces: 25, unlocked: false },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-6 pb-4 flex items-center gap-4 border-b-[6px] border-slate-200 mb-6 mt-4">
          <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 border-[3px] border-slate-200 active:scale-95 transition-transform shadow-sm">
             <ChevronLeft size={28} strokeWidth={3} />
          </button>
          <div>
             <h1 className="text-3xl font-black text-indigo-900 leading-tight">{t('Model Library')}</h1>
             <p className="text-slate-500 font-bold leading-tight mt-1">{t('What will we build today?')}</p>
          </div>
       </div>

       <div className="flex-1 overflow-y-auto pb-[90px] grid grid-cols-2 gap-4">
          {models.map((model, i) => (
             <motion.button 
               key={model.name}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: i * 0.1, type: "spring" }}
               onClick={() => model.unlocked ? navigate("/main/feature1/assembly") : null}
               className={`relative bg-white p-3 rounded-3xl border-b-[6px] border-slate-200 shadow-sm text-left ${model.unlocked ? 'hover:border-blue-300 hover:bg-blue-50 cursor-pointer active:scale-95 transition-all' : 'opacity-70 grayscale'}`}
             >
                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden mb-3 relative border-4 border-slate-100">
                   <img src={model.img} alt={model.name} className="w-full h-full object-cover" />
                   {!model.unlocked && (
                     <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                        <Lock size={32} className="text-white drop-shadow-md" />
                     </div>
                   )}
                </div>
                <div className="px-1 pb-1">
                   <h3 className="font-black text-slate-800 text-lg flex items-center gap-1.5">{model.icon} {model.name}</h3>
                   <p className="text-slate-400 font-bold text-sm mt-0.5">{model.pieces} {t('pieces')}</p>
                </div>
             </motion.button>
          ))}
       </div>
    </div>
  );
}
