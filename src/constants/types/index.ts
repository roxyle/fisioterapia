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

export type Servizi = {
    id: string,
    tipologia: string,
    immagine: string
}

export type Terapie = {
    id: string,
    tipologia: string,
    nomeTerapia: string,
    descrizione: string
}

