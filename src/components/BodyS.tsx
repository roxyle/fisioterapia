import ContCardServizi from './Containers/ContCardServizi'
import { DescServizi, Paragrafi, ServiziOfferti, TerapieStrumentali } from "@/constants/data";
import ContPlainTxt from './Containers/ContPlainTxt';
import ContTxtImage from './Containers/ContTxtImage';


const BodyS = () => {

  
  return (

    <div className='bg-terapie-pattern bg-cover'>
      <div className="p-5 flex flex-col items-center justify-center flex-wrap gap-5"> 

        

          <ContCardServizi dettaglioServizi={DescServizi}/>          
          <ContPlainTxt txt={Paragrafi}/>
          <ContTxtImage elenco={TerapieStrumentali}/>
      </div>
    </div>
  )
}

export default BodyS