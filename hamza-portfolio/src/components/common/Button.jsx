export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 rounded-[1.5rem] font-bold transition-all duration-300 ease-out focus:outline-none relative overflow-hidden cursor-pointer tracking-wide active:scale-95 group";
  const variants = {
    primary: "bg-gradient-to-r from-amber-600 to-amber-500 text-zinc-950 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.8),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:shadow-[0_15px_30px_-6px_rgba(245,158,11,0.9),inset_0_2px_4px_rgba(255,255,255,0.8)] border-none hover:-translate-y-1",
    secondary: "bg-zinc-900 text-zinc-200 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.05),inset_0_-2px_4px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_-6px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.1)] hover:text-amber-400 border border-white/5 hover:border-amber-500/50 hover:-translate-y-1",
    outline: "bg-transparent hover:bg-amber-500/10 text-amber-400 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] border border-amber-500/30"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <div className="absolute inset-0 bg-white/0 group-active:bg-white/20 transition-colors duration-75 z-0 pointer-events-none rounded-[1.5rem]"></div>
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </button>
  );
};
