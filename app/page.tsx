"use client";
import DestinasiFavorite from "@/sections/DestinasiFavorite";
import Home from "@/sections/Home";
import Sponsor from "@/sections/Sponsor";
import Reservasi from "@/sections/Reservasi";
import CariTempat from "@/sections/CariTempat";
import Gallery from "@/sections/Gallery";
export default function Page() {
  return (
    <main className="">
      <Home />
      <Sponsor />
      <DestinasiFavorite />
      <Reservasi />
      <CariTempat />
      <Gallery />
    </main>
  );
}
