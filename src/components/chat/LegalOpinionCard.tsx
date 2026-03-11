import { Scale } from "lucide-react";

interface LegalOpinionCardProps {
  text: string;
}

const LegalOpinionCard = ({ text }: LegalOpinionCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-opinion-card p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Scale className="h-3.5 w-3.5" />
        Pravno mnenje
      </div>
      <p className="text-sm leading-relaxed text-opinion-card-foreground">
        {text}
      </p>
    </div>
  );
};

export default LegalOpinionCard;
