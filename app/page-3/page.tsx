"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import pageA4 from "@/public/images/2_Polstead_Road,_Oxford_-_geograph.org.uk_-_1984429.jpg";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[40px] font-bold text-black dark:text-white`}
            >
              Erken Yaşamı ve Eğitimi
            </span>
            <p className="pb-6 font-medium">
            - &quot;Doğum ve Aile: 1888&apos;de Galler&apos;de doğdu, ailesi evlilik dışı ilişki nedeniyle sırlarla doluydu ve Oxford&apos;a yerleştiler.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Çocukluk Deneyimleri: Mimari ve anıtlara ilgi duydu, 1905&apos;te kısa süreli askeri deneyim yaşadı.&quot;
            </p>
            <p className="pb-6 font-medium">
            - &quot;Eğitim: Oxford&apos;da tarih okudu, Haçlı Seferleri üzerine tez yazdı ve saha araştırmaları yaptı.&quot;
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
