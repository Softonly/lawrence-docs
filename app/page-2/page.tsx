"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/T.E._Lawrence_by_William_Orpen.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Giriş
            </span>
            <p className="pb-6 font-medium">
            &quot;Amaç: Arabistanlı Lawrence olarak bilinen T.E. Lawrence&apos;ın hayatını ve I. Dünya Savaşı&apos;ndaki rolünü anlamak.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Genel Bakış: Thomas Edward Lawrence, 1888-1935 yılları arasında yaşamış bir İngiliz subayı, arkeolog ve yazardı; Arap İsyanı&apos;nda Osmanlı&apos;ya karşı Araplarla işbirliği yaparak ünlendi.&quot;
            </p>
            <p className="pb-6 font-medium">
            &quot;Önem: Hayatı, Orta Doğu politikalarını etkilemiş ve popüler kültürde &apos;Lawrence of Arabia&apos; filmiyle ikonlaşmıştır.&quot;
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
