import { ReactNode } from "react";
import { GlobalHeader } from "./GlobalHeader";

export function MobileWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-0 sm:p-8">
      <div className="w-full max-w-[420px] h-[100dvh] sm:h-[844px] bg-white sm:rounded-[3rem] sm:shadow-2xl overflow-hidden relative sm:border-[12px] border-slate-800 flex flex-col">
        <GlobalHeader />
        {children}
      </div>
    </div>
  );
}
