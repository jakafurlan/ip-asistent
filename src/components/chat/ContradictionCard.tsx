import { AlertTriangle } from "lucide-react";

interface ContradictionCardProps {
  text: string;
}

const ContradictionCard = ({ text }: ContradictionCardProps) => {
  return (
    <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <h3 className="text-sm font-semibold text-destructive">
          Obrazložitev nasprotujočih mnenj
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
    </div>
  );
};

export default ContradictionCard;
