"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/end.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              Kaynakça
            </span>
            <p className="pb-6 font-medium">
            &quot;Wikipedia: T. E. Lawrence - https://en.wikipedia.org/wiki/T._E._Lawrence (Kapsamlı biyografi ve zaman çizelgesi).&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Encyclopædia Britannica: T.E. Lawrence - https://www.britannica.com/biography/T-E-Lawrence (Tarihi bağlam ve analiz).&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Jeremy Wilson, Lawrence of Arabia: The Authorised Biography (1980) - Detaylı otobiyografik çalışma.&quot;
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
