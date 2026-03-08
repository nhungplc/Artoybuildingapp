import { useNavigate } from "react-router";
import { MobileWrapper } from "../components/MobileWrapper";
import { Button3D } from "../components/Button3D";
import { Trophy, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function RewardScreen() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <MobileWrapper>
      <div className="flex flex-col h-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 relative overflow-hidden">
         {/* Confetti Effect */}
         {showConfetti && (
           <div className="absolute inset-0 pointer-events-none z-0">
             {[...Array(25)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ 
                   top: -20, 
                   left: `${Math.random() * 100}%`,
                   rotate: 0,
                   scale: Math.random() * 0.8 + 0.5
                 }}
                 animate={{ 
                   top: '120%', 
                   rotate: 360,
                 }}
                 transition={{ 
                   duration: Math.random() * 2.5 + 2, 
                   repeat: Infinity,
                   ease: "linear",
                   delay: Math.random() * 2
                 }}
                 className={`absolute w-5 h-5 rounded-sm ${
                   ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-white', 'bg-purple-500', 'bg-indigo-500'][Math.floor(Math.random() * 6)]
                 }`}
                 style={{ opacity: 0.8 }}
               />
             ))}
           </div>
         )}

         <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 text-center relative">
            <motion.div 
               initial={{ scale: 0, rotate: -180 }}
               animate={{ scale: 1, rotate: 0 }}
               transition={{ type: "spring", bounce: 0.6, duration: 1 }}
               className="relative mb-10"
            >
               {/* Glowing effect */}
               <div className="absolute inset-0 bg-white/60 blur-3xl rounded-full scale-125"></div>
               
               <div className="w-56 h-56 bg-white rounded-full border-8 border-yellow-100 shadow-2xl overflow-hidden relative flex items-center justify-center z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waHl8ZW58MXx8fHwxNzcyNzU3MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Trophy" 
                    className="w-full h-full object-cover scale-110" 
                  />
               </div>
               
               {/* Floating stars */}
               {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    className={`absolute text-yellow-100 drop-shadow-xl z-20 ${
                      i === 0 ? '-top-4 -left-4' : i === 1 ? '-top-8 right-8' : 'bottom-8 -right-8'
                    }`}
                  >
                     <Trophy size={48} fill="currentColor" className="text-yellow-200" />
                  </motion.div>
               ))}
            </motion.div>

            <motion.h1 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.6, type: "spring" }}
               className="text-5xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] mb-4 leading-tight tracking-tight"
            >
               Great job!
            </motion.h1>
            
            <motion.div 
               initial={{ y: 20, opacity: 0, scale: 0.9 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               transition={{ delay: 0.8, type: "spring" }}
               className="bg-white/30 backdrop-blur-md px-8 py-4 rounded-3xl border-4 border-white/50 mb-12 shadow-lg"
            >
               <p className="text-2xl font-black text-white drop-shadow-sm">
                 Builder Level 1 Unlocked!
               </p>
            </motion.div>

            <motion.div
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.1, type: "spring", bounce: 0.5 }}
               className="w-full mt-auto"
            >
               <Button3D color="blue" fullWidth onClick={() => navigate("/gallery")} className="h-[72px] text-2xl">
                  View My Gallery <ChevronRight size={32} />
               </Button3D>
            </motion.div>
         </div>
      </div>
    </MobileWrapper>
  );
}
