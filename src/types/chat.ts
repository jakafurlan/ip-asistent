export interface PravnaPodlaga {
  cleni: string[];
  link: string;
}

export interface Povzetek {
  dejansko_stanje: string;
  pravno_stanje: string;
  odgovor: string;
}

export interface LegalDecision {
  naslov: string;
  stevilka: string;
  url: string;
  kategorije: string[];
  datum: string;
  pravna_podlaga: PravnaPodlaga[];
  povzetek: Povzetek;
}

export interface AssistantResponseData {
  generalno_menje_o_zadevi: string;
  table: LegalDecision[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content?: string;
  data?: AssistantResponseData;
  isLoading?: boolean;
}
