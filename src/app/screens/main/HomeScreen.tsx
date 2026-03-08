import { Button3D } from "../../components/Button3D";
import { Play } from "lucide-react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

export function HomeScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-slate-50 relative p-6">
       <div className="pt-8 mb-6 mt-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-xl text-indigo-600 border-2 border-indigo-200">B</div>
            <div>
              <p className="text-slate-500 font-bold text-sm">{t('Welcome back,')}</p>
              <h1 className="text-2xl font-black text-indigo-900 leading-none tracking-tight">{t('Builder')}</h1>
            </div>
          </div>
       </div>

       <div className="bg-yellow-400 rounded-3xl p-6 border-b-[6px] border-yellow-500 shadow-sm relative overflow-hidden mb-8">
          <div className="relative z-10">
             <h2 className="text-2xl font-black text-indigo-900 mb-2 leading-tight w-2/3">{t('Ready to build something new?')}</h2>
             <Button3D color="blue" className="mt-4 px-6 py-3 text-lg" onClick={() => navigate("/main/feature1")}>
               {t('Start')} <Play size={20} className="fill-current" />
             </Button3D>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1752322069850-f92b5ce0e961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdvJTIwcGllY2VzJTIwc2NhdHRlcmVkfGVufDF8fHx8MTc3Mjc1ODk2M3ww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Toys" 
            className="absolute -right-10 -bottom-10 w-48 h-48 object-cover opacity-50 mix-blend-multiply rounded-full" 
          />
       </div>

       <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">{t('Your Progress')}</h3>
       <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl border-b-4 border-slate-200 shadow-sm text-center">
             <div className="text-3xl font-black text-blue-500 mb-1">12</div>
             <div className="text-sm font-bold text-slate-500">{t('Models Built')}</div>
          </div>
          <div className="bg-white p-5 rounded-3xl border-b-4 border-slate-200 shadow-sm text-center">
             <div className="text-3xl font-black text-green-500 mb-1">5</div>
             <div className="text-sm font-bold text-slate-500">{t('Missions Done')}</div>
          </div>
       </div>
    </div>
  );
}
