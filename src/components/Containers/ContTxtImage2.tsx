'use client'
import { Terapie } from '@/constants/types'
import React from 'react'
import Image from 'next/image'

type MyProps = {
  elenco: Terapie[]
}

const ContTxtImage2 = (ortopedia: MyProps) => {


  return (
    <div className='bg-terapie-strum-pattern bg-cover rounded-xl'>
        <h2 className='rounded-t-xl font-bold text-4xl title'> Il Nostro Medico Chirurgo Ortopedico </h2>

        <div className='flex flex-col lg:flex-row items-center justify-center
        bg-white bg-opacity-50 rounded-b-xl'>

          <div className='text-black flex flex-col items-center justify-center '>

              <p className='text-center text-pretty p-5'>
              La formazione del<b> Dott. Luigi Carandente</b>, 
              abilitato alla professione medica ed iscritto all'Ordine dei Medici Chirurghi e Odontoiatri di Caserta, si distingue per esperienze di alto livello sia in Italia che all’estero. Durante il percorso universitario ha svolto un internato presso il CHU d’Angers, in Francia. Successivamente, ha arricchito le sue competenze con una fellowship di 4 mesi presso l’Hôpital de la Croix-Rousse a Lione, dove ha approfondito tecniche avanzate di chirurgia ortopedica e traumatologica.
In Italia, infine ha frequentato durante il periodo di specializzazione l'Unità operativa di Ortopedia della Spalla e del Gomito, l'Unità di Ricostruzione Articolare del Ginocchio, l' Unità di Ortopedia Pediatrica, l'Unità di Chirurgia della Mano e l'Unità di chirurgia dell'Anca presso l'Istituto clinico Humanitas eccellenza nazionale
Dal 2020 al 2024 è stato membro dello staff medico della Pallacanestro Varese (Lega Basket Serie A), occupandosi di prevenzione, diagnosi e trattamento delle patologie muscolo-scheletriche degli atleti.
              </p>

              {/* 
              <ul className='list-disc'>
                      {ortopedia.elenco.map((e) => ( <li key={e.id}>{e.nomeTerapia}</li> ))}
              </ul> */}


              <div className='hidden lg:flex lg:flex-row'>
                <Image src='/chirurgia/1.jpg' alt={'chirurgia ginocchio'}
                width={300} height={300}
                className='p-5'/>
                <Image src='/chirurgia/2.jpg' alt={'chiururgia osteopatia'}
                width={300} height={300}
                className='p-5'/>
                <Image src='/chirurgia/3.jpg' alt={'anche e gambe'}
                width={400} height={300}
                className='p-5'/>
              </div>

              <p className='text-center text-pretty p-5'>
              Nel 2024 ha completato la specializzazione in Ortopedia e Traumatologia presso Humanitas University, Milano, conseguendo la votazione di 70/70 e Lode.
              Attualmente, il Dott. Luigi Carandente esercita la propria attività clinica e chirurgica presso strutture di primo livello, con un focus sulla ricostruzione protesica mini-invasiva dell’anca (via anteriore) e del ginocchio, nonché sulla chirurgia della spalla e della traumatologia. È anche attivo nella medicina sportiva, utilizzando tecniche innovative come infiltrazioni ecoguidate e PRP (Plasma Ricco di Piastrine).
              </p>

          </div>



        </div>
    </div>
  )
}

export default ContTxtImage2