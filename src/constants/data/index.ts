import { Contacts, ParagrContent, TextContent, Servizi, Terapie } from "../types";

export const ourContact: Contacts[] = [
    {
        id: '1ufficio',
        company: 'Fisioterapia Bruno',
        telephone: '+39 347 3288921',
        address: 'Via Caduti sul Lavoro,  38 - 81100 Caserta (CE)',
        email: 'brunonero74@gmail.com',
    }

]

export const cardIntroTxt: TextContent[] = [
    {
        id: 'testo1',
        alt: "icona laurea",
        immagine: '/certified1.svg',
        text: "Laureato in Scienze Motorie e Fisioterapia presso il Policlinico di Napoli, l'esperto specialista dello studio Fisioterapia Bruno è disposizione di ogni paziente con trattamenti su misura.",
        bottone: 'Contattaci > ',
        goToPage: '/Contatti',
    },
    {
        id: 'testo2',
        alt: 'icona servizi',
        immagine: '/servizi.svg',
        text: "Dalla riabilitazione ai traumi sportivi, lo Studio di Fisioterapia Bruno è certo di fornire la massima assistenza ai suoi pazienti che cercano di alleviare il dolore e le difficoltà di movimento.",
        bottone: 'Esplora i Servizi > ',
        goToPage: '/Servizi'
        
    },
    {
        id: 'testo3',
        alt: 'icona team',
        immagine: '/equipe.svg',
        text: 'Guidato da Beniamino Bruno, lo studio comprende anche i veterani della fisioterapia Carandente Giovanni e Fabio Viscardi, oltre alla preparatissima fisioterapista Tonia Piccolo. ',
        bottone: 'Scopri il Team >',
        goToPage: '/About'

    },
    {
        id: 'testo4',
        alt: "icona equip",
        immagine: '/equipe.svg',
        text: "Con quattro fisioterapisti altamente qualificati ed esperti, lo Studio di Fisioterapia Caserta (CE) Bruno è una destinazione imbattibile per chi ha bisogno di cure terapeutiche.",
        bottone: 'Contattaci >',
        goToPage: '/Contatti'
    },
]

export const Paragrafi: ParagrContent[] = [
    {
        id: "par1",
        titolo: "A Caserta, fisioterapista esperto in riabilitazione sportiva",
        testo: "A dirigere con successo lo studio Fisioterapia Bruno a Caserta, il fisioterapista Beniamino Bruno, che insieme ai suoi qualificati collaboratori è in grado di fornire un servizio completo e professionale a chi necessita di risolvere patologie acute e croniche anche molto dolorose. Il fisioterapista è un esperto di osteopatia, riabilitazione da patologie ortopediche e riabilitazione sportiva e parallelamente alla professione svolta presso il centro è medico ufficiale della Casertana Calcio e della Volalto 2.0 Caserta. Inoltre lavora per la squadra di pallavolo di serie A1."
    },
    {
        id: "par2",
        titolo: "Un moderno e attrezzato ambulatorio di fisioterapia a Caserta",
        testo: "L'obiettivo del centro Fisioterapia Bruno a Caserta è, sin dalla sua apertura, il benessere dei suoi pazienti: al centro del suo operato vi è infatti la piena soddisfazione del cliente, che può sentirsi a suo completo agio sapendo di poter contare su un sostegno solido e sempre presente per la cura delle patologie ossee, muscolari e articolari, oltre che per la riabilitazione sportiva e da patologie ortopediche. Lo studio è specializzato in fisioterapia e osteopatia e aiuta migliaia di pazienti con trattamenti personalizzati: ascolto, disponibilità e sensibilità caratterizzano lo staff dell'ambulatorio di fisioterapia, pronto a formulare percorsi ad personam per aiutare ogni paziente nel recupero della salute e della forma fisica secondo le sue più specifiche necessità."
    },
    {
        id: "par3",
        titolo: "Trattamenti personalizzati di fisioterapia a Caserta",
        testo: "Lo studio Fisioterapia Bruno a Caserta è un punto di riferimento per tutti coloro che desiderano affidarsi a veri esperti nella riabilitazione sportiva e nella rieducazione posturale. Presso il centro è possibile rivolgersi a fisioterapisti dalla lunga esperienza, attenti alle necessità dei pazienti e disponibili nel trovare il percorso fisioterapico più idoneo alle loro necessità, con terapie manuali e strumentali come la terapia a onde d'urto, la ionoforesi, l'elettroterapia e la magnetoterapia, anche a domicilio. Per richiedere una visita presso lo studio chiamate il nostro recapito telefonico."
    }
]


export const TerapieStrumentali: Terapie[] = [
    {
        id: "ts1",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Onde d'urto",
        descrizione: ""},
    {
        id: "ts2",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Tecarterapia",
        descrizione: ""},
    {
        id: "ts3",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Laserterapia",
        descrizione: ""},
    {
        id: "ts4",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Magnetoterapia",
        descrizione: ""},
    {
        id: "ts5",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Elettroterapia",
        descrizione: ""},
    {
        id: "ts6",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "TENS",
        descrizione: ""},
    {
        id: "ts7",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Quadrangolari",
        descrizione: ""},
    {
        id: "ts8",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Esponenziali",
        descrizione: ""},
    {
        id: "ts8",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Ionoforesi",
        descrizione: ""},
    {
        id: "ts9",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Faratiche",
        descrizione: ""},
    {
        id: "ts10",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Ultrasuoni",
        descrizione: ""},
]

export const TerapieManuali: Terapie[] = [
    {
        id: "tm1",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Linfodrenanti",
        descrizione: ""},
    {
        id: "tm2",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Rilassanti",
        descrizione: ""},
    {
        id: "tm3",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Decontratturanti",
        descrizione: ""},
    {
        id: "tm4",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Rieducazione Posturale Globale",
        descrizione: ""},
    {
        id: "tm5",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Metodo Kabat",
        descrizione: "conosciuto anche come F.N.P. (Facilitazioni Neuroconetiche Progressive"},
    {
        id: "tm6",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massoterapia",
        descrizione: ""},
    {
        id: "tm7",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Riabilitazione e Gestione del Dolore",
        descrizione: ""},    

    ]

    export const ServiziOfferti: Servizi[] = [
        {
            id: "ts",
            tipologia: "Terapie Strumentali",
            immagine: "/Fisio32.jpg",
            elenco: TerapieStrumentali
        },
        {
            id: "tm",
            tipologia: "Terapie Manuali",
            immagine: "/Fisio1921.jpg",
            elenco: TerapieManuali
        }
    ]