import { useNavigate } from "react-router";
import { MobileWrapper } from "../components/MobileWrapper";
import { Button3D } from "../components/Button3D";
import { Cpu, Dog, Clock } from "lucide-react";
import { motion } from "motion/react";

export function MissionScreen() {
  const navigate = useNavigate();

  const choices = [
    { icon: <Cpu size={28} />, text: "A Memory Chip", color: "blue" as const },
    { icon: <Dog size={28} />, text: "A Robot Dog Friend", color: "yellow" as const },
    { icon: <Clock size={28} />, text: "A Time Machine", color: "purple" as const },
  ];

  return (
    <MobileWrapper>
      <div className="flex flex-col h-full bg-indigo-50 relative">
         <div className="flex-1 p-6 flex flex-col overflow-y-auto pb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-full h-64 rounded-[2rem] overflow-hidden shadow-xl border-8 border-white mb-6 relative shrink-0"
            >
               <img 
                 src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjByb2JvdHxlbnwxfHx8fDE3NzI3NTcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Robot" 
                 className="w-full h-full object-cover" 
               />
               <motion.div 
                 initial={{ x: -100, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.3, type: "spring" }}
                 className="absolute top-4 left-4 bg-red-500 text-white font-black px-4 py-1.5 rounded-full border-b-4 border-red-700 shadow-lg"
               >
                  NEW MISSION!
               </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
               <h2 className="text-3xl font-black text-indigo-900 mb-3 leading-tight tracking-tight">
                  The robot lost its memory! 🤖
               </h2>
               <p className="text-lg font-medium text-indigo-700 mb-8 leading-snug">
                  Oh no! The robot can't remember anything. Use your remaining blocks to build something to help it remember!
               </p>
            </motion.div>

            <div className="space-y-4 pb-8">
               {choices.map((choice, i) => (
                 <motion.div
                   key={i}
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                 >
                   <Button3D 
                     color={choice.color} 
                     fullWidth 
                     className="justify-start px-5 h-[88px]"
                     onClick={() => navigate("/reward")}
                   >
                     <div className="bg-white/25 p-3 rounded-2xl mr-4 shadow-sm">
                       {choice.icon}
                     </div>
                     <span className="text-xl">{choice.text}</span>
                   </Button3D>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>
    </MobileWrapper>
  );
}
