import {Contact} from '@/components/sections/Contact'
import {CtaBand} from '@/components/sections/CtaBand'
import {Hero} from '@/components/sections/Hero'
import {Services} from '@/components/sections/Services'
import {paragrafiSeo} from '@/constants/data'

function ParagrafoSeo() {
    const paragrafo = paragrafiSeo.find(p => p.id === '/')
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

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <CtaBand />
            <Contact />
            <ParagrafoSeo />
        </div>
    )
}