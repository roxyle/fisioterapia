import { Contacts, ParagrContent, TextContent, ElencoTerapie, Terapie, DettaglioServizi, Staff, ImgEspProf } from "../types";

export const ourContact: Contacts=
    {
        id: '1ufficio',
        company: 'Fisioterapia Bruno',
        telephone: '+39 347 3288921',
        address: 'Via Caduti sul Lavoro,  38 - 81100 Caserta (CE)',
        email: 'brunonero74@gmail.com',
    }



export const cardIntroTxt: TextContent[] = [
    {
        id: 'testo1',
        alt: "icona laurea",
        immagine: '/certified1.svg',
        text: "Laureato in Scienze Motorie e Fisioterapia presso il Policlinico di Napoli, l'esperto specialista dello studio Fisioterapia Bruno è disposizione di ogni paziente con trattamenti su misura.",
        bottone: 'Contattaci ►',
        goToPage: '/Contatti',
    },
    {
        id: 'testo2',
        alt: 'icona servizi',
        immagine: '/servizi.svg',
        text: "Dalla riabilitazione ai traumi sportivi, lo Studio di Fisioterapia Bruno è certo di fornire la massima assistenza ai suoi pazienti che cercano di alleviare il dolore e le difficoltà di movimento.",
        bottone: 'Esplora i Servizi ►',
        goToPage: '/Servizi'

    },
    {
        id: 'testo3',
        alt: 'icona team',
        immagine: '/equipe.svg',
        text: 'Guidato da Beniamino Bruno, lo studio comprende anche i veterani della fisioterapia Carandente Giovanni e Fabio Viscardi, oltre alla preparatissima fisioterapista Tonia Piccolo. ',
        bottone: 'Scopri il Team ►',
        goToPage: '/About'

    },
    {
        id: 'testo4',
        alt: "icona equip",
        immagine: '/equipe.svg',
        text: "Con quattro fisioterapisti altamente qualificati ed esperti, lo Studio di Fisioterapia Caserta (CE) Bruno è una destinazione imbattibile per chi ha bisogno di cure terapeutiche.",
        bottone: 'Contattaci ►',
        goToPage: '/Contatti'
    },
]

export const cardCTATxt: TextContent[] = [
    {
        id: 'testo1',
        alt: "chiamaci",
        immagine: '/chiamaci.svg',
        text: "Il tuo medico ti ha prescritto un piano terapia? Contattaci per fissare un consulto e scoprire i trattamenti più adatti a te!",
        bottone: 'Chiama subito! ►',
        goToPage: '/Contatti',
    },
    {
        id: 'testo2',
        alt: 'vai al form di contatto',
        immagine: '/scrivici.svg',
        text: "Non puoi chiamarci in questo momento? Nessun problema, compila il modulo di contatto e ti ricontattiamo noi appena possibile!",
        bottone: 'Scrivici! ►',
        goToPage: '/Contatti'

    },
    {
        id: 'testo3',
        alt: 'vai alla mappa',
        immagine: '/trovaci.svg',
        text: 'Vuoi sapere dove si trova il nostro Studio e come arrivarci? Consulta la mappa e vieni a trovarci, saremo lieti di accoglierti!',
        bottone: 'Vieni a trovarci! ►',
        goToPage: '/Contatti'

    },
    {
        id: 'testo4',
        alt: "vai alle faq",
        immagine: '/domande.svg',
        text: "Se hai ancora qualche dubbio consulta la nostra sezione F.A.Q per trovare risposte alle domande più frequenti sui nostri servizi e trattamenti!",
        bottone: 'Leggi le F.A.Q ►',
        goToPage: '/Contatti'
    },
]

export const Paragrafi: ParagrContent[] = [
    {
        id: "/",
        titolo: "A Caserta, fisioterapista esperto in riabilitazione sportiva",
        testo: "A dirigere con successo lo studio Fisioterapia Bruno a Caserta, il fisioterapista Beniamino Bruno, che insieme ai suoi qualificati collaboratori è in grado di fornire un servizio completo e professionale a chi necessita di risolvere patologie acute e croniche anche molto dolorose. Il fisioterapista è un esperto di osteopatia, riabilitazione da patologie ortopediche e riabilitazione sportiva e parallelamente alla professione svolta presso il centro è medico ufficiale della Casertana Calcio e della Volalto 2.0 Caserta. Inoltre lavora per la squadra di pallavolo di serie A1."
    },
    {
        id: "/Servizi",
        titolo: "Un moderno e attrezzato ambulatorio di fisioterapia a Caserta",
        testo: "L'obiettivo del centro Fisioterapia Bruno a Caserta è, sin dalla sua apertura, il benessere dei suoi pazienti: al centro del suo operato vi è infatti la piena soddisfazione del cliente, che può sentirsi a suo completo agio sapendo di poter contare su un sostegno solido e sempre presente per la cura delle patologie ossee, muscolari e articolari, oltre che per la riabilitazione sportiva e da patologie ortopediche. Lo studio è specializzato in fisioterapia e osteopatia e aiuta migliaia di pazienti con trattamenti personalizzati: ascolto, disponibilità e sensibilità caratterizzano lo staff dell'ambulatorio di fisioterapia, pronto a formulare percorsi ad personam per aiutare ogni paziente nel recupero della salute e della forma fisica secondo le sue più specifiche necessità."
    },
    {
        id: "/About",
        titolo: "Trattamenti personalizzati di fisioterapia a Caserta",
        testo: "Lo studio Fisioterapia Bruno a Caserta è un punto di riferimento per tutti coloro che desiderano affidarsi a veri esperti nella riabilitazione sportiva e nella rieducazione posturale. Presso il centro è possibile rivolgersi a fisioterapisti dalla lunga esperienza, attenti alle necessità dei pazienti e disponibili nel trovare il percorso fisioterapico più idoneo alle loro necessità, con terapie manuali e strumentali come la terapia a onde d'urto, la ionoforesi, l'elettroterapia e la magnetoterapia, anche a domicilio. Per richiedere una visita presso lo studio chiamate il nostro recapito telefonico."
    },
    {
        id: "/Contatti",
        titolo: "Fisioterapia, Osteopatia e Fisiokinesiterapia",
        testo: "Se stai cercando un fisioterapista a Caserta, non esitare a contattare lo studio Fisioterapia Bruno. Situato nel cuore della città, lo studio è facilmente raggiungibile e pronto ad accoglierti con trattamenti fisioterapici personalizzati. Che tu abbia bisogno di riabilitazione sportiva, fisioterapia ortopedica o trattamenti osteopatici, il nostro team di esperti è a tua disposizione per aiutarti a recuperare il benessere fisico e migliorare la qualità della tua vita. Compila il modulo per richiedere un incontro con l'osteopata esperto e valutare i percorsi di riabilitazione sportiva. Prenota una visita oggi stesso e scopri come possiamo aiutarti a ritrovare la forma fisica ideale."
    }
]


export const TerapieStrumentali: Terapie[] = [
    {
        id: "ts1",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Onde d'urto",
        },
    {
        id: "ts2",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Tecarterapia",
        },
    {
        id: "ts3",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Laserterapia",
        },
    {
        id: "ts4",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Magnetoterapia",
        },
    {
        id: "ts5",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Elettroterapia",
        },
    {
        id: "ts6",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "TENS",
        },
    {
        id: "ts7",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Quadrangolari",
       },
    {
        id: "ts8",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Esponenziali",
       },
    {
        id: "ts8",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Ionoforesi",
       },
    {
        id: "ts9",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Faratiche",
       },
    {
        id: "ts10",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Ultrasuoni",
        },
]

export const TerapieManuali: Terapie[] = [
    {
        id: "tm1",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Linfodrenanti",
    },
    {
        id: "tm2",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Rilassanti",
    },
    {
        id: "tm3",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Decontratturanti",
    },
    {
        id: "tm4",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Rieducazione Posturale Globale",
    },
    {
        id: "tm5",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Metodo Kabat",
    },
    {
        id: "tm6",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massoterapia",
    },
    {
        id: "tm7",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Riabilitazione e Gestione del Dolore",
    },

    ]

    export const ServiziOfferti: ElencoTerapie[] = [
        {
            id: "ts",
            tipologia: "Terapie Strumentali",
            immagine: "/Fisio32.jpg",
            elenco: TerapieStrumentali,
            descrizione: "Con l'impiego di strumenti e apparecchiature di ultima generazione, il personale del centro Fisioterapia Bruno a Caserta è in grado di eseguire terapie strumentali come tecarterapia, laserterapia e magnetoterapia, anche a domicilio."
        },
        {
            id: "tm",
            tipologia: "Terapie Manuali",
            immagine: "/Fisio1921.jpg",
            elenco: TerapieManuali,
            descrizione: "L'esperto staff dello studio Fisioterapia Bruno a Caserta esegue terapie manuali per la rieducazione posturale sia nei bambini che negli adulti. Inoltre si eseguono massaggi linfodrenanti, rilassanti e decontratturanti."
        }
    ]

    export const DescServizi: DettaglioServizi[] = [
        {
            id: "p1",
            titolo: "Massaggi e Rieducazione Posturale Globale",
            testo: "Presso lo studio di fisiokinesiterapia e fisioterapia Bruno troverai un personale altamente qualificato e preparato, composto da medici, ortopedici, fisioterapisti e osteopati dalla lunga esperienza. L'équipe del centro di Caserta è in grado di rispondere con precisione e puntualità a ogni genere di necessità dei pazienti, fornendo soluzioni nel campo della gestione del dolore e sedute di terapia fisica finalizzate alla risoluzione di patologie che colpiscono ossa, muscoli e articolazioni. Per tali disturbi e per la rieducazione posturale, inoltre, lo studio coinvolge il metodo introdotto negli anni '80 dal Prof. Philippe E. Souchard, ovvero la Rieducazione Posturale Globale, terapia manuale che considera l'essere umano nella sua globalità e che, lavorando su postura, muscoli e mobilità articolare, elimina o riduce le disfunzioni che sono alla base della patologia. ",
            immagine: "/Fisiok2.jpg"
        },
        {
            id: "p2",
            titolo: "Terapie con tecnologie all'avanguardia",
            testo: "Il centro Fisioterapia Bruno a Caserta è attrezzato con le più innovative tecnologie e sempre aggiornato sulle novità tecniche, scientifiche e tecnologiche del settore, per seguire ogni paziente con trattamenti ortopedici e fisioterapici di ultima generazione. Grazie alla costante formazione e all'aggiornamento alle ultime novità del settore, lo staff dello studio è oggi specializzato in fisiokinesiterapia, fisioterapia, tecarterapia, laserterapia, osteopatia, massoterapia ed elettroterapia antalgica. Inoltre si effettuano sedute di riatletizzazione, terapia propriocettiva, ginnastica posturale, elettrostimolazione muscolare e tante, diverse tecniche di terapia strumentale.",
            immagine: "/shockwave6.png"
        },
        {
            id: "p3",
            titolo: "Riabilitazione e gestione del dolore",
            testo: "I professionisti dell'ambulatorio di fisioterapia di Caserta pongono molta attenzione nell'ascolto del paziente, che sa di potersi affidare a un team multidisciplinare e di poter godere di un ambiente rilassato e professionale sin dal primo colloquio. In base alle sue esigenze, i fisioterapisti e osteopati della Fisioterapia Bruno saranno in grado di proporre terapie su misura, trattando con successo ogni tipo di condizione e lesione con interventi ad hoc di riabilitazione sportiva, rieducazione posturale e gestione del dolore.",
            immagine: "/Fisiok4.png"
        },
        {
            id: "p4",
            titolo: "Sedute di terapia fisica e riabilitazione",
            testo: "La presenza di tecnologie all'avanguardia e di personale qualificato rende l'ambulatorio di fisioterapia di Caserta una realtà innovativa, ma al contempo esperta, in grado di soddisfare ogni genere di esigenza nel campo della riabilitazione. In sede si eseguono infatti terapie sia manuali che strumentali, sedute di terapia fisica e riabilitazione per patologie ortopediche, reumatiche, neurologiche e post-traumatiche, ma anche trattamenti per la cura delle patologie acute e croniche di ossa, muscoli e articolazioni.",
            immagine: "/Fisiok.jpg"
        },
        {
            id: "p5",
            titolo: "Sedute di laserterapia a domicilio",
            testo: "Dotato dei più moderni macchinari per la fisioterapia e di uno staff altamente qualificato, lo studio Fisioterapia Bruno a Caserta è in grado di offrire alla sua clientela prestazioni altamente efficaci per la cura delle tendinopatie e delle patologie che colpiscono ossa, muscoli e articolazioni. Il fisioterapista Bruno con la sua valida équipe di osteopati e fisioterapisti assiste il paziente con trattamenti personalizzati e terapie sia manuali che strumentali, come la ionoforesi, la tecarterapia, l'elettroterapia antalgica e la laserterapia. Inoltre, l'esperto specialista è a disposizione, a Caserta, con sedute di fisioterapia a domicilio, soddisfacendo tutte le necessità di chi non può muoversi.",
            immagine: "/Fisio32.jpg"
        },
        {
            id: "p6",
            titolo: "Rieducazione Posturale e Massoterapia",
            testo: "Tra le terapie proposte presso il centro Fisioterapia Bruno a Caserta, è possibile richiedere il metodo Mézières, chiamato anche Rieducazione Posturale: tramite l'accorciamento e la retrazione delle catene muscolari, con il metodo Mézières è possibile risolvere disfmorfismi come la scoliosi, l'iperlordosi e la cifosi agendo tramite l'allentamento delle tensioni muscolari. Altre terapie manuali eseguite presso lo studio sono la Rieducazione Posturale Globale, volta all'eliminazione delle disfunzioni che sono alla base della patologia, il metodo Kabata, la massoterapia e i massaggi, come quello linfodrenante, quello decontratturante e quello rilassante.",
            immagine: "/Fisiok5.png"
        },
    ]

    export const OurStaff: Staff[] = [
        {
            id: "Beniamino",
            nome: "Beniamino Bruno",
            foto: "/Bruno.jpeg"
        },
        {
            id: "Tonia",
            nome: "Tonia Piccolo",
            foto: "/Piccolo.jpeg"
        },
        {
            id: "Giovanni",
            nome: "Giovanni Carandente",
            foto: "/Carandente.jpeg"
        },
        {
            id: "Fabio",
            nome: "Fabio Viscardi",
            foto: "/Viscardi.jpeg"
        },
    ]

    export const EspProf: ImgEspProf[] = [
    {
    id: 0,
    image: '/slider/goldenTulip.jpeg',
    testo: 'Golden Tulip'
    },
    {
        id: 1,
        image: '/slider/posturale.jpeg',
        testo: 'Posturale'
    },
    {
        id: 2,
        image: '/slider/riabilitazione.jpeg',
        testo: 'Riabilitazione'
    },
    {
        id: 3,
        image: '/slider/bordoCampo.jpeg',
        testo: 'A Bordo Campo'
    },
    {
        id: 4,
        image: '/slider/studio.jpeg',
        testo: 'in Studio'
    },
    {
        id: 5,
        image: '/slider/studio2.jpeg',
        testo: 'in Studio'
    },
    {
        id: 6,
        image: '/slider/casertanaFc.jpeg',
        testo: 'Casertana FC'
    },
    {
        id: 7,
        image: '/slider/volley.jpeg',
        testo: 'Volley Tournament'
    },
    {
        id: 8,
        image: '/slider/pallavolo.jpeg',
        testo: 'Volley Tournament'
    },
    {
        id: 9,
        image: '/slider/legaVolley.jpeg',
        testo: 'Pallavolo'
    },
    
    ]