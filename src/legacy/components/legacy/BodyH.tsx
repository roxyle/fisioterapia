import ContCardTerapie from '../Containers/ContCardTerapie'
import { Paragrafi, ServiziOfferti} from "@/constants/data";
import ContPlainTxt from '../Containers/ContPlainTxt';


const BodyH = () => {


  return (

    <div className='bg-terapie-pattern bg-cover'>
      <div className="p-2 flex flex-col items-center justify-center flex-wrap gap-2">
        <ContPlainTxt txt={Paragrafi}/>
        <ContCardTerapie terapie={ServiziOfferti}/>
      </div>
    </div>
  )
}

export default BodyH