'use client'
import { ContactFormData } from '@/constants/types'
import {useForm} from 'react-hook-form'
import { SectionHeader } from '../ui/SectionHeader'
import { ourContact } from '@/constants/data'


export function Contact(){
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
            isSubmitSuccessful
        }
    } = useForm<ContactFormData>()



    async function onSubmit(data:ContactFormData) {
        //EmailJs
        console.log('Form data:',data)
        //sim
        await new Promise(resolve=>setTimeout(resolve,800))
        reset()
    }




    return(
        <section id='form' className='section-padding bg-white'>
            <div className='container-main'>
                <div className='grid grid-cols-1 lg:grid-cols-2
                gap-12 lg:gap-20
                items-start'>
                    <div className='flex flex-col gap-8'>
                        <SectionHeader title={'Siamo qui per te'} label='Contattaci' sub='Chiamaci o inviaci un messaggio. Ti risponderemo al più presto!'/>
                        <ul className='flex flex-col gap-5'>
                            <li className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-xl bg-brand/10
                                flex items-center justify-center flex-shrink-0'>
                                    <PhoneIcon/>
                                </div>
                                <div>
                                    <p className='text-xs font-bold tracking-widest uppercase text-gray-400 mb-0.5'>
                                        Telefono
                                    </p>
                                    <a href={ourContact.telefonoHref}
                                    className='text-gray-900 font-semibold hover:text-brand transition-colors'>
                                        {ourContact.telephone}
                                    </a>
                                </div>
                            </li>

                            <li className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-xl bg-brand/10
                                flex items-center justify-center flex-shrink-0'>
                                    <MailIcon/>
                                </div>
                                <div>
                                    <p className='text-xs font-bold tracking-widest uppercase text-gray-400 mb-0.5'>
                                        Email</p>
                                        <a href={`mailto:${ourContact.email}`}
                                        className='text-gray-900 font-semibold hover:text-brand transition-colors'>
                                            {ourContact.email}
                                        </a>
                                </div>
                            </li>

                            <li className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-xl bg-brand/10
                                flex items-center justify-center flex-shrink-0'>
                                    <MapPinIcon/>
                                </div>
                                <div>
                                    <p className='text-xs font-bold tracking-widest uppercase text-gray-400 mb-0.5'>
                                        Indirizzo
                                    </p>
                                    <p className='text-gray-900 font-semibold'>
                                        {ourContact.address}
                                    </p>
                                </div>
                            </li>

                            <li className='flex items-start gap-4'>
                                <div className='w-10 h-10 rounded-xl bg-brand/10
                                flex items-center justify-center flex-shrink-0'>
                                    <ClockIcon/>
                                </div>
                                <div>
                                    <p className='text-xs font-bold tracking-widest uppercase
                                    text-gray-400 mb-0.5'>
                                    Orari
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
                            </li>
                        </ul>
                    </div>



                    <div className='bg-gray-50 rounded-3xl p-6 md:p-8'>
                        {
                            isSubmitSuccessful? (
                                <div className='flex flex-col items-center justify-center gap-4 py-12 text-center'>
                                    <div className='w-14 h-14 rounded-full bg-brand/10
                                    flex items-center justify-center'>
                                        <CheckIcon/>
                                    </div>
                                    <h3 className='font-display text-xl text-gray-900'>
                                        Messaggio inviato!
                                    </h3>
                                    <p className='text-gray-500 text-sm'>
                                        Ti risponderemo al più presto
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)}
                                className='flex flex-col gap-4'>
                                    
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                                        <div className='flex flex-col gap-1.5'>
                                            <label className='text-xs font-semibold text-gray-600'>
                                                Nome <span className='text-brand'>*</span>
                                            </label>
                                            <input className={`px-4 py-2.5 rounded-xl border
                                            text-sm bg-white outline-none transition-colors
                                            focus:border-brand focus:ring-2 focus:ring-brand/20
                                            ${errors.nome? 'border-red-400':'border-gray-200'}`}
                                            {
                                                ...register('nome',{required:'Campo obbligatorio'})
                                            }
                                            placeholder='Il tuo nome'
                                            />
                                            {
                                                errors.nome&&(
                                                    <p className='text-xs text-red-500'>
                                                        {errors.nome.message}
                                                    </p>
                                                )
                                            }
                                        </div>

                                        <div className='flex flex-col gap-1.5'>
                                            <label className='text-xs font-semibold text-gray-600'>
                                                Cognome <span className='text-brand'>*</span>
                                            </label>
                                            <input className={`px-4 py-2.5 rounded-xl border
                                            text-sm bg-white outline-none transition-colors
                                            focus:border-brand focus:ring-2 focus:ring-brand/20
                                            ${errors.cognome? 'border-red-400':'border-gray-200'}`}
                                            {
                                                ...register('cognome',{required:'Campo obbligatorio'})
                                            }
                                            placeholder='Il tuo cognome'
                                            />
                                            {
                                                errors.cognome&&(
                                                    <p className='text-xs text-red-500'>
                                                        {errors.cognome.message}
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>


                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold text-gray-600'>
                                            Telefono <span className='text-brand'>*</span>
                                        </label>
                                        <input className={`px-4 py-2.5 rounded-xl border
                                        text-sm bg-white outline-none transition-colors
                                        focus:border-brand focus:ring-2 focus:ring-brand/20
                                        ${errors.telefono? 'border-red-400':'border-gray-200'}`}
                                        {
                                            ...register('telefono',{
                                                required: 'Campo obbligatorio',
                                                pattern: {
                                                    value:/^[0-9\s\+\-]{7,15}$/,
                                                    message:'Numero non valido'
                                                }
                                            })
                                        }
                                        placeholder='+39 333 1234567' type='tel'
                                        />
                                        {
                                            errors.telefono&&(
                                                <p className='text-xs text-red-500'>
                                                    {errors.telefono.message}
                                                </p>
                                            )
                                        }
                                    </div>


                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold text-gray-600'>
                                            Email
                                        </label>
                                        <input className={`px-4 py-2.5 rounded-xl border
                                        text-sm bg-white outline-none transition-colors
                                        focus:border-brand focus:ring-2 focus:ring-brand/20
                                        ${errors.email? 'border-red-400':'border-gray-200'}`}
                                        {
                                            ...register('email',{
                                                required: 'Campo obbligatorio',
                                                pattern: {
                                                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message:'Email non valida'
                                                }
                                            })
                                        }
                                        placeholder='maria.rossi@email.com' type='email'
                                        />
                                        {
                                            errors.email&&(
                                                <p className='text-xs text-red-500'>
                                                    {errors.email.message}
                                                </p>
                                            )
                                        }
                                    </div>


                                    <div className='flex flex-col gap-1.5'>
                                        <label className='text-xs font-semibold text-gray-600'>
                                            Messaggio <span className='text-brand'>*</span>
                                        </label>
                                        <textarea className={`px-4 py-2.5 rounded-xl border
                                        text-sm bg-white outline-none transition-colors
                                        focus:border-brand focus:ring-2 focus:ring-brand/20
                                        resize-none
                                        ${errors.messaggio? 'border-red-400':'border-gray-200'}`}
                                        {
                                            ...register('messaggio',{required:'Campo obbligatorio'})
                                        }
                                        placeholder='Descrivi brevemente il tuo problema, o la terapia che cerchi'
                                        rows={5}
                                        />
                                        {
                                            errors.messaggio&&(
                                                <p className='text-xs text-red-500'>
                                                    {errors.messaggio.message}
                                                </p>
                                            )
                                        }
                                    </div>


                                    <button type='submit' disabled={isSubmitting}
                                    className='mt-2 w-full py-3 rounded-xl shadow-sky
                                    bg-brand hover:bg-brand-dark transition-colors
                                    text-white font-semibold text-sm
                                    disabled:opacity-60 disabled:cursor-not-allowed'>
                                        {isSubmitting?'Invio in corso...':'Invia messaggio'}
                                    </button>
                                    <p className='text-xs text-gray-400 text-center'>
                                        I campi contrassegnati con <span className='text-brand'>*</span> sono obbligatori
                                    </p>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}





//icone
function PhoneIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'
        viewBox='0 0 24 24' fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='text-brand' aria-hidden='true'>
            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'
        viewBox='0 0 24 24' fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='text-brand' aria-hidden='true'>
            <rect width='20' height='16' x='2' y='4' rx='2' />
            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
    )
}

function MapPinIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'
        viewBox='0 0 24 24' fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='text-brand' aria-hidden='true'>
            <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
            <circle cx='12' cy='10' r='3' />
        </svg>
    )
}

function ClockIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'
        viewBox='0 0 24 24' fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='text-brand' aria-hidden='true'>
            <circle cx='12' cy='12' r='10' />
            <polyline points='12 6 12 12 16 14' />
        </svg>
    )
}

function CheckIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
        viewBox='0 0 24 24' fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='text-brand' aria-hidden='true'>
            <path d='M20 6 9 17l-5-5' />
        </svg>
    )
}