import { ReactNode } from "react";

const CodeWindow = ({
  filename,
  children,
  className = "",
}: {
  filename: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full rounded-2xl border border-white/10 bg-dark_grey/60 overflow-hidden shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-white/40 text-sm font-mono">{filename}</span>
      </div>
      <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default CodeWindow;
