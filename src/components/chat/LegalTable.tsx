import { LegalDecision } from "@/types/chat";
import { format, parseISO } from "date-fns";
import { sl } from "date-fns/locale";
import ClenBadge from "./ClenBadge";

interface LegalTableProps {
  decisions: LegalDecision[];
}

const LegalTable = ({ decisions }: LegalTableProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full text-sm table-fixed">
        <colgroup>
          <col className="w-[12%]" />
          <col className="w-[10%]" />
          <col className="w-[10%]" />
          <col className="w-[8%]" />
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
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors align-top">
              <td className="px-3 py-3 font-medium">{d.naslov}</td>
              <td className="px-3 py-3 text-muted-foreground text-xs">{d.stevilka}</td>
              <td className="px-3 py-3">
                <div className="flex flex-wrap gap-1">
                  {d.kategorije.map((k, j) => (
                    <span key={j} className="inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {k}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-3 py-3 text-muted-foreground whitespace-nowrap text-xs">
                {(() => {
                  try {
                    return format(parseISO(d.datum), "d. MMM yyyy", { locale: sl });
                  } catch {
                    return d.datum;
                  }
                })()}
              </td>
              <td className="px-3 py-3">
                <div className="flex flex-wrap gap-1">
                  {d.pravna_podlaga.flatMap((p) =>
                    p.cleni.map((c, ci) => <ClenBadge key={ci} name={c} />)
                  )}
                </div>
              </td>
              <td className="px-3 py-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Dejansko stanje: </span>
                    {d.povzetek.dejansko_stanje}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Pravno vprašanje: </span>
                    {d.povzetek.pravno_stanje}
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
