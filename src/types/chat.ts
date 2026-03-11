export interface Povzetek {
  dejansko_stanje: string;
  pravno_vprašanje: string;
  odgovor: string;
}

export interface LegalDecision {
  naslov: string;
  številka: string;
  url: string;
  kategorije: string[];
  datum: string;
  pravna_podlaga: string[];
  povzetek: Povzetek;
}

export interface AssistantResponseData {
  generalno_mnenje_o_zadevi: string;
  table: LegalDecision[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content?: string;
  data?: AssistantResponseData;
  isLoading?: boolean;
}
