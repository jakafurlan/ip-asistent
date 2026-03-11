import { AssistantResponseData } from "@/types/chat";

export const MOCK_RESPONSE: AssistantResponseData = {
  generalno_mnenje_o_zadevi:
    "Na podlagi analize vaše poizvedbe ugotavljamo, da obdelava osebnih podatkov zaposlenih za namen nadzora delovnega časa mora imeti ustrezno pravno podlago. Delodajalec lahko obdeluje osebne podatke zaposlenih na podlagi zakona (ZVOP-2, ZDR-1) ali na podlagi legitimnega interesa, vendar mora pri tem upoštevati načelo sorazmernosti in načelo omejitve namena obdelave. Priporočamo, da se pred uvedbo sistema za nadzor delovnega časa izvede ocena učinka na varstvo osebnih podatkov (DPIA).",
  table: [
    {
      naslov: "Nadzor delovnega časa zaposlenih",
      številka: "0712-1/2023/458",
      url: "https://www.ip-rs.si/mnenja-gdpr/0712-1-2023-458",
      kategorije: ["Delovno pravo", "Nadzor zaposlenih", "DPIA"],
      datum: "15.11.2023",
      pravna_podlaga: ["6. člena Splošne uredbe", "13. člena Splošne uredbe", "9. člena ZVOP-2"],
      povzetek: {
        dejansko_stanje: "Delodajalec je uvedel biometrični sistem za evidentiranje delovnega časa zaposlenih brez predhodne izvedbe ocene učinka na varstvo osebnih podatkov.",
        pravno_vprašanje: "Obdelava biometričnih podatkov zahteva ustrezno pravno podlago po 6. členu GDPR ter izvedbo DPIA v skladu s 35. členom GDPR.",
        odgovor: "IP je odredil ustavitev obdelave biometričnih podatkov in naložil izvedbo ocene učinka pred morebitno ponovno uvedbo sistema.",
      },
    },
    {
      naslov: "Videonadzor na delovnem mestu",
      številka: "0712-1/2022/312",
      url: "https://www.ip-rs.si/mnenja-gdpr/0712-1-2022-312",
      kategorije: ["Videonadzor", "Delovno pravo"],
      datum: "20.06.2022",
      pravna_podlaga: ["6. člena Splošne uredbe", "76. člena ZVOP-2"],
      povzetek: {
        dejansko_stanje: "Delodajalec je izvajal stalni videonadzor v pisarniških prostorih brez ustrezne obrazložitve upravičenega interesa.",
        pravno_vprašanje: "Videonadzor na delovnem mestu je dopusten le ob izpolnjevanju pogojev iz 76. člena ZVOP-2 in ob ustrezni pravni podlagi po 6. členu GDPR.",
        odgovor: "IP je ugotovil kršitev in odredil odstranitev kamer iz pisarniških prostorov.",
      },
    },
    {
      naslov: "Posredovanje podatkov o bolniški odsotnosti",
      številka: "0712-1/2024/89",
      url: "https://www.ip-rs.si/mnenja-gdpr/0712-1-2024-89",
      kategorije: ["Zdravstveni podatki", "Delovno pravo", "Posebne kategorije"],
      datum: "10.01.2024",
      pravna_podlaga: ["9. člena Splošne uredbe", "6. člena Splošne uredbe", "25. člena ZVOP-2"],
      povzetek: {
        dejansko_stanje: "Delodajalec je od zaposlenega zahteval razkritje diagnoze bolniškega staleža kot pogoj za odobritev odsotnosti.",
        pravno_vprašanje: "Podatki o zdravstvenem stanju spadajo med posebne kategorije osebnih podatkov po 9. členu GDPR, njihova obdelava je praviloma prepovedana.",
        odgovor: "IP je ugotovil kršitev in delodajalcu naložil prenehanje zahtevanja diagnoz ter uskladitev postopkov z zakonodajo.",
      },
    },
    {
      naslov: "Hramba podatkov po prenehanju pogodbe",
      številka: "0712-1/2021/201",
      url: "https://www.ip-rs.si/mnenja-gdpr/0712-1-2021-201",
      kategorije: ["Hramba podatkov", "Pogodbena obdelava"],
      datum: "22.03.2021",
      pravna_podlaga: ["6. člena Splošne uredbe", "17. člena Splošne uredbe"],
      povzetek: {
        dejansko_stanje: "Podjetje je hranilo osebne podatke strank več let po prenehanju pogodbene obveznosti brez ustrezne pravne podlage.",
        pravno_vprašanje: "Po prenehanju namena obdelave je treba osebne podatke izbrisati ali anonimizirati v skladu s 17. členom GDPR.",
        odgovor: "IP je odredil izbris osebnih podatkov strank, za katere ni več podlage za hrambo.",
      },
    },
    {
      naslov: "Uporaba piškotkov brez privolitve",
      številka: "0712-1/2024/312",
      url: "https://www.ip-rs.si/mnenja-gdpr/0712-1-2024-312",
      kategorije: ["Piškotki", "Privolitev", "ePrivacy"],
      datum: "05.06.2024",
      pravna_podlaga: ["6. člena Splošne uredbe", "7. člena Splošne uredbe", "9. člena ZVOP-2"],
      povzetek: {
        dejansko_stanje: "Spletna stran je nalagala sledilne piškotke pred pridobitvijo privolitve uporabnikov.",
        pravno_vprašanje: "Nalaganje nebistvenih piškotkov zahteva predhodno, informirano in prostovoljno privolitev uporabnika.",
        odgovor: "IP je ugotovil kršitev in odredil uvedbo ustreznega mehanizma za pridobivanje privolitev.",
      },
    },
  ],
};

export const MOCK_EMPTY_RESPONSE: AssistantResponseData = {
  generalno_mnenje_o_zadevi:
    "Opravičujemo se, vendar na podlagi vašega vprašanja ne moremo podati ustreznega pravnega mnenja. Vprašanje ne sodi v področje varstva osebnih podatkov, GDPR, ZVOP-2 ali upravnih postopkov, ki jih obravnava Informacijski pooblaščenec. Prosimo, da zastavite vprašanje, ki se nanaša na ta področja.",
  table: [],
};

export const MOCK_CLEN_RESPONSES: Record<string, string> = {
  "GDPR-6":
    "Člen 6 Splošne uredbe o varstvu podatkov (GDPR) – Zakonitost obdelave\n\nObdelava je zakonita le, če je izpolnjen vsaj eden od naslednjih pogojev:\n(a) posameznik je dal privolitev za obdelavo;\n(b) obdelava je potrebna za izvajanje pogodbe;\n(c) obdelava je potrebna za izpolnitev zakonske obveznosti;\n(d) obdelava je potrebna za zaščito življenjskih interesov;\n(e) obdelava je potrebna za opravljanje naloge v javnem interesu;\n(f) obdelava je potrebna zaradi zakonitih interesov upravljavca.",
  "GDPR-9":
    "Člen 9 GDPR – Obdelava posebnih vrst osebnih podatkov\n\nPrepovedana je obdelava osebnih podatkov, ki razkrivajo rasno ali etnično poreklo, politično mnenje, versko ali filozofsko prepričanje, članstvo v sindikatu, genetske in biometrične podatke ter podatke o zdravju ali spolnem življenju. Izjeme so predvidene v odstavku 2.",
  "GDPR-13":
    "Člen 13 GDPR – Informacije, ki se zagotovijo, kadar se osebni podatki pridobijo od posameznika\n\nUpravljavec mora posamezniku ob pridobitvi podatkov zagotoviti: identiteto upravljavca, namene obdelave, pravno podlago, prejemnike podatkov, rok hrambe in informacije o pravicah posameznika.",
  "ZVOP-2-9":
    "Člen 9 ZVOP-2 – Pravna podlaga za obdelavo osebnih podatkov\n\nOsebni podatki se lahko obdelujejo, če obdelavo osebnih podatkov in osebne podatke, ki se obdelujejo, določa zakon ali če je za obdelavo podana osebna privolitev posameznika.",
  "ZVOP-2-25":
    "Člen 25 ZVOP-2 – Obdelava posebnih vrst osebnih podatkov\n\nPosebne vrste osebnih podatkov se smejo obdelati le, če so za to izpolnjeni pogoji iz 9. člena GDPR in če je obdelava nujno potrebna ter sorazmerna za dosego namena obdelave.",
  "ZVOP-2-76":
    "Člen 76 ZVOP-2 – Videonadzor\n\nIzvajanje videonadzora je dopustno le, kadar je to nujno za varnost ljudi ali premoženja, za nadzor vstopa ali izstopa v ali iz službenih prostorov ali če gre za druge zakonsko določene primere. O izvajanju videonadzora mora biti posameznik predhodno obveščen.",
};
