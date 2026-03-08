import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { Target, Flag, Zap, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function Feature2LandingScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const missions = [
    { title: t('Strongest Bridge'), icon: Zap, color: "blue", img: "https://images.unsplash.com/photo-1607729050964-7bafb9dc1346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBicmlkZ2V8ZW58MXx8fHwxNzcyNzU4OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: t('Tall Tower'), icon: Flag, color: "red", img: "https://images.unsplash.com/photo-1714519046792-66bf98dd3bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1aWxkaW5nJTIwYmxvY2tzfGVufDF8fHx8MTc3MjcxNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { title: t('Creative House'), icon: Trophy, color: "green", img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBob3VzZXxlbnwxfHx8fDE3NzI3NTg5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-6 mb-6 mt-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 border-2 border-red-200">
               <Target size={28} strokeWidth={3} />
            </div>
            <h1 className="text-3xl font-black text-indigo-900 leading-none tracking-tight">{t('Missions')}</h1>
          </div>
          <p className="text-slate-500 font-bold">{t('Complete challenges to earn badges!')}</p>
       </div>

       <div className="flex-1 overflow-y-auto space-y-5 pb-8">
          {missions.map((mission, i) => {
            const Icon = mission.icon;
            return (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                onClick={() => navigate("/main/feature2/levels")}
                className="bg-white rounded-3xl border-b-[6px] border-slate-200 shadow-sm overflow-hidden active:scale-95 transition-transform cursor-pointer group"
              >
                 <div className="h-32 bg-slate-200 relative overflow-hidden">
                    <img src={mission.img} alt={mission.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-white/50 bg-${mission.color}-500 shadow-md`}>
                          <Icon size={20} strokeWidth={3} />
                       </div>
                       <h2 className="text-xl font-black text-white drop-shadow-md">{mission.title}</h2>
                    </div>
                 </div>
                 <div className="p-4 bg-white flex justify-between items-center">
                    <div className="flex gap-1">
                       {[1,2,3].map(star => (
                         <Trophy key={star} size={20} className="text-slate-200 fill-slate-200" />
                       ))}
                    </div>
                    <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">{t('Play Now')}</span>
                 </div>
              </motion.div>
            );
          })}
       </div>
    </div>
  );
}
