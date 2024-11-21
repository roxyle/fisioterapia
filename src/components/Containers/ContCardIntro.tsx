import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { cardIntroTxt } from '@/constants/data';
import { TextContent } from '@/constants/types';
import CardIntro from '../Cards/CardIntro';
import { text } from 'stream/consumers';

type Props = {
    cardIntroTxt: TextContent[]
}

export default function ContCardIntro(props: Props){

// const ContCardIntro = (props: Props) => {
// const [introText, setIntroText] = useState<string>('');


  return (
    <>
{/*     
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[Navigation, Pagination, EffectCards]}
        className="mySwiper"
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}>

        {props.cardIntroTxt.map((txt, i)=>(
            <SwiperSlide key = {i}>
                <CardIntro text={txt.text} id={txt.id} immagine={txt.immagine} alt={txt.alt} bottone={txt.bottone} goToPage={`${txt.goToPage}`}/>
            </SwiperSlide>
            )) 
        }

    </Swiper> */}
    </>
  )
}

// export default ContCartIntro