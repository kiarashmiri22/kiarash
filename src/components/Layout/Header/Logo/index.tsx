import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-semibold">
        K
      </span>
      <span className="text-white font-medium text-lg">Kiarash Miri</span>
    </Link>
  );
};

export default Logo;
