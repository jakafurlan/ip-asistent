import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { MOCK_CLEN_RESPONSES } from "@/data/mockData";

interface ClenExplanationModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
}

const ClenExplanationModal = ({ open, onClose, name }: ClenExplanationModalProps) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setError(null);
    setExplanation(null);

    // Check mock data first
    const mockText = MOCK_CLEN_RESPONSES[name];
    if (mockText) {
      setTimeout(() => {
        setExplanation(mockText);
        setLoading(false);
      }, 500);
      return;
    }

    fetch(`/api/clen?name=${encodeURIComponent(name)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Napaka pri pridobivanju podatkov");
        const text = await res.text();
        setExplanation(text);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [open, name]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">{name}</DialogTitle>
        </DialogHeader>
        <div className="text-sm leading-relaxed text-foreground">
          {loading && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Nalagam...
            </div>
          )}
          {error && <p className="text-destructive">{error}</p>}
          {explanation && <p className="whitespace-pre-wrap">{explanation}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClenExplanationModal;
