import { Outlet } from "react-router";
import { MobileWrapper } from "./MobileWrapper";
import { BottomNav } from "./BottomNav";

export function MainLayout() {
  return (
    <MobileWrapper>
      <div className="flex-1 relative overflow-hidden flex flex-col h-full bg-slate-50">
        <div className="flex-1 overflow-y-auto w-full pb-[100px]">
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </MobileWrapper>
  );
}
