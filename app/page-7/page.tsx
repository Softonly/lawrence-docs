"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pag from "@/public/images/The_grave_of_T._E._Lawrence_in_the_separate_churchyard_of_St_Nicholas'_Church,_Moreton.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Sonuç (Ölümü ve Mirası)
            </span>
            <p className="pb-6 font-medium">
            &quot;Ölüm: 1935&apos;te motosiklet kazasında öldü, 47 yaşındaydı.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Miras: Orta Doğu&apos;da ulus oluşumuna etki etti, ancak sömürgecilik eleştirileri aldı.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Düşünce: Lawrence&apos;ın hayatı, idealizm ve gerçeklik arasındaki çatışmayı gösterir; gelecekte biyografiler daha fazla incelenebilir.&quot;
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
