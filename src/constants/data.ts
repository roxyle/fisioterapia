import type { 
    Contacts,
    ParagrafoSeo,
    TextContent,
    ElencoTerapie,
    Terapia,
    DettaglioServizi,
    StaffMember,
    NavItem,
    TrustItem,
    SliderImage,
    FaqItem,
    Partnership,
} from "./types";

export const ourContact: Contacts = {
    id: 'studio',
    company: 'Fisioterapia Bruno',
    telephone: '+39 347 3288921',
    address: 'Via Caduti sul Lavoro, 38 - 81100 Caserta (CE)',
    email: 'brunonero74@gmail.com',
    mapsHref: 'https://maps.google.com/?q=Fisioterapia+Bruno+Caserta',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6420667151237!2d14.336523675517567!3d41.076816015202645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a54359b746527%3A0x5869ac4e1af995d!2sFisioterapia%20Bruno%20Caserta!5e0!3m2!1sit!2sit!4v1734713686324!5m2!1sit!2sit',
    orari: [
        { giorni: "Lunedi' - Sabato", ore: '8:30 - 20:00', chiuso: false },
        { giorni: 'Domenica', ore: '', chiuso: true },
    ],
    partitaIva: '04432730614',
    telefonoHref: 'tel:+393473288921',
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
        text: "Guidato da Beniamino Bruno, lo studio vanta anche i veterani della fisioterapia Giovanni Carandente, Fabio Viscardi e Antonia Piccolo, oltre ai preparatissimi fisioterapisti Francesca D'Agostino, Federica Tambelli e Alfredo Bruno.",
        bottone: 'Scopri il Team ►',
        goToPage: '/About'

    },
    {
        id: 'testo4',
        alt: "icona equip",
        immagine: '/equipe.svg',
        text: "Con sette fisioterapisti ed un chirurgo ortopedico altamente qualificati ed esperti, lo Studio di Fisioterapia Caserta (CE) Bruno è una destinazione imbattibile per chi ha bisogno di cure terapeutiche.",
        bottone: 'Contattaci ►',
        goToPage: '/Contatti'
    },
]

export const cardCTATxt: TextContent[] = [
    {
        id: 'testo1',
        alt: "chiamaci",
        immagine: '/chiamaci.svg',
        text: "Il tuo medico ti ha prescritto un piano terapia? Oppure desideri fare dei massaggi? Qualunque sia la tua necessità, Contattaci per fissare un consulto e scoprire i trattamenti più adatti a te!",
        bottone: 'Chiama subito! ►',
        goToPage: 'tel:3473288921',
    },
    {
        id: 'testo2',
        alt: 'vai al form di contatto',
        immagine: '/scrivici.svg',
        text: "Non puoi chiamarci in questo momento? Nessun problema, compila il modulo di contatto specificando telefono e mail e ti ricontattiamo noi appena possibile!",
        bottone: 'Scrivici! ►',
        goToPage: '/Contatti#form'

    },
    {
        id: 'testo3',
        alt: 'vai alla mappa',
        immagine: '/trovaci.svg',
        text: 'Vuoi sapere dove ci troviamo per vedere di persona il nostro Studio? Clicca qui sotto per scoprire la mappa, e vieni a trovarci in orario di apertura, saremo lieti di accoglierti!',
        bottone: 'Vieni a trovarci! ►',
        goToPage: '/Contatti#mappa'

    },
    {
        id: 'testo4',
        alt: "vai alle faq",
        immagine: '/domande.svg',
        text: "Se hai ancora qualche dubbio consulta la nostra sezione F.A.Q per trovare risposte alle domande che ci vengono poste più di frequente riguardo i nostri servizi e trattamenti!",
        bottone: 'Leggi le F.A.Q ►',
        goToPage: '/Contatti#faq'
    },
]

export const faq: FaqItem[]= [
    {
        id: 'q1',
        titolo: "Cos'è la fisioterapia e a cosa serve?",
        testo: 'La fisioterapia è una disciplina medica che utilizza trattamenti manuali, strumentali e fisici per prevenire, curare e riabilitare patologie che colpiscono muscoli, ossa, articolazioni e il sistema nervoso. Serve a migliorare la mobilità, alleviare il dolore e recuperare la funzionalità del corpo.'
    },
    {
        id: 'q2',
        titolo: 'Quali sono i principali benefici della fisioterapia?',
        testo: 'La fisioterapia aiuta a ridurre il dolore, migliorare la mobilità, prevenire infortuni, accelerare il recupero post-operatorio e migliorare la qualità della vita.'
    },    {
        id: 'q3',
        titolo: "Cosa sono le onde d'urto e come funzionano?",
        testo: "Le onde d'urto sono impulsi meccanici utilizzati per stimolare la rigenerazione dei tessuti, ridurre il dolore e trattare patologie muscolo-scheletriche come tendiniti o calcificazioni."
    },    {
        id: 'q4',
        titolo: 'A cosa serve la tecarterapia?',
        testo: 'La tecarterapia è una tecnica che utilizza correnti ad alta frequenza per stimolare i processi di guarigione dei tessuti e ridurre infiammazioni e dolori muscolari.'
    },    {
        id: 'q5',
        titolo: 'Quando è indicata la magnetoterapia?',
        testo: "La magnetoterapia è indicata per trattare fratture, osteoporosi, lesioni articolari e infiammazioni croniche, grazie all'effetto rigenerativo dei campi magnetici."
    },    {
        id: 'q6',
        titolo: 'Cosa si intende per elettroterapia e a chi è rivolta?',
        testo: "L'elettroterapia utilizza correnti elettriche a bassa intensità per alleviare il dolore, stimolare i muscoli e favorire la circolazione. È adatta a chi soffre di dolori muscolari o lesioni."
    },    {
        id: 'q7',
        titolo: 'Quali sono i benefici del massaggio decontratturante?',
        testo: 'Il massaggio decontratturante aiuta a sciogliere le tensioni muscolari, migliorare la circolazione e alleviare dolori dovuti a contratture o posture scorrette.'
    },    {
        id: 'q8',
        titolo: 'In cosa consiste la rieducazione posturale globale?',
        testo: "La rieducazione posturale globale è una terapia che lavora sulla postura e sull'equilibrio muscolare per eliminare disfunzioni alla base di dolori cronici e patologie articolari."
    },    {
        id: 'q9',
        titolo: "Che differenza c'è tra massaggio linfodrenante e rilassante?",
        testo: 'Il massaggio linfodrenante favorisce il drenaggio dei liquidi linfatici, utile in caso di gonfiori o ritenzione idrica, mentre il massaggio rilassante aiuta a ridurre lo stress e migliorare il benessere generale.'
    },    {
        id: 'q10',
        titolo: 'Quali patologie possono essere trattate con la fisioterapia?',
        testo: 'La fisioterapia tratta patologie ortopediche (fratture, distorsioni), neurologiche (paralisi, ictus), reumatiche (artrite, artrosi) e post-traumatiche (lesioni muscolari).'
    },    {
        id: 'q11',
        titolo: 'Come si cura il dolore cervicale?',
        testo: 'Il dolore cervicale può essere alleviato con terapie manuali, esercizi di stretching, massaggi decontratturanti e trattamenti strumentali come tecarterapia o laserterapia.'
    },    {
        id: 'q12',
        titolo: 'La fisioterapia è utile per chi soffre di scoliosi?',
        testo: 'Sì, la fisioterapia è fondamentale per migliorare la postura, ridurre i sintomi della scoliosi e prevenire peggioramenti, utilizzando tecniche come la Rieducazione Posturale Globale o il metodo Mézières.'
    },    {
        id: 'q13',
        titolo: 'Offrite sedute di fisioterapia a domicilio?',
        testo: 'Sì, lo studio Fisioterapia Bruno offre terapie a domicilio, ideali per chi non può spostarsi o ha difficoltà motorie.'
    },    {
        id: 'q14',
        titolo: 'Cosa prevede un piano di riabilitazione post-operatoria?',
        testo: 'Un piano di riabilitazione post-operatoria include esercizi personalizzati, terapie strumentali e tecniche manuali per favorire il recupero della funzionalità e ridurre il rischio di complicazioni.'
    },    {
        id: 'q15',
        titolo: 'Quanto dura una seduta di fisioterapia?',
        testo: 'La durata di una seduta varia dai 30 ai 60 minuti, a seconda del trattamento e delle esigenze del paziente.'
    },    {
        id: 'q16',
        titolo: 'Come si prenota una visita presso lo studio?',
        testo: 'Puoi prenotare una visita chiamando al numero +39 347 3288921, compilando il modulo di contatto sul nostro sito o visitandoci presso lo studio a Caserta.'
    },    {
        id: 'q17',
        titolo: 'È necessario presentare una prescrizione medica?',
        testo: 'Non sempre, ma in caso di trattamenti specifici o patologie complesse è consigliabile avere una prescrizione per individuare il percorso terapeutico più adeguato.'
    },    {
        id: 'q18',
        titolo: 'I trattamenti sono coperti da assicurazione sanitaria?',
        testo: 'Molte assicurazioni sanitarie coprono i trattamenti fisioterapici, ma è consigliabile verificare con il proprio ente assicurativo.'
    },    {
        id: 'q19',
        titolo: 'In cosa consiste la riabilitazione sportiva?',
        testo: 'La riabilitazione sportiva prevede esercizi e terapie specifiche per recuperare rapidamente da infortuni e migliorare le performance sportive.'
    },    {
        id: 'q20',
        titolo: 'Quali sono i tempi di recupero medi dopo un trattamento fisioterapico?',
        testo: 'I tempi di recupero dipendono dalla natura del problema trattato, dalla gravità della condizione e dalla risposta del paziente alla terapia. Per patologie muscolari leggere, il recupero può avvenire in poche settimane, mentre per problemi più complessi, come una riabilitazione post-chirurgica, potrebbero essere necessari diversi mesi. Una valutazione personalizzata consente di fornire una stima più precisa.'
    },

]

export const paragrafiSeo: ParagrafoSeo[] = [
    {
        id: "/",
        titolo: "A Caserta, fisioterapista esperto in riabilitazione sportiva",
        testo: "Lo studio Fisioterapia Bruno a Caserta è diretto dal fisioterapista Beniamino Bruno, professionista affermato che, insieme a uno staff altamente qualificato, propone percorsi riabilitativi efficaci per affrontare disturbi muscolo-scheletrici di diversa natura, sia acuti che cronici. Con una lunga esperienza nel campo della riabilitazione ortopedica e sportiva, ha collaborato come fisioterapista con realtà sportive di primo piano come la Casertana Calcio e la Volalto 2.0 Caserta. Attualmente, lo studio è punto di riferimento anche per la Juve Caserta 2021, squadra di pallacanestro impegnata nel campionato nazionale di Serie B."
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
        titolo: "Fisioterapia, Osteopatia e Fisiokinesiterapia a Caserta",
        testo: "Se stai cercando un fisioterapista a Caserta, non esitare a contattare lo studio Fisioterapia Bruno. Situato nel cuore della città, lo studio è facilmente raggiungibile e pronto ad accoglierti con trattamenti fisioterapici personalizzati. Che tu abbia bisogno di riabilitazione sportiva, fisioterapia ortopedica o trattamenti osteopatici, il nostro team di esperti è a tua disposizione per aiutarti a recuperare il benessere fisico e migliorare la qualità della tua vita. Compila il modulo per richiedere un incontro con l'osteopata esperto e valutare i percorsi di riabilitazione sportiva. Prenota una visita oggi stesso e scopri come possiamo aiutarti a ritrovare la forma fisica ideale."
    }
]


export const terapieStrumentali: Terapia[] = [
    {
        id: "ts1",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Onde d'urto",
        descrizione: "Trattamento non invasivo che utilizza onde acustiche ad alta energia per agire su tendinopatie croniche, calcificazioni e fascite plantare. Produce effetti antidolorifico e rigenerativo stimolando i processi di riparazione nei tessuti interessati.",
    },
    {
        id: "ts2",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Tecarterapia",
        descrizione: "Forma di diatermia endogena che trasferisce energia ai tessuti tramite radiofrequenza. Agisce in modalita' capacitiva sui tessuti molli come muscoli e legamenti, e in modalita' resistiva su strutture piu' dense come ossa, cartilagini e tendini. Indicata per contratture, infiammazioni, tendinopatie e recupero post-traumatico.",
    },
    {
        id: "ts3",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Laserterapia",
        descrizione: "Terapia fisica che utilizza radiazioni elettromagnetiche monocromatiche e coerenti per indurre effetti antidolorifico, antinfiammatorio e biostimolante. In fisioterapia si distinguono LLLT a bassa potenza, con azione prevalentemente antinfiammatoria, e HILT ad alta potenza, capace di raggiungere i tessuti profondi. Indicata per tendinopatie, lesioni muscolari, artrosi e recupero post-operatorio.",
    },
    {
        id: "ts4",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Magnetoterapia",
        descrizione: "Utilizza campi magnetici pulsati a bassa frequenza per favorire la rigenerazione ossea e cartilaginea e ridurre l'edema. Agisce sui tessuti in profondita' senza contatto diretto. Indicata per patologie articolari, fratture e processi infiammatori cronici.",
    },
    {
        id: "ts5",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Elettroterapia",
        descrizione: "Insieme di tecniche che utilizzano correnti elettriche a diversa frequenza per stimolare i muscoli, ridurre la conduzione del dolore e favorire la rieducazione neuromuscolare dopo traumi o interventi chirurgici.",
    },
    {
        id: "ts6",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "TENS",
        descrizione: "Stimolazione Elettrica Nervosa Transcutanea: correnti a bassa frequenza che agiscono sul sistema nervoso periferico bloccando la trasmissione degli stimoli dolorosi. Indicata nella gestione del dolore acuto e cronico di origine muscolo-scheletrica.",
    },
    {
        id: "ts7",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Quadrangolari",
        descrizione: "Correnti a forma d'onda quadra utilizzate per la stimolazione selettiva dei muscoli con denervazione parziale. Rallentano l'atrofia muscolare e supportano il recupero della funzione nei casi di lesione nervosa periferica.",
    },
    {
        id: "ts8",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Esponenziali",
        descrizione: "Correnti a forma d'onda progressiva che stimolano preferenzialmente le fibre muscolari a contrazione lenta. Indicate nella rieducazione muscolare in presenza di paresi e lesioni nervose periferiche.",
    },
    {
        id: "ts9",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Ionoforesi",
        descrizione: "Tecnica che sfrutta una corrente elettrica continua per veicolare farmaci antinfiammatori attraverso la cute fino al tessuto bersaglio, senza ricorrere a iniezioni. Consente una somministrazione locale e mirata del principio attivo.",
    },
    {
        id: "ts10",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Faradiche",
        descrizione: "Correnti alternate a bassa frequenza che inducono contrazioni muscolari involontarie. Utilizzate per mantenere il trofismo muscolare e contrastare l'atrofia da immobilizzazione prolungata.",
    },
    {
        id: "ts11",
        tipologia: "Terapia Strumentale",
        nomeTerapia: "Ultrasuoni",
        descrizione: "Onde meccaniche ad alta frequenza che producono microvibrazioni nei tessuti profondi con effetto antinfiammatorio, analgesico e favorente la riparazione dei tessuti molli. Spesso utilizzati in combinazione con altre terapie fisiche.",
    },
]

export const terapieManuali: Terapia[] = [
    {
        id: "tm1",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Linfodrenanti",
        descrizione: "Metodica terapeutica che favorisce il drenaggio della linfa dalla periferia verso il cuore, eseguita con manovre lente e ritmiche che rispettano i parametri fisiologici del deflusso linfatico. Indicata come terapia d'elezione per linfedemi primari e secondari e come trattamento complementare nella gestione degli edemi post-traumatici e post-chirurgici.",
    },
    {
        id: "tm2",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Rilassanti",
        descrizione: "Trattamento che agisce sulla muscolatura superficiale e sul sistema nervoso autonomo per ridurre la tensione accumulata e favorire il benessere psicofisico generale. Produce effetti simpaticolitici e analgesici documentati.",
    },
    {
        id: "tm3",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massaggi Decontratturanti",
        descrizione: "Agisce sulle contratture muscolari profonde attraverso manovre specifiche che rilasciano la tensione, migliorano la circolazione locale e riducono il dolore muscolare da sforzo o postura scorretta.",
    },
    {
        id: "tm4",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Rieducazione Posturale Globale",
        descrizione: "Programma terapeutico che corregge gli squilibri posturali attraverso esercizi specifici e tecniche manuali, lavorando sull'essere umano nella sua globalita'. Adatto a tutte le eta', dalla scoliosi in eta' evolutiva alle patologie degenerative dell'adulto.",
    },
    {
        id: "tm5",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Metodo Kabat",
        descrizione: "Tecnica di facilitazione neuromuscolare propriocettiva (PNF) che mira ad attivare o riattivare i recettori del sistema nervoso periferico e centrale attraverso schemi di movimento diagonali e spiraliformi. Indicata per il rinforzo muscolare, l'aumento del range articolare, la riduzione della spasticita' e il miglioramento della coordinazione.",
    },
    {
        id: "tm6",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Massoterapia",
        descrizione: "Insieme di tecniche manuali terapeutiche che agiscono su muscoli, tendini e tessuto connettivo per ridurre il dolore, migliorare la mobilita' e accelerare il recupero funzionale.",
    },
    {
        id: "tm7",
        tipologia: "Terapia Manuale",
        nomeTerapia: "Riabilitazione e Gestione del Dolore",
        descrizione: "Approccio integrato che combina tecniche manuali e strumentali per il controllo del dolore acuto e cronico, con l'obiettivo di migliorare la qualita' di vita del paziente attraverso un piano di trattamento personalizzato.",
    },
]

export const terapieOrtopediche: Terapia[] = [
    {
        id: "to1",
        tipologia: "Terapia Ortopedica",
        nomeTerapia: "Visite Ortopediche",
        descrizione: "Valutazione specialistica dell'apparato muscolo-scheletrico eseguita dal Medico Chirurgo Ortopedico per diagnosi accurata e definizione del percorso terapeutico piu' adatto alle esigenze del paziente.",
    },
    {
        id: "to2",
        tipologia: "Terapia Ortopedica",
        nomeTerapia: "Infiltrazione Acido Ialuronico",
        descrizione: "Terapia intra-articolare indicata nei pazienti che non hanno risposto a trattamenti fisioterapici e farmacologici. Agisce come ammortizzatore e fornisce lubrificazione all'interno dell'articolazione, con azione protettiva sulla cartilagine, analgesica e antinfiammatoria. Particolarmente efficace per ginocchio e anca in presenza di artrosi.",
    },
    {
        id: "to3",
        tipologia: "Terapia Ortopedica",
        nomeTerapia: "Infiltrazione Articolare",
        descrizione: "Terapia infiltrativa indicata per malattie articolari come artrosi, artriti e condropatie, e per patologie delle strutture peri-articolari come borsiti, capsuliti e tendiniti. Consente di somministrare il farmaco direttamente nel sito d'azione, garantendo un effetto rapido e mirato.",
    },
]

export const serviziOfferti: ElencoTerapie[] = [
    {
        id: "ts",
        tipologia: "Terapie Strumentali",
        immagine: "/Fisio32.jpg",
        elenco: terapieStrumentali,
        descrizione: "Con l'impiego di strumenti e apparecchiature di ultima generazione, il personale del centro Fisioterapia Bruno a Caserta e' in grado di eseguire terapie strumentali come tecarterapia, laserterapia e magnetoterapia, anche a domicilio.",
    },
    {
        id: "tm",
        tipologia: "Terapie Manuali",
        immagine: "/Fisio1921.jpg",
        elenco: terapieManuali,
        descrizione: "L'esperto staff dello studio Fisioterapia Bruno a Caserta esegue terapie manuali per la rieducazione posturale sia nei bambini che negli adulti. Inoltre si eseguono massaggi linfodrenanti, rilassanti e decontratturanti.",
    },
    {
        id: "tmo",
        tipologia: "Terapie Ortopediche",
        immagine: "/chirurgia/3.jpg",
        elenco: terapieOrtopediche,
        descrizione: "Lo studio Fisioterapia Bruno a Caserta offre terapie ortopediche avanzate per la riabilitazione post-operatoria e il trattamento di patologie muscolo-scheletriche. Prenota una visita col nostro Medico Chirurgo Ortopedico.",
    },
]



export const descServizi: DettaglioServizi[] = [
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
    {
        id: "p7",
        titolo: "Visite Ortopediche Specialistiche",
        testo: "Presso lo studio Fisioterapia Bruno a Caserta, offriamo visite ortopediche specialistiche per diagnosticare e trattare patologie dell'apparato muscolo-scheletrico. Il nostro esperto Medico Chirurgo Ortopedico valuterà con precisione condizioni come artrosi, lesioni sportive e disturbi posturali, proponendo percorsi terapeutici personalizzati per il recupero ottimale della funzionalità.",
        immagine: "/chirurgia/visitaorto.jpg"
    },
    {
        id: "p8",
        titolo: "Infiltrazioni di Acido Ialuronico",
        testo: "Lo studio Fisioterapia Bruno a Caserta esegue infiltrazioni di acido ialuronico per il trattamento di articolazioni affette da artrosi o infiammazioni. Questa terapia mira a ripristinare la lubrificazione naturale dell'articolazione, riducendo il dolore e migliorando la mobilità. Le infiltrazioni sono effettuate da personale medico qualificato, garantendo sicurezza ed efficacia nel trattamento.",
        immagine: "/chirurgia/acidoialuronico.jpg"
    },
    {
        id: "p9",
        titolo: "Infiltrazioni Articolari",
        testo: "Presso Fisioterapia Bruno a Caserta, offriamo infiltrazioni articolari per alleviare il dolore e l'infiammazione causati da diverse patologie articolari. Utilizziamo tecniche avanzate per somministrare farmaci direttamente nell'articolazione interessata, assicurando un trattamento mirato ed efficace. Le sedute sono condotte da specialisti in un ambiente sicuro e professionale.",
        immagine: "/chirurgia/infiltrazioni.jpg"
    }
]

export const ourStaff: StaffMember[] = [
    {
        id: "Beniamino",
        nome: "Dr. Beniamino Bruno",
        foto: "/staff/Beniamino.jpg",
        ruolo: "Direttore - Fisioterapista"
    },
    {
        id: "Giovanni",
        nome: "Dr. Giovanni Carandente",
        foto: "/staff/Carandente.jpeg",
        ruolo: "Fisioterapista"
    },
    {
        id: "Luigi",
        nome: "Dr. Luigi Carandente",
        foto: "/staff/CarandenteL.jpg",
        ruolo: "Medico ChirurgoOrtopedico"
    },
    {
        id: "Antonia",
        nome: "Dr.ssa Antonia Piccolo",
        foto: "/staff/Antonia.jpeg",
        ruolo: "Fisioterapista"
    },
    {
        id: "Fabio",
        nome: "Dr. Fabio Viscardi",
        foto: "/staff/Viscardi.jpeg",
        ruolo: "Fisioterapista"
    },
    {
        id: "Alfredo",
        nome: "Dr. Alfredo Bruno",
        foto: "/staff/Alfredo.jpeg",
        ruolo: "Fisioterapista"
    },
    {
        id: "Francesca",
        nome: "Dr.ssa Francesca D'Agostino",
        foto: "/staff/Francesca.jpeg",
        ruolo: "Fisioterapista"
    },
    // {
    //     id: "Federica",
    //     nome: "Dr.ssa Federica Tambelli",
    //     foto: "/staff/Federica.jpeg"
    // },
]

export const espProf: SliderImage[] = [
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
    image: '/slider/studio2.jpg',
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
    testo: 'Lega Volley'
},
{
    id:10,
    image: '/slider/juvecaserta2.jpg',
    testo: 'Juve Caserta'
},
{
    id:11,
    image: '/slider/juvecaserta3.jpg',
    testo: 'Juve Caserta'
},
{
    id:12,
    image: '/slider/Carandente.jpg',
    testo: 'Fisioterapista Sportivo'
},
{
    id:13,
    image: '/slider/sponsors.JPG',
    testo: 'Fisioterapia Sport'
},
{
    id:14,
    image: '/slider/trofeo.JPG',
    testo: 'festeggiamenti sportivi'
},
{
    id:15,
    image: '/slider/juvecaserta1.jpg',
    testo: 'Juve caserta'
},
{
    id:16,
    image: '/slider/terapiamanuale.JPG',
    testo: 'terapie manuali e strumentali'
},

]

export const navItems: NavItem[] =[
    {
        label: "Home",
        href: '/'
    },
    {
        label: 'Servizi',
        href: '/servizi'
    },
    {
        label:'Chi Siamo',
        href: '/chi-siamo'
    },
    {
        label: 'Contatti',
        href: '/contatti'
    }
]

export const trustItems: TrustItem[] = [
    {
        id: "laurea",
        icon: "\u{1F393}",
        label: "Laurea in Fisioterapia",
        sub: "Policlinico di Napoli"
    },
    // {
    //     id: "calcio",
    //     icon: "\u{1F3C5}",
    //     label: "Casertana Calcio",
    //     sub: "Fisioterapista ufficiale"
    // },
    {
        id: "basket",
        icon: "\u{1F3C0}",
        label: "Juve Caserta 2021",
        sub: "Serie B Basket"
    },
    {
        id: 'basket2',
        icon: '\u{1F3C0}',
        label: 'ASD Step Back Caiazzo',
        sub: 'Basket'
    },
    {
        id: "team",
        icon: "\u{1F9D1}\u{200D}\u{2695}\u{FE0F}",
        label: "Staff qualificato",
        sub: "Fisioterapisti + Ortopedico"
    }
]


export const partnership: Partnership[] = [
    {
        id: 'juve-caserta',
        nome: 'Juve Caserta 2021',
        sport: 'Basket - Serie B',
    },
    {
        id: 'step-back',
        nome: 'ASD Step Back Caiazzo',
        sport: 'Basket',
    },
    {
        id: 'casertana',
        nome: 'Casertana FC',
        sport: 'Calcio',
    },
    {
        id: 'volalto',
        nome: 'Volalto 2.0 Caserta',
        sport: 'Pallavolo',
    },
]


