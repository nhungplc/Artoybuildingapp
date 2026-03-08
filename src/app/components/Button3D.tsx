import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface Props extends HTMLMotionProps<"button"> {
  children: ReactNode;
  color?: "blue" | "red" | "yellow" | "green" | "purple";
  fullWidth?: boolean;
}

const colorMap = {
  blue: "bg-blue-500 border-blue-700 text-white",
  red: "bg-red-500 border-red-700 text-white",
  yellow: "bg-yellow-400 border-yellow-600 text-indigo-900",
  green: "bg-green-500 border-green-700 text-white",
  purple: "bg-purple-500 border-purple-700 text-white",
};

export function Button3D({ children, color = "blue", fullWidth, className, ...props }: Props) {
  return (
    <motion.button
      whileTap={{ y: 4, borderBottomWidth: 0, marginTop: 4 }}
      className={`
        relative px-6 py-4 rounded-3xl font-black text-xl border-b-[6px] 
        transition-colors flex items-center justify-center gap-2
        ${colorMap[color]} ${fullWidth ? "w-full" : ""} ${className || ""}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
