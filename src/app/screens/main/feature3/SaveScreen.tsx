import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { Heart, Home, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function SaveScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-10 mb-8 flex flex-col items-center text-center mt-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="w-24 h-24 bg-pink-100 rounded-[2.5rem] flex items-center justify-center text-pink-500 border-4 border-pink-200 mb-6 shadow-sm rotate-6"
          >
             <Heart size={48} className="fill-current" />
          </motion.div>
          <h1 className="text-4xl font-black text-indigo-900 leading-tight tracking-tight">{t("It's Alive!")}</h1>
          <p className="text-slate-500 font-bold text-lg mt-3 px-4">{t('Your magical animation looks amazing.')}</p>
       </div>

       <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-[280px] bg-white rounded-[3rem] p-4 border-[6px] border-slate-200 shadow-xl rotate-[-2deg]">
             <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative mb-4 border-4 border-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Preview" 
                 className="w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
             </div>
             <p className="font-black text-slate-800 text-center text-lg pb-2">"A car driving across a rainbow"</p>
          </div>
       </div>

       <div className="mt-auto pb-[90px] flex flex-col gap-4 pt-8">
          <Button3D color="blue" fullWidth className="h-[76px] text-xl" onClick={() => navigate("/main/feature3")}>
             {t('Save to Collection')} <Heart size={24} className="fill-current" />
          </Button3D>
          
          <div className="flex gap-4">
             <Button3D color="yellow" className="flex-1" onClick={() => navigate("/main/home")}>
                <Home size={24} /> {t('Home')}
             </Button3D>
             <Button3D color="purple" className="flex-1">
                <Share2 size={24} /> {t('Share')}
             </Button3D>
          </div>
       </div>
    </div>
  );
}
