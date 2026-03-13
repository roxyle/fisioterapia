
export type Contacts = {
    id: string,
    company: string,
    telephone: string,
    address: string,
    email: string,
    mapsHref: string,
    mapsEmbed: string
    orari: OrarioApertura[],
    partitaIva: string,
    telefonoHref: string
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

export type Terapia = {
    id: string,
    tipologia: string,
    nomeTerapia: string,
    descrizione?:string
}

export type ElencoTerapie = {
    id: string,
    tipologia: string,
    immagine: string,
    descrizione: string,
    elenco: Terapia[],
}

export type DettaglioServizi = {
    id: string,
    titolo: string,
    testo: string
    immagine: string
}

export type StaffMember = {
    id: string,
    nome: string,
    foto: string,
    ruolo: string,
    instagram?: string

}

export type ImgEspProf = {
    id: number,
    image: string,
    testo: string
}

export type NavItem = {
    label:string,
    href: string
}

export type TrustItem= {
    id: string,
    icon: string,
    label: string,
    sub: string
}

export type SliderImage = {
    id:number,
    image:string,
    testo:string
}

export type FaqItem = {
    id:string,
    titolo: string,
    testo: string
}

export type ParagrafoSeo ={
    id: string,
    titolo:string,
    testo:string
}

export type ContactFormData= {
    nome:string,
    cognome:string,
    telefono:string,
    email:string,
    messaggio:string
}


export type PartnershipItem= {
    id: string,
    nome: string,
    sport: string,
    logo?: string
}



export type OrarioApertura = {
    giorni: string
    ore: string
    chiuso: boolean
}
