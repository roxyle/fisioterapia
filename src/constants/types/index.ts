export type Contacts = {
    id: string,
    company: string,
    telephone: string,
    address: string,
    email: string,
}

export type TextContent = {
    id: string,
    alt: string,
    immagine: string,
    text: string,
    bottone: string,
    goToPage: string
}

export type ParagrContent = {
    id: string,
    titolo: string,
    testo: string
}

export type Terapie = {
    id: string,
    tipologia: string,
    nomeTerapia: string,
}

export type ElencoTerapie = {
    id: string,
    tipologia: string,
    immagine: string,
    descrizione: string,
    elenco: Terapie[],
}

export type DettaglioServizi = {
    id: string,
    titolo: string,
    testo: string
    immagine: string
}

export type Staff = {
    id: string,
    nome: string,
    foto: string,
    
}
