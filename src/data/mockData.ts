import { AssistantResponseData } from "@/types/chat";

export const MOCK_RESPONSE: AssistantResponseData = {
  generalno_menje_o_zadevi:
    "Na podlagi analize vaše poizvedbe ugotavljamo, da obdelava osebnih podatkov zaposlenih za namen nadzora delovnega časa mora imeti ustrezno pravno podlago. Delodajalec lahko obdeluje osebne podatke zaposlenih na podlagi zakona (ZVOP-2, ZDR-1) ali na podlagi legitimnega interesa, vendar mora pri tem upoštevati načelo sorazmernosti in načelo omejitve namena obdelave. Priporočamo, da se pred uvedbo sistema za nadzor delovnega časa izvede ocena učinka na varstvo osebnih podatkov (DPIA).",
  table: [
    {
      naslov: "Nadzor delovnega časa zaposlenih",
      stevilka: "0712-1/2023/458",
      kategorije: ["Delovno pravo", "Nadzor zaposlenih", "DPIA"],
      datum: "2023-11-15",
      pravna_podlaga: [
        {
          cleni: ["GDPR-6", "GDPR-13"],
          link: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
        },
        {
          cleni: ["ZVOP-2-9"],
          link: "http://www.pisrs.si/Pis.web/pregledPredpisa?id=ZAKO8164",
        },
      ],
      povzetek: {
        dejansko_stanje: "Delodajalec je uvedel biometrični sistem za evidentiranje delovnega časa zaposlenih brez predhodne izvedbe ocene učinka na varstvo osebnih podatkov.",
        pravno_stanje: "Obdelava biometričnih podatkov zahteva ustrezno pravno podlago po 6. členu GDPR ter izvedbo DPIA v skladu s 35. členom GDPR.",
        odgovor: "IP je odredil ustavitev obdelave biometričnih podatkov in naložil izvedbo ocene učinka pred morebitno ponovno uvedbo sistema.",
      },
    },
    {
      naslov: "Videonadzor na delovnem mestu",
      stevilka: "0712-1/2022/312",
      kategorije: ["Videonadzor", "Delovno pravo"],
      datum: "2022-06-20",
      pravna_podlaga: [
        {
          cleni: ["GDPR-6", "ZVOP-2-76"],
          link: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
        },
      ],
      povzetek: {
        dejansko_stanje: "Delodajalec je izvajal stalni videonadzor v pisarniških prostorih brez ustrezne obrazložitve upravičenega interesa.",
        pravno_stanje: "Videonadzor na delovnem mestu je dopusten le ob izpolnjevanju pogojev iz 76. člena ZVOP-2 in ob ustrezni pravni podlagi po 6. členu GDPR.",
        odgovor: "IP je ugotovil kršitev in odredil odstranitev kamer iz pisarniških prostorov.",
      },
    },
    {
      naslov: "Posredovanje podatkov o bolniški odsotnosti",
      stevilka: "0712-1/2024/89",
      kategorije: ["Zdravstveni podatki", "Delovno pravo", "Posebne kategorije"],
      datum: "2024-01-10",
      pravna_podlaga: [
        {
          cleni: ["GDPR-9", "GDPR-6"],
          link: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
        },
        {
          cleni: ["ZVOP-2-25"],
          link: "http://www.pisrs.si/Pis.web/pregledPredpisa?id=ZAKO8164",
        },
      ],
      povzetek:
        "Delodajalec je neupravičeno zahteval diagnozo bolniškega staleža od zaposlenega. IP je ugotovil kršitev obdelave posebnih kategorij osebnih podatkov.",
    },
  ],
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
