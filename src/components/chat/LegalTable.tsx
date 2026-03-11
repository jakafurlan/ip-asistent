import { useState } from "react";
import { LegalDecision } from "@/types/chat";
import { format, parse } from "date-fns";
import { sl } from "date-fns/locale";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalTableProps {
  decisions: LegalDecision[];
}

const parseDate = (dateStr: string) => {
  try {
    // Handle "dd.MM.yyyy" format
    const parsed = parse(dateStr, "dd.MM.yyyy", new Date());
    return format(parsed, "d. MMM yyyy", { locale: sl });
  } catch {
    return dateStr;
  }
};

const PravnaPodlagaCell = ({ items }: { items: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 3);
  const hasMore = items.length > 3;

  return (
    <div className="flex flex-wrap gap-1">
      {visible.map((p, pi) => (
        <span
          key={pi}
          className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
        >
          {p}
        </span>
      ))}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-0.5 rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium text-primary hover:bg-muted transition-colors"
        >
          {expanded ? "Manj" : `+${items.length - 3}`}
          <ChevronDown className={cn("h-3 w-3 transition-transform", expanded && "rotate-180")} />
        </button>
      )}
    </div>
  );
};

const LegalTable = ({ decisions }: LegalTableProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full text-sm table-fixed">
        <colgroup>
          <col className="w-[12%]" />
          <col className="w-[10%]" />
          <col className="w-[8%]" />
          <col className="w-[10%]" />
          <col className="w-[10%]" />
          <col className="w-[50%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-3 py-3 text-left font-semibold text-foreground">Naslov</th>
            <th className="px-3 py-3 text-left font-semibold text-foreground">Številka</th>
            <th className="px-3 py-3 text-left font-semibold text-foreground">Kategorije</th>
            <th className="px-3 py-3 text-left font-semibold text-foreground">Datum</th>
            <th className="px-3 py-3 text-left font-semibold text-foreground">Pravna podlaga</th>
            <th className="px-3 py-3 text-left font-semibold text-foreground">Povzetek</th>
          </tr>
        </thead>
        <tbody>
          {decisions.map((d, i) => (
            <tr key={i} className={cn("border-b border-border last:border-0 hover:bg-muted/30 transition-colors align-top", d.contradiction && "relative")}>
              <td className="px-3 py-3 font-medium">
                <div className="flex items-start gap-2">
                  {d.contradiction && (
                    <div className="mt-0.5 w-0.5 min-w-[3px] self-stretch rounded-full bg-destructive" title="Nasprotujoče si mnenji" />
                  )}
                  <span>{d.naslov}</span>
                </div>
              </td>
              <td className="px-3 py-3 text-xs">
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                  {d.številka}
                </a>
              </td>
              <td className="px-3 py-3">
                <div className="flex flex-wrap gap-1">
                  {d.kategorije.map((k, j) => (
                    <span key={j} className="text-xs text-muted-foreground">
                      {k}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-3 py-3 text-muted-foreground whitespace-nowrap text-xs">
                {parseDate(d.datum)}
              </td>
              <td className="px-3 py-3">
                <PravnaPodlagaCell items={d.pravna_podlaga} />
              </td>
              <td className="px-3 py-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Dejansko stanje: </span>
                    {d.povzetek.dejansko_stanje}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Pravno vprašanje: </span>
                    {d.povzetek.pravno_vprašanje}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Odgovor: </span>
                    {d.povzetek.odgovor}
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LegalTable;
