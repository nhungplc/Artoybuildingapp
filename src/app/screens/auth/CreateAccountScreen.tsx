import { useNavigate } from "react-router";
import { MobileWrapper } from "../../components/MobileWrapper";
import { Button3D } from "../../components/Button3D";
import { Mail, KeyRound } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";

export function CreateAccountScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <MobileWrapper>
      <div className="flex flex-col h-full bg-slate-50 relative">
         <div className="w-full h-64 bg-yellow-300 rounded-b-[3rem] p-6 pt-12 flex flex-col items-center justify-end relative overflow-hidden border-b-8 border-yellow-400 shrink-0 shadow-sm">
            <motion.img 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              src="https://images.unsplash.com/photo-1759409972704-1ad86e5a62cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWQlMjBpbGx1c3RyYXRpb24lMjB0b3l8ZW58MXx8fHwxNzcyNzU4OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Toys" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" 
            />
            <div className="relative z-10 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border-4 border-white shadow-lg mb-4">
              <h1 className="text-3xl font-black text-indigo-900 tracking-tight">{t('Create an account')}</h1>
            </div>
         </div>

         <div className="flex-1 p-8 flex flex-col gap-4 justify-center">
            <Button3D color="blue" fullWidth onClick={() => navigate("/auth/signup")} className="justify-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">A</div>
              {t('Continue with Apple')}
            </Button3D>
            
            <Button3D color="red" fullWidth onClick={() => navigate("/auth/signup")} className="justify-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">G</div>
              {t('Continue with Google')}
            </Button3D>
            
            <Button3D color="yellow" fullWidth onClick={() => navigate("/auth/signup")} className="justify-start">
              <Mail size={24} className="mr-2" />
              {t('Continue with Email')}
            </Button3D>
            
            <Button3D color="purple" fullWidth onClick={() => navigate("/auth/signup")} className="justify-start">
              <KeyRound size={24} className="mr-2" />
              {t('Continue with SSO')}
            </Button3D>
         </div>

         <div className="p-8 text-center mt-auto">
            <button className="text-slate-500 font-bold text-lg hover:text-indigo-600 transition-colors">
              {t('Already have an account?')} <span className="text-indigo-600 underline decoration-4 underline-offset-4">{t('Log in')}</span>
            </button>
         </div>
      </div>
    </MobileWrapper>
  );
}
