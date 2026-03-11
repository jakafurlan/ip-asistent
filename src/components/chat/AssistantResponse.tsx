import { AssistantResponseData } from "@/types/chat";
import LegalOpinionCard from "./LegalOpinionCard";
import LegalTable from "./LegalTable";
import OpinionTimeline from "./OpinionTimeline";
import ContradictionCard from "./ContradictionCard";
import { FileText, FileDown } from "lucide-react";
import { toast } from "sonner";

interface AssistantResponseProps {
  data: AssistantResponseData;
}

const AssistantResponse = ({ data }: AssistantResponseProps) => {
  const handleExport = (format: "word" | "pdf") => {
    toast.info(`Izvoz v ${format === "word" ? "Word" : "PDF"} bo kmalu na voljo.`);
  };

  return (
    <div className="space-y-4">
      <LegalOpinionCard text={data.generalno_mnenje_o_zadevi} />
      {data.table.length > 0 && <LegalTable decisions={data.table.slice(0, 5)} />}
      {data.table.length > 0 && <OpinionTimeline decisions={data.table.slice(0, 5)} />}
      {data.contradiction_explanation && (
        <ContradictionCard text={data.contradiction_explanation} />
      )}
      <div className="flex items-center justify-end gap-2 pt-1">
        <button
          onClick={() => handleExport("word")}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileText className="h-3.5 w-3.5" />
          Word
        </button>
        <button
          onClick={() => handleExport("pdf")}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        >
          <FileDown className="h-3.5 w-3.5" />
          PDF
        </button>
      </div>
    </div>
  );
};

export default AssistantResponse;
