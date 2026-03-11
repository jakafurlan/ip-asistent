import { AssistantResponseData } from "@/types/chat";
import LegalOpinionCard from "./LegalOpinionCard";
import LegalTable from "./LegalTable";
import OpinionTimeline from "./OpinionTimeline";
import ContradictionCard from "./ContradictionCard";

interface AssistantResponseProps {
  data: AssistantResponseData;
}

const AssistantResponse = ({ data }: AssistantResponseProps) => {
  return (
    <div className="space-y-4">
      <LegalOpinionCard text={data.generalno_mnenje_o_zadevi} />
      {data.table.length > 0 && <LegalTable decisions={data.table.slice(0, 5)} />}
      {data.table.length > 0 && <OpinionTimeline decisions={data.table.slice(0, 5)} />}
      {data.contradiction_explanation && (
        <ContradictionCard text={data.contradiction_explanation} />
      )}
    </div>
  );
};

export default AssistantResponse;
