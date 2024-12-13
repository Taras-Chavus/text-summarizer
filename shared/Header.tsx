import { cn } from "@/lib/utils";

interface HeaderProps {
  classname?: string;
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  classname,
  title,
  subtitle,
}) => {
  return (
    <header className={cn("flex-col", classname)}>
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </header>
  );
};
