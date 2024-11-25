import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContCardTerapie from "@/components/Containers/ContCardTerapie";
import { ServiziOfferti } from "@/constants/data";
import BodyH from "@/components/BodyH";


export default function Home() {
  return (

  <div className="w-screen p-0 m-0">
    <Navbar/>
    <Hero/>
    <BodyH/>
  </div>

  );
}
