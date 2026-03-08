import { useNavigate } from "react-router";
import { MobileWrapper } from "../components/MobileWrapper";
import { X, QrCode } from "lucide-react";
import { useEffect } from "react";
import { motion } from "motion/react";

export function QRScanScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto progress after 3 seconds for demo
    const timer = setTimeout(() => navigate("/ar"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileWrapper>
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1765277789277-86c7b06d5e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrJTIwdG95JTIwYm94JTIwdG9wJTIwZG93bnxlbnwxfHx8fDE3NzI3NTY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="camera feed" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>

      <div className="relative z-10 h-full flex flex-col p-6">
        <div className="flex justify-between items-center mb-auto">
           <button onClick={() => navigate("/")} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/40 active:scale-95 transition-transform">
             <X size={24} />
           </button>
        </div>

        <div className="flex-1 flex items-center justify-center" onClick={() => navigate("/ar")}>
           <div className="relative w-64 h-64 cursor-pointer">
             {/* Corner brackets */}
             <div className="absolute top-0 left-0 w-12 h-12 border-t-8 border-l-8 border-yellow-400 rounded-tl-3xl"></div>
             <div className="absolute top-0 right-0 w-12 h-12 border-t-8 border-r-8 border-yellow-400 rounded-tr-3xl"></div>
             <div className="absolute bottom-0 left-0 w-12 h-12 border-b-8 border-l-8 border-yellow-400 rounded-bl-3xl"></div>
             <div className="absolute bottom-0 right-0 w-12 h-12 border-b-8 border-r-8 border-yellow-400 rounded-br-3xl"></div>
             
             {/* Scanning line */}
             <motion.div 
               animate={{ y: [0, 240, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="w-full h-1 bg-green-400 shadow-[0_0_15px_#4ade80]"
             />
           </div>
        </div>

        <div className="bg-white rounded-[2rem] p-6 mt-auto text-center flex flex-col items-center border-b-8 border-gray-200 shadow-xl">
           <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
             <QrCode size={32} />
           </div>
           <p className="text-xl font-bold text-gray-800">
             Point your camera at the builder kit QR code.
           </p>
        </div>
      </div>
    </MobileWrapper>
  );
}
