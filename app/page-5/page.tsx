"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/500px-T._E._Lawrence_and_L._Woolley_at_Carchemish_(1913).jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Birinci Dünya Savaşı ve Arap İsyanı
            </span>
            <p className="pb-6 font-medium">
            &quot;Savaşa Katılım: 1914&apos;te Mısır&apos;da Arab Bureau&apos;ya katıldı, Arapları Osmanlı&apos;ya karşı örgütledi.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Ana Olaylar: Faysal&apos;la çalışıp demiryollarını sabotajladı, Akabe ve Şam&apos;ı ele geçirdi.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Tartışmalı Anlar: Dera&apos;da yakalanma ve işkence iddiaları, gerilla taktikleriyle kahraman oldu.&quot;
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
