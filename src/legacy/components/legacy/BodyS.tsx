import ContCardServizi from '../Containers/ContCardServizi'
import { DescServizi, Paragrafi, TerapieOrtopediche, TerapieStrumentali } from "@/constants/data";
import ContPlainTxt from '../Containers/ContPlainTxt';
import ContTxtImage from '../Containers/ContTxtImage';
import ContTxtImage2 from '../Containers/ContTxtImage2';
import Head from 'next/head';


const BodyS = () => {


  return (
    <>
      <Head>
        <title>Servizi di Fisioterapia a Caserta</title>
        <meta
          name="description"
          content="Scopri tutti i servizi offerti dal centro di fisioterapia Bruno: massaggi, rieducazione posturale e terapie avanzate."
        />
        <meta name="keywords" content="fisioterapia caserta, terapie fisiche, massaggi caserta" />
      </Head>
      
    <div className='bg-terapie-pattern bg-cover'>
      <div className="p-5 flex flex-col items-center justify-center flex-wrap gap-5">



          <ContCardServizi dettaglioServizi={DescServizi}/>
          <ContPlainTxt txt={Paragrafi}/>
          <ContTxtImage elenco={TerapieStrumentali}/>
      </div>
    </div>
    </>
  )
}

export default BodyS