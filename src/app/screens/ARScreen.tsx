import { useNavigate } from "react-router";
import { MobileWrapper } from "../components/MobileWrapper";
import { Button3D } from "../components/Button3D";
import { ArrowDown, Check, X, Box } from "lucide-react";
import { motion } from "motion/react";

export function ARScreen() {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1730641322856-fb667b7a9235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjByb2JvdCUyMGJ1aWxkfGVufDF8fHx8MTc3Mjc1Njk4Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="camera feed" 
          className="w-full h-full object-cover opacity-80" 
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Top Bar */}
        <div className="p-6 flex justify-between items-center">
          <button onClick={() => navigate("/")} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/40 active:scale-95 transition-transform">
             <X size={24} />
          </button>
          <div className="bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border-2 border-white/40 font-bold text-white shadow-lg">
            Step 1 of 12
          </div>
        </div>

        {/* AR Overlay Area */}
        <div className="flex-1 relative">
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           >
              <div className="relative">
                 <div className="w-32 h-32 bg-cyan-400/40 border-4 border-cyan-300 rounded-full flex items-center justify-center shadow-[0_0_30px_#22d3ee] backdrop-blur-sm">
                    <Box size={48} className="text-cyan-100 drop-shadow-lg" />
                 </div>
                 <motion.div 
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 1, repeat: Infinity }}
                   className="absolute -top-16 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                 >
                   <ArrowDown size={48} strokeWidth={3} />
                 </motion.div>
              </div>
           </motion.div>
        </div>

        {/* Bottom Panel */}
        <div className="bg-white rounded-t-[2.5rem] p-6 pt-8 pb-10 border-t-8 border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative">
           <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 border-b-4 border-blue-200">
                 <Box size={32} />
              </div>
              <div className="pt-1">
                 <h2 className="text-2xl font-black text-gray-800 mb-1 leading-none">Attach the wheel</h2>
                 <p className="text-gray-500 font-medium leading-tight">Find the blue wheel piece and snap it onto the front axle.</p>
              </div>
           </div>
           
           <div className="flex gap-4">
             <Button3D color="yellow" className="px-6" onClick={() => navigate("/mission")}>
                Skip
             </Button3D>
             <Button3D color="green" fullWidth onClick={() => navigate("/mission")}>
                Done <Check size={24} />
             </Button3D>
           </div>
        </div>
      </div>
    </MobileWrapper>
  );
}
