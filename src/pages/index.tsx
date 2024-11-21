import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContCardTerapie from "@/components/Containers/ContCardTerapie";
import { ServiziOfferti } from "@/constants/data";


export default function Home() {
  return (
<>
    <Navbar/>
    <Hero/>
    <ContCardTerapie servizi={ServiziOfferti}/>
    <Footer/>

</>
  );
}
