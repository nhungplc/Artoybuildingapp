import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { Image as ImageIcon, Camera, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function Feature3LandingScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const creations = [
    { id: 1, name: t('Flying Car'), img: "https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, name: t('Space Robot'), img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjByb2JvdHxlbnwxfHx8fDE3NzI3NTcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, name: t('Magic Castle'), img: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBob3VzZXxlbnwxfHx8fDE3NzI3NTg5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, name: t('Super Tower'), img: "https://images.unsplash.com/photo-1714519046792-66bf98dd3bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1aWxkaW5nJTIwYmxvY2tzfGVufDF8fHx8MTc3MjcxNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-6 pb-6 text-center flex flex-col items-center mt-4">
          <div className="w-20 h-20 bg-purple-100 rounded-[2rem] flex items-center justify-center text-purple-600 border-4 border-purple-200 mb-4 shadow-sm rotate-3">
             <Sparkles size={36} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-black text-indigo-900 tracking-tight leading-tight">{t('Create & Animate')}</h1>
          <p className="text-slate-500 font-bold mt-1 max-w-[250px]">{t('Bring your physical builds to life with AR magic!')}</p>
       </div>

       <div className="flex gap-4 mb-8">
          <Button3D color="blue" className="flex-1 px-2 h-[80px]" onClick={() => navigate("/main/feature3/prompt")}>
             <div className="flex flex-col items-center gap-1">
                <ImageIcon size={24} />
                <span className="text-sm">{t('Upload')}</span>
             </div>
          </Button3D>
          <Button3D color="yellow" className="flex-1 px-2 h-[80px]" onClick={() => navigate("/main/feature3/prompt")}>
             <div className="flex flex-col items-center gap-1">
                <Camera size={24} />
                <span className="text-sm">{t('Capture')}</span>
             </div>
          </Button3D>
       </div>

       <h2 className="text-xl font-black text-slate-800 mb-4 tracking-tight">{t('Saved Animations')}</h2>
       
       <div className="flex-1 overflow-y-auto pb-[90px] grid grid-cols-2 gap-4">
          {creations.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1, type: "spring" }}
               className="bg-white p-3 rounded-3xl border-b-[6px] border-slate-200 shadow-sm"
             >
                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden mb-3 border-4 border-slate-100 relative group cursor-pointer">
                   <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-purple-600 pl-1">
                         <Play size={20} className="fill-current" />
                      </div>
                   </div>
                </div>
                <h3 className="font-bold text-slate-800 text-[15px] truncate px-1 pb-1">{item.name}</h3>
             </motion.div>
          ))}
       </div>
    </div>
  );
}

// Dummy Play icon for local use here since it wasn't imported from lucide-react above
function Play(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>;
}
