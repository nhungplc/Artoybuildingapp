import { useNavigate } from "react-router";
import { MobileWrapper } from "../components/MobileWrapper";
import { Home, Image as ImageIcon, User, Plus } from "lucide-react";
import { motion } from "motion/react";

export function GalleryScreen() {
  const navigate = useNavigate();

  const creations = [
    { id: 1, name: "Super Robot", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjByb2JvdHxlbnwxfHx8fDE3NzI3NTcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, name: "Space Explorer", img: "https://images.unsplash.com/photo-1706900961630-33ca9d775443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBzcGFjZXNoaXB8ZW58MXx8fHwxNzcyNzU2OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, name: "Fast Racer", img: "https://images.unsplash.com/photo-1761399707193-636597471f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3NTY5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, name: "Block Tower", img: "https://images.unsplash.com/photo-1714519046792-66bf98dd3bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1aWxkaW5nJTIwYmxvY2tzfGVufDF8fHx8MTc3MjcxNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  return (
    <MobileWrapper>
      <div className="flex flex-col h-full bg-slate-50 relative">
         {/* Header */}
         <div className="bg-white pt-10 pb-6 px-6 rounded-b-[2.5rem] shadow-sm border-b-8 border-slate-100 relative z-10">
            <h1 className="text-4xl font-black text-indigo-900 tracking-tight">My Creations</h1>
            <p className="text-slate-500 font-medium mt-2 text-lg leading-tight">Look at all the awesome things you built!</p>
         </div>

         {/* Grid */}
         <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 gap-5 pb-32">
               {/* Add new button */}
               <motion.button 
                 whileTap={{ scale: 0.95 }}
                 onClick={() => navigate("/scan")}
                 className="aspect-square bg-blue-50 rounded-[2rem] border-4 border-dashed border-blue-300 flex flex-col items-center justify-center text-blue-600 gap-3 shadow-sm hover:bg-blue-100 transition-colors"
               >
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                     <Plus size={32} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-lg">New Build</span>
               </motion.button>

               {/* Creation Cards */}
               {creations.map((item, i) => (
                 <motion.div
                   key={item.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                   className="bg-white p-3 rounded-[2rem] shadow-md border-b-[6px] border-slate-200"
                 >
                    <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-slate-100">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-slate-800 text-center text-[15px] truncate px-1 pb-1">
                      {item.name}
                    </p>
                 </motion.div>
               ))}
            </div>
         </div>

         {/* Bottom Navigation */}
         <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] border-t-[6px] border-slate-100 shadow-[0_-5px_30px_rgba(0,0,0,0.06)] px-8 py-5 flex justify-between items-center z-20">
            <button onClick={() => navigate("/")} className="flex flex-col items-center gap-1.5 text-slate-400 p-2 transition-colors hover:text-indigo-900 active:scale-90">
               <Home size={28} strokeWidth={2.5} />
               <span className="text-[11px] font-bold tracking-wide">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-blue-600 p-2 relative active:scale-90 transition-transform">
               <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-[3px] border-white"></div>
               <ImageIcon size={28} strokeWidth={2.5} />
               <span className="text-[11px] font-bold tracking-wide">Gallery</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-slate-400 p-2 transition-colors hover:text-indigo-900 active:scale-90">
               <User size={28} strokeWidth={2.5} />
               <span className="text-[11px] font-bold tracking-wide">Profile</span>
            </button>
         </div>
      </div>
    </MobileWrapper>
  );
}
