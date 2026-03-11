import { useState } from "react";
import ClenExplanationModal from "./ClenExplanationModal";

interface ClenBadgeProps {
  name: string;
}

const ClenBadge = ({ name }: ClenBadgeProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-md bg-badge-custom px-2 py-0.5 text-xs font-medium text-badge-custom-foreground transition-colors hover:opacity-80"
      >
        {name}
      </button>
      <ClenExplanationModal open={open} onClose={() => setOpen(false)} name={name} />
    </>
  );
};

export default ClenBadge;
