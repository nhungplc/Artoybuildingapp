import { useNavigate } from "react-router";
import { MobileWrapper } from "../../components/MobileWrapper";
import { Button3D } from "../../components/Button3D";
import { ChevronLeft, Sparkles } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function SignUpScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <MobileWrapper>
      <div className="flex flex-col h-full bg-white relative">
         <div className="p-6 pt-10 pb-4 flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 border-2 border-slate-200 active:scale-95 transition-transform mt-4">
               <ChevronLeft size={28} strokeWidth={3} />
            </button>
            <div className="mt-4">
               <h1 className="text-3xl font-black text-indigo-900 leading-tight">{t('Welcome Builder')}</h1>
               <p className="text-slate-500 font-medium leading-tight text-sm mt-1">{t('Create an account to start building your AR creations.')}</p>
            </div>
         </div>

         <div className="flex-1 p-6 flex flex-col gap-5 overflow-y-auto">
            <div className="space-y-2">
               <label className="text-indigo-900 font-bold pl-2">{t('First Name')}</label>
               <input 
                 type="text" 
                 placeholder={t('Type here...')} 
                 className="w-full bg-slate-100 border-4 border-slate-200 rounded-2xl px-5 py-4 text-lg font-bold text-slate-800 focus:outline-none focus:border-blue-400 focus:bg-blue-50 transition-colors placeholder:text-slate-400"
               />
            </div>
            
            <div className="space-y-2">
               <label className="text-indigo-900 font-bold pl-2">{t('Last Name')}</label>
               <input 
                 type="text" 
                 placeholder={t('Type here...')} 
                 className="w-full bg-slate-100 border-4 border-slate-200 rounded-2xl px-5 py-4 text-lg font-bold text-slate-800 focus:outline-none focus:border-blue-400 focus:bg-blue-50 transition-colors placeholder:text-slate-400"
               />
            </div>

            <div className="space-y-2">
               <label className="text-indigo-900 font-bold pl-2">{t('Email Address')}</label>
               <input 
                 type="email" 
                 placeholder="name@example.com" 
                 className="w-full bg-slate-100 border-4 border-slate-200 rounded-2xl px-5 py-4 text-lg font-bold text-slate-800 focus:outline-none focus:border-blue-400 focus:bg-blue-50 transition-colors placeholder:text-slate-400"
               />
            </div>

            <div className="space-y-2 mb-4">
               <label className="text-indigo-900 font-bold pl-2">{t('Password')}</label>
               <input 
                 type="password" 
                 placeholder="••••••••" 
                 className="w-full bg-slate-100 border-4 border-slate-200 rounded-2xl px-5 py-4 text-lg font-bold text-slate-800 focus:outline-none focus:border-blue-400 focus:bg-blue-50 transition-colors placeholder:text-slate-400"
               />
            </div>
            
            <Button3D color="blue" fullWidth onClick={() => navigate("/main/home")} className="mt-auto">
               {t('Continue')} <Sparkles size={24} />
            </Button3D>
         </div>
      </div>
    </MobileWrapper>
  );
}
