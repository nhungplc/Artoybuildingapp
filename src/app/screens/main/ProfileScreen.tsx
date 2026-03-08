import { Button3D } from "../../components/Button3D";
import { LogOut, Settings, Award } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export function ProfileScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-50 p-6 relative">
       <div className="pt-8 pb-6 text-center flex flex-col items-center mt-4">
          <div className="w-28 h-28 bg-blue-100 rounded-[2rem] flex items-center justify-center font-black text-5xl text-blue-600 border-4 border-blue-200 shadow-sm mb-4">
            B
          </div>
          <h1 className="text-3xl font-black text-indigo-900 tracking-tight">{t('Builder')}</h1>
          <p className="text-slate-500 font-bold text-lg mt-1 flex items-center gap-1.5 justify-center">
            <Award size={20} className="text-yellow-500" /> {t('Level 4 Master Builder')}
          </p>
       </div>

       <div className="space-y-4 mt-6">
          <button className="w-full bg-white p-5 rounded-3xl border-b-4 border-slate-200 shadow-sm flex items-center gap-4 active:scale-95 transition-transform">
             <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                <Settings size={24} />
             </div>
             <div className="text-left flex-1">
                <h3 className="text-lg font-bold text-slate-800">{t('Account Settings')}</h3>
                <p className="text-sm font-medium text-slate-500">{t('Manage your profile & password')}</p>
             </div>
          </button>
       </div>

       <div className="mt-auto pb-10">
          <Button3D color="red" fullWidth onClick={() => navigate("/")}>
             {t('Log Out')} <LogOut size={20} />
          </Button3D>
       </div>
    </div>
  );
}
