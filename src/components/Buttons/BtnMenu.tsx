"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Hook per ottenere il percorso attuale

const BtnMenu = () => {
  const pathname = usePathname(); // Ottieni il percorso corrente

  return (
    <div className="md:py-5 flex flex-1 flex-row flex-wrap justify-evenly items-center text-white text-lg gap-3">
      <Link
        href="/"
        id="Home"
        className={`${
          pathname === "/" ? "underline font-bold" : ""
        } hover:underline hover:font-bold underline-offset-4`}
      >
        Home
      </Link>
      <Link
        href="/Servizi"
        id="Servizi"
        className={`${
          pathname === "/Servizi" ? "underline font-bold" : ""
        } hover:underline hover:font-bold underline-offset-4`}
      >
        Servizi
      </Link>
      <Link
        href="/About"
        id="About"
        className={`${
          pathname === "/About" ? "underline font-bold" : ""
        } hover:underline hover:font-bold underline-offset-4`}
      >
        Chi Siamo
      </Link>
      <Link
        href="/Contatti"
        id="Contatti"
        className={`${
          pathname === "/Contatti" ? "underline font-bold" : ""
        } hover:underline hover:font-bold underline-offset-4`}
      >
        Contatti
      </Link>
    </div>
  );
};

export default BtnMenu;
