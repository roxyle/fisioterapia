'use client'

import { useState, ChangeEvent, FocusEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { faq, ourContact, paragrafiSeo } from '@/constants/data'
import { cn } from '@/lib/utils'



type FormData = {
    name: string
    email: string
    phone: string
    message: string
}

type FormErrors = {
    name: string
    email: string
    phone: string
    message: string
}

const empty: FormData = { name: '', email: '', phone: '', message: '' }
const noErrors: FormErrors = { name: '', email: '', phone: '', message: '' }


function validateField(name: string, value: string): string {
    switch (name) {
        case 'name':
            return value.trim() ? '' : 'Il nome e il cognome sono obbligatori.'
        case 'email':
            if (!value.trim()) return "L'email e' obbligatoria."
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? ''
                : 'Inserisci un indirizzo email valido.'
        case 'phone':
            if (!value.trim()) return 'Il numero di telefono e\' obbligatorio.'
            return /^\d{9,10}$/.test(value)
                ? ''
                : 'Inserisci un numero valido (9 o 10 cifre, solo numeri).'
        case 'message':
            return value.trim() ? '' : 'Il messaggio e\' obbligatorio.'
        default:
            return ''
    }
}

function validateAll(data: FormData): FormErrors {
    return {
        name: validateField('name', data.name),
        email: validateField('email', data.email),
        phone: validateField('phone', data.phone),
        message: validateField('message', data.message),
    }
}


function Field({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    error,
    onChange,
    onBlur,
    textarea = false,
}: {
    label: string
    name: string
    type?: string
    placeholder: string
    value: string
    error: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    textarea?: boolean
}) {
    const base =
        'w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 ' +
        'focus:outline-none focus:ring-2 focus:ring-brand transition ' +
        (error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white')

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            {
                textarea? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        rows={5}
                        className={base + ' resize-none'}
                    />) 
                : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        className={base}
                    />
                    )
                }
            {
                error && (
                    <p className="text-xs text-red-500">{error}</p>
                )
            }
        </div>
    )
}

function PrivacyModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 px-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6
            flex flex-col gap-4 max-h-[80vh]">
                <h2 className="font-display text-lg font-bold text-gray-900">
                    Informativa Privacy
                </h2>
                <div className="overflow-y-auto text-sm text-gray-600 leading-relaxed
                flex-1 pr-1">
                    <p>
                        Informativa privacy ai sensi degli artt. 13-14 del Regolamento
                        Europeo "Privacy" (GDPR).
                    </p>
                    <p className="mt-3">
                        I dati personali da Lei inseriti sono trattati da Studio di
                        Fisioterapia - Via Caduti sul Lavoro, 38 - 81100 Caserta (CE) -
                        +39 339 247 6524 in qualita' di Titolare, per finalita' connesse
                        alla fornitura dei servizi da Lei richiesti (es. richiedere
                        informazioni, ottenere preventivi, effettuare prenotazioni).
                    </p>
                    <p className="mt-3">
                        I dati forniti potrebbero essere trattati, solo su Suo esplicito
                        consenso, per inviarLe comunicazioni commerciali via email o SMS
                        relativamente ai servizi offerti.
                    </p>
                    <p className="mt-3">
                        I trattamenti avverranno con modalita' elettroniche e potranno
                        essere condivisi con terze parti nell'ambito dell'UE o in Paesi
                        extra-UE che offrono adeguate garanzie di sicurezza. I dati
                        saranno conservati per il tempo necessario all'erogazione dei
                        servizi o secondo quanto previsto dalla legge.
                    </p>
                    <p className="mt-3">
                        In qualsiasi momento potra' esercitare i diritti previsti agli
                        artt. 15-22 del GDPR contattando il Titolare. Potra' inoltre
                        proporre reclamo all'Autorita' Garante per la Protezione dei Dati.
                    </p>
                </div>
                <Button onClick={onClose} variant="primary" size="md">
                    Chiudi
                </Button>
            </div>
        </div>
    )
}


function ContattiForm() {
    const [data, setData] = useState<FormData>(empty)
    const [errors, setErrors] = useState<FormErrors>(noErrors)
    const [privacy, setPrivacy] = useState(false)
    const [privacyModal, setPrivacyModal] = useState(false)
    const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleBlur(
        e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }

    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validateAll(data)
    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some(v => v !== '')
    if (hasErrors || !privacy) return

    setStatus('idle')

    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            setStatus('ok')
            setData(empty)
            setErrors(noErrors)
            setPrivacy(false)
        } else {
            setStatus('error')
        }
    } catch {
        setStatus('error')
    }
}

    return (
        <>
            {
                privacyModal && (
                    <PrivacyModal onClose={() => setPrivacyModal(false)} />
                )
            }

            <div className="bg-white rounded-2xl border border-gray-200
            shadow-sm p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                    Scrivici
                </h2>

                <form onSubmit={handleSubmit} noValidate
                className="flex flex-col gap-4">
                    <Field label="Nome e Cognome *" onChange={handleChange}
                        name="name"
                        placeholder="es. Mario Rossi"
                        value={data.name}
                        error={errors.name}
                        
                        onBlur={handleBlur}
                    />
                    <Field label="Email *" onChange={handleChange}
                        placeholder="es. mario.rossi@email.com"
                        name="email"
                        type="email"
                        value={data.email}
                        error={errors.email}
                        onBlur={handleBlur}
                    />
                    <Field label="Telefono *" onChange={handleChange}
                        name="phone"
                        type="tel"
                        placeholder="es. 3473288921"
                        value={data.phone}
                        error={errors.phone}
                        onBlur={handleBlur}
                    />
                    <Field textarea label="Messaggio *" placeholder="Scrivi qui il tuo messaggio"
                        name="message"
                        value={data.message}
                        error={errors.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />


                    <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" onChange={() => setPrivacy(p => !p)}
                            checked={privacy}
                            className="mt-0.5 w-4 h-4 accent-brand"
                        />
                        <span className="text-sm text-gray-600 leading-relaxed">
                            Ho letto e accetto l'
                            <button
                                type="button"
                                onClick={() => setPrivacyModal(true)}
                                className="text-brand underline underline-offset-2
                                hover:text-sky-600 transition-colors">
                                informativa sulla privacy
                            </button>
                            {' '}e autorizzo lo Studio al trattamento dei dati
                            per le finalita' indicate.
                        </span>
                    </label>

                    <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={!privacy}
                        className={!privacy ? 'opacity-50 cursor-not-allowed' : ''}>
                        Invia messaggio
                    </Button>

                    {
                        status==='ok' && (
                            <p className="text-sm text-green-600 font-medium">
                                Messaggio inviato con successo. Ti ricontatteremo presto.
                            </p>
                        )
                    }
                    
                    {
                        status==='error' && (
                            <p className="text-sm text-red-500 font-medium">
                                Si e' verificato un errore. Riprova o contattaci per telefono.
                            </p>
                        )
                    }
                </form>
            </div>
        </>
    )
}




function ContattiInfo() {
    return (
        <div className="flex flex-col gap-6">

            
            <div className="bg-white rounded-2xl border border-gray-200
            shadow-sm p-6">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                    Dove siamo
                </h2>

                <div className="flex flex-col gap-4 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                        <PinIcon />
                        <div>
                            <p className="font-semibold text-gray-900">
                                {ourContact.address}
                            </p>
                            <a
                                href="https://maps.google.com/?q=Fisioterapia+Bruno+Caserta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline underline-offset-2
                                hover:text-sky-600 transition-colors mt-1 inline-block"
                            >
                                Apri in Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <PhoneIcon />
                        <div>
                            <p className="font-semibold text-gray-900">
                                Telefono
                            </p>
                            <a href="tel:+393392476524"
                                className="text-brand hover:text-sky-600 transition-colors">
                                {ourContact.telephone}
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start gap-3'>
                        <MailIcon/>
                        <div>
                            <p className='font-semibold text-gray-900'>
                                Email
                            </p>
                            <a href={`mailto:${ourContact.email}`}
                            className='text-brand hover:text-sky-600 transition-colors'>
                                {ourContact.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <ClockIcon />
                        <div>
                            <p className="font-semibold text-gray-900 mb-1">
                                Orari di apertura
                            </p>
                            {
                                ourContact.orari.map(
                                    o => (
                                        <p key={o.giorni} className={`font-semibold ${o.chiuso ? 'text-red-400' : 'text-gray-900'}`}>
                                            {o.giorni}&nbsp;{o.chiuso ? 'Chiusi' : o.ore}
                                        </p>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            


            <div className="rounded-2xl overflow-hidden border border-gray-200
            shadow-sm">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6420667151237!2d14.336523675517567!3d41.076816015202645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a54359b746527%3A0x5869ac4e1af995d!2sFisioterapia%20Bruno%20Caserta!5e0!3m2!1sit!2sit!4v1734713686324!5m2!1sit!2sit"
                    width="100%"
                    height="320"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Fisioterapia Bruno Caserta"
                />
            </div>
        </div>
    )
}




function FaqItem({titolo, testo, open, onToggle}:{titolo: string, testo: string, open: boolean, onToggle: () => void}) {
    return (
        <div className={
            cn(
                'border rounded-2xl bg-white transition-shadow duration-200',
                open ? 'border-sky-200 shadow-sky-glow' : 'border-gray-200 shadow-sm'
            )}>

            <button onClick={onToggle} aria-expanded={open}
                className='w-full flex items-center justify-between gap-4
                px-6 py-4 text-left hover:bg-gray-50 transition-colors rounded-2xl'>
                <span className='text-sm font-semibold text-gray-900'>{titolo}</span>
                <span className={
                    cn(
                        'w-6 h-6 flex items-center justify-center flex-shrink-0',
                        'rounded-full transition-all duration-200',
                        open ? 'bg-sky-100 text-brand rotate-180' : 'bg-gray-100 text-gray-500'
                    )}>
                    <ChevronIcon />
                </span>
            </button>

            {open && (
                <div className='px-6 pb-5'>
                    <p className='text-sm text-gray-500 leading-relaxed'>{testo}</p>
                </div>
            )}

        </div>
    )
}

function FaqSection() {
const [aperta, setAperta] = useState<string | null>(null)

    return (
        <section className='section-padding bg-white'>
            <div className='container-main'>
                <div className='max-w-2xl mb-10'>
                    <p className='section-label'>FAQ</p>
                    <h2 className='font-display text-display-md text-gray-900 mt-1'>
                        Domande frequenti
                    </h2>
                    <p className='text-gray-500 text-sm mt-3'>
                        Le risposte alle domande che ci vengono poste piu' spesso.
                    </p>
                </div>
                <div className='columns-1 md:columns-2 gap-3 space-y-3'>
                    {
                        faq.map(
                            item => (
                                <div key={item.id} className='break-inside-avoid'>
                                    <FaqItem
                                        titolo={item.titolo}
                                        testo={item.testo}
                                        open={aperta === item.id}
                                        onToggle={() => setAperta(aperta === item.id ? null : item.id)}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}






function ParagrafoSeo() {
    const paragrafo = paragrafiSeo.find(parag => parag.id === '/Contatti')
    if (!paragrafo) return null
    return (
        <section className='section-padding bg-gray-50'>
            <div className='container-main max-w-3xl'>
                <h2 className='font-display text-xl font-bold text-gray-900 mb-4'>
                    {paragrafo.titolo}
                </h2>
                <p className='text-sm text-gray-500 leading-relaxed'>
                    {paragrafo.testo}
                </p>
            </div>
        </section>
    )
}



//icone




function ChevronIcon() {
    return (
        <svg width='14' height='14' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'
            strokeLinejoin='round' aria-hidden='true'>
            <path d='m6 9 6 6 6-6' />
        </svg>
    )
}



function PinIcon() {
    return (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2' strokeLinecap='round'
            strokeLinejoin='round' className='text-brand mt-0.5 flex-shrink-0'
            aria-hidden='true'>
            <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
            <circle cx='12' cy='10' r='3' />
        </svg>
    )
}

function PhoneIcon() {
    return (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2' strokeLinecap='round'
            strokeLinejoin='round' className='text-brand mt-0.5 flex-shrink-0'
            aria-hidden='true'>
            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
    )
}

function ClockIcon() {
    return (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2' strokeLinecap='round'
            strokeLinejoin='round' className='text-brand mt-0.5 flex-shrink-0'
            aria-hidden='true'>
            <circle cx='12' cy='12' r='10' />
            <polyline points='12 6 12 12 16 14' />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2' strokeLinecap='round'
            strokeLinejoin='round' className='text-brand mt-0.5 flex-shrink-0'
            aria-hidden='true'>
            <rect width='20' height='16' x='2' y='4' rx='2' />
            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
    )
}






export function ContattiPage() {
    return (
        <main>
            <section className="section-padding bg-gray-50">
                <div className="container-main">
                    <div className="max-w-2xl mb-10">
                        
                        <p className="section-label">
                            Contatti
                        </p>
                        <h1 className="font-display text-display-md text-gray-900 mt-1">
                            Prenota una visita
                        </h1>
                        <p className="text-gray-500 text-sm mt-3">
                            Compila il form oppure chiamaci direttamente. Ti risponderemo il prima possibile.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ContattiForm />
                        <ContattiInfo />
                    </div>

                </div>
            </section>
            <FaqSection />
            <ParagrafoSeo />
        </main>
    )
}