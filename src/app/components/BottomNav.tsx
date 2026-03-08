import { Home, ScanFace, Target, Sparkles, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const tabs = [
    { id: "home", icon: Home, label: t('Home'), path: "/main/home" },
    { id: "f1", icon: ScanFace, label: t('AR Build'), path: "/main/feature1" },
    { id: "f2", icon: Target, label: t('Missions'), path: "/main/feature2" },
    { id: "f3", icon: Sparkles, label: t('Create'), path: "/main/feature3" },
    { id: "profile", icon: User, label: t('Profile'), path: "/main/profile" },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] border-t-[6px] border-slate-100 shadow-[0_-5px_30px_rgba(0,0,0,0.06)] px-4 sm:px-6 py-4 flex justify-between items-center z-50">
      {tabs.map((tab) => {
        // Active logic: for feature sections, matching root path is enough, home/profile are exact
        const isActive = location.pathname.startsWith(tab.path);
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center gap-1.5 p-2 transition-colors active:scale-90 ${
              isActive ? "text-blue-600" : "text-slate-400 hover:text-indigo-900"
            }`}
          >
            <div className="relative">
               {isActive && <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full border-[3px] border-white z-10"></div>}
               <Icon size={26} strokeWidth={isActive ? 3 : 2.5} />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
