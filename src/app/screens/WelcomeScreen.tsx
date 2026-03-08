import { useNavigate } from "react-router";
import { MobileWrapper } from "../components/MobileWrapper";
import { Button3D } from "../components/Button3D";
import { Sparkles, Blocks } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <MobileWrapper>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWQlMjBidWlsZGluZyUyMGJsb2NrcyUyMHRveXxlbnwxfHx8fDE3NzI3NTY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="bg" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-white/80 to-white"></div>
      </div>
      
      <div className="relative z-10 flex flex-col h-full p-8 pb-12">
        <div className="flex-1 flex flex-col justify-end">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border-4 border-white mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center border-b-4 border-yellow-600 mb-6 shadow-sm">
               <Blocks size={32} className="text-indigo-900" />
            </div>
            <h1 className="text-4xl font-black text-indigo-900 leading-[1.1] mb-4 tracking-tight">
              {t('Where Building Meets Imagination')}
            </h1>
            <p className="text-lg font-medium text-indigo-700 leading-snug">
              {t('Turn building into an interactive AR adventure.')}
            </p>
          </div>
          
          <Button3D color="blue" fullWidth onClick={() => navigate("/auth/create")}>
            {t('Start Building')} <Sparkles size={24} />
          </Button3D>
        </div>
      </div>
    </MobileWrapper>
  );
}
