"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pageA4 from "@/public/images/Woolley_&_Lawrence_at_Carchemish.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Arkeolojik Çalışmaları
            </span>
            <p className="pb-6 font-medium">
            - &quot;İlk Görevler: 1910-1914 arası British Museum için Orta Doğu&apos;da kazılar yaptı, Suriye&apos;deki Carchemish&apos;te çalıştı.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Keşifler ve Haritalar: Negev Çölü&apos;nde askeri harita çıkardı, Gertrude Bell gibi isimlerle tanıştı.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Etki: Bu çalışmalar, savaşta istihbarat becerilerini geliştirdi ve bölgeyi tanımasını sağladı.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={pageA4} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
