import { useState } from "react";
import { LegalDecision } from "@/types/chat";
import { format, parseISO } from "date-fns";
import { sl } from "date-fns/locale";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface OpinionTimelineProps {
  decisions: LegalDecision[];
}

const OpinionTimeline = ({ decisions }: OpinionTimelineProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sorted = [...decisions].sort(
    (a, b) => new Date(a.datum).getTime() - new Date(b.datum).getTime()
  );

  const formatDate = (dateStr: string) => {
    try {
      return format(parseISO(dateStr), "d. MMM yyyy", { locale: sl });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="pt-2 pb-1">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Časovnica mnenj
      </h3>
      <div className="overflow-x-auto scrollbar-thin pb-2">
        <div className="relative flex items-start gap-0 min-w-max">
          {/* Connecting line */}
          <div className="absolute top-[18px] left-[18px] right-[18px] h-[2px] bg-border" />

          {sorted.map((decision, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div key={i} className="relative flex flex-col items-center" style={{ minWidth: 160 }}>
                {/* Dot */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className={cn(
                    "relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-200",
                    isExpanded
                      ? "border-primary bg-primary text-primary-foreground shadow-md scale-110"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:bg-primary/10"
                  )}
                >
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isExpanded && "rotate-90"
                    )}
                  />
                </button>

                {/* Date label */}
                <span className="mt-2 text-[11px] font-medium text-muted-foreground whitespace-nowrap">
                  {formatDate(decision.datum)}
                </span>

                {/* Title */}
                <span className="mt-1 max-w-[140px] text-center text-xs font-medium text-foreground leading-tight">
                  {decision.naslov}
                </span>

                {/* Expanded summary card */}
                {isExpanded && (
                  <div className="mt-3 w-64 rounded-lg border border-border bg-background p-3 shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {decision.povzetek.odgovor}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {decision.kategorije.map((k, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OpinionTimeline;
