import Hero from "@/legacy/components/legacy/Hero";
import Navbar from "@/legacy/components/legacy/Navbar";
import BodyH from "@/legacy/components/legacy/BodyH";
import Footer from "@/legacy/components/legacy/Footer";
import {NewHero} from "@/legacy/components/sections/NewHero";


export default function Home() {
  return (

  <>
    <Navbar/>
    {/* <Hero/> */}
    <NewHero/>
    <BodyH/>
    <Footer/>
  </>

  );
}