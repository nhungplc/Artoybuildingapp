import { useNavigate } from "react-router";
import { Button3D } from "../../../components/Button3D";
import { ScanFace, PlayCircle, Box } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function Feature1LandingScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-10 mb-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg mb-6 shadow-blue-500/30 relative">
             <div className="absolute inset-0 border-4 border-blue-200 rounded-full scale-110"></div>
             <Box size={48} />
          </div>
          <h1 className="text-4xl font-black text-indigo-900 leading-tight tracking-tight">{t('AR Builder')}</h1>
          <p className="text-slate-500 font-bold text-lg mt-3 px-4">{t('Scan your physical toys and see what you can build!')}</p>
       </div>

       <div className="flex-1 flex flex-col justify-end gap-4 pb-12">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button3D color="blue" fullWidth className="h-[88px] text-2xl" onClick={() => navigate("/main/feature1/scan")}>
               {t('Start Scan')} <ScanFace size={32} />
            </Button3D>
          </motion.div>
          
          <Button3D color="yellow" fullWidth className="h-[72px] text-xl" onClick={() => navigate("/main/feature1/scan")}>
             <PlayCircle size={28} className="mr-2" /> {t('Watch Demo')}
          </Button3D>
       </div>
    </div>
  );
}
