"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/FeisalPartyAtVersaillesCopy.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Savaş Sonrası Yaşam ve Edebi Kariyeri
            </span>
            <p className="pb-6 font-medium">
            &quot;Politik Rol: 1919 Paris Konferansı&apos;nda Faysal&apos;ı temsil etti, Churchill&apos;in danışmanı oldu.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Askeri Kaçışlar: İsim değiştirerek RAF ve Tank Corps&apos;ta çalıştı, ünden uzaklaştı.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Eserler: &apos;Seven Pillars of Wisdom&apos; kitabıyla anılarını yazdı, gerilla savaşı üzerine makaleler yayımladı.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pag} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
