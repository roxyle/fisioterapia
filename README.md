# Fisioterapia Bruno - Sito Web Professionale

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
  
  [Sito in Produzione](https://www.fisioterapistacaserta.it/) | 
  [Preview Nuova Versione](https://fisioterapia02-qdpieejww-yles-projects.vercel.app/) | 
  [Repository](https://github.com/roxyle/fisioterapia)
  
  *Un progetto che evolve: dalla manutenzione di un sito esistente al restyling completo con Next.js App Router*
  
</div>

## Indice

- [Il Progetto](#il-progetto)
- [Stack Tecnologico](#stack-tecnologico)
- [Caratteristiche](#caratteristiche)
- [Gestione e Manutenzione](#gestione-e-manutenzione)
- [Performance](#performance)
- [Sviluppi Futuri](#sviluppi-futuri)
- [Installazione Locale](#installazione-locale)
- [Il Mio Approccio](#il-mio-approccio)

---

## Il Progetto

Sito web istituzionale per **Fisioterapia Bruno**, studio di fisioterapia con sede a Caserta. Il progetto nasce a fine 2024 con l'obiettivo di:

- Sostituire un sito precedente che presentava errori di comunicazione (es. riferimenti a "consegne a domicilio" invece di "visite domiciliari")
- Creare una presenza online professionale e affidabile
- Migliorare il posizionamento SEO locale
- Offrire un'esperienza utente chiara e accessibile

**Risultato raggiunto:** a distanza di pochi mesi dal deploy, il sito è stabilmente in **prima pagina su Google** per ricerche chiave come "fisioterapia Caserta" e "fisioterapista Caserta".

### Un Progetto in Evoluzione

Il repository racconta due fasi del progetto:

1. **Versione attuale (main branch)** - Sito in produzione dal 2024, con manutenzione continua e aggiornamenti su richiesta del cliente
2. **Restyling in corso (dev branch)** - Rifacimento completo dell'UI/UX con approccio moderno e Next.js 15 App Router

Questa doppia natura dimostra non solo la capacità di realizzare un prodotto finito, ma anche di mantenerlo e farlo evolvere nel tempo.

---

## Stack Tecnologico

| Tecnologia | Utilizzo |
|------------|----------|
| **Next.js 15** | Framework React con App Router per routing e performance |
| **TypeScript** | Tipizzazione statica per codice più robusto e manutenibile |
| **Tailwind CSS** | Styling utility-first per UI responsive e coerente |
| **Vercel** | Deploy continuo e preview automatiche per ogni branch |
| **Git** | Versionamento con strategia branch (main/produzione, dev/sviluppo) |

*Nota: Il progetto è stato migrato da Next.js Page Router ad App Router, sfruttando i benefici dei Server Components e React 19.*

---

## Caratteristiche

### Sito Attuale (Produzione)
- ✅ **Design responsive** ottimizzato per mobile/tablet/desktop
- ✅ **Navigazione intuitiva** - Home, Servizi, Chi Siamo, Contatti
- ✅ **Card interattive** con effetto flip per informazioni aggiuntive
- ✅ **Slider gallery** per immagini dello studio
- ✅ **Staff management** centralizzato (modificabile tramite file data.ts)
- ✅ **Form di contatto** con invio email diretto allo studio
- ✅ **Integrazione Google Maps** per la posizione
- ✅ **CTA strategiche** (telefono, email, prenotazioni)

### Restyling in Corso (Branch Dev)
- **UI/UX completamente rinnovata** - design più moderno e curato
- **Marquee/ticker animato** per mostrare partnership e collaborazioni (in sviluppo)
- **Slider ottimizzato** con nuove animazioni
- **Migliorie mobile-first** per un'esperienza ancora più fluida
- **Codice più modulare** con Server/Client Components ben separati
- **SEO in fase di ottimizzazione** (attuale 63, in miglioramento)

---

## Gestione e Manutenzione

Uno degli aspetti chiave del progetto è stata la **manutenzione post-deploy**. Il cliente ha richiesto nel tempo modifiche come:

- Aggiunta/rimozione membri dello staff
- Aggiornamento foto nella gallery
- Modifiche ai testi

**Soluzione adottata:** ho strutturato il codice centralizzando i dati modificabili in un file `data.ts`. In questo modo, qualsiasi richiesta del cliente si traduce in una modifica rapida e sicura, senza dover intervenire sulla logica dei componenti.


---

## Performance

### Lighthouse Scores

**Versione Attuale (Produzione)**

| Metrica | Desktop | Mobile |
|---------|---------|--------|
| Performance | 65 | 94 |
| Accessibilità | 86 | 86 |
| Best Practices | 96 | 96 |
| SEO | 82 | 82 |

**Nuova Versione (In Sviluppo)**

| Metrica | Desktop | Mobile | Obiettivo |
|---------|---------|--------|-----------|
| Performance | 100 | 82 | Eccellente su desktop |
| Accessibilità | 96 | 96 | Notevolmente migliorata |
| Best Practices | 100 | 100 | Standard elevati |
| SEO | 63 | 63 | In ottimizzazione |

*Il punteggio SEO attuale del restyling è in fase di miglioramento - lavoro attualmente su questo aspetto per garantire che la nuova versione mantenga (e possibilmente superi) l'ottimo posizionamento raggiunto.*

---

## Sviluppi Futuri

- [ ] **Completamento restyling UI** con design definitivo
- [ ] **Ottimizzazione SEO** per raggiungere/almeno eguagliare i punteggi attuali
- [ ] **Possibile implementazione dark mode** (in valutazione)
- [ ] **Test A/B** con il cliente per decidere se migrare alla nuova versione

---

## Installazione Locale

```bash
# Clona il repository
git clone https://github.com/roxyle/fisioterapia.git

# Accedi alla directory
cd fisioterapia

# Installa le dipendenze
npm install
# oppure
yarn install

# Avvia l'ambiente di sviluppo
npm run dev
# oppure
yarn dev

# Per vedere la versione in restyling
git checkout dev
npm run dev
⚠️🚧 sito E readme in aggiornamento 🚧⚠️
