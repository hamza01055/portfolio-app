export const TechMarquee = () => {
  const techList = ["PyTorch", "TensorFlow", "Django", "PostgreSQL", "Docker", "OpenCV", "HuggingFace", "LangChain", "YOLOv8", "FastAPI", "Scikit-learn", "Python"];
  
  return (
    <div className="w-full overflow-hidden bg-zinc-950/90 backdrop-blur-md py-8 border-y border-white/5 relative flex items-center mt-20 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5),inset_0_-10px_20px_rgba(0,0,0,0.5)]">
      {/* Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] gap-16 pr-16">
        {[...techList, ...techList].map((tech, i) => (
          <span key={i} className="text-zinc-500 font-bold text-xl uppercase tracking-widest flex items-center gap-4 transition-all duration-300 hover:text-amber-400 hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.6)] cursor-default">
            <span className="w-3 h-3 rounded-full bg-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.6)]"></span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
