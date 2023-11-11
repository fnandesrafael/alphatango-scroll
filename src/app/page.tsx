'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  const websiteContentRef = useRef<HTMLElement>(
    document.querySelector('#website-content') as HTMLElement,
  );

  useEffect(() => {
    const handleContentLock = () => {
      const { scrollY } = window;

      if (scrollY < 1000) {
        websiteContentRef.current.style.position = 'fixed';
        websiteContentRef.current.style.top = '0px';
      } else {
        websiteContentRef.current.style.position = 'absolute';
        websiteContentRef.current.style.top = '1000px';
      }
    };

    window.addEventListener('scroll', handleContentLock);

    return () => {
      window.removeEventListener('scroll', handleContentLock);
    };
  }, []);

  return (
    <main id="container">
      <Header />

      <Navbar />

      <section
        id="website-content"
        className="top-0 w-full pb-16 pt-[400px]"
        ref={websiteContentRef}
      >
        <div
          id="website-content-wrapper"
          className="mx-auto flex w-[80%] flex-col items-center gap-4"
        >
          <h1 className="mb-8 w-1/2 text-center font-head text-3xl text-[#757575]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>

          <Image
            src="https://images.unsplash.com/photo-1599848609343-e0f4233d55f5?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full overflow-hidden pb-12"
            alt="Hero image of a lens flare."
            height={800}
            width={800}
            priority
          />

          <p className="text-lg">
            Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna,
            ut semper sapien. Detraxit consequat et quo num tendi nada. Em pé
            sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget.
          </p>
          <p className="text-lg">
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
            e fermentis. Manduma pindureta quium dia nois paga. Não sou faixa
            preta cumpadi, sou preto inteiris, inteiris. Praesent vel viverra
            nisi. Mauris aliquet nunc non turpis scelerisque, eget. Admodum
            accumsan disputationi eu sit. Vide electram sadipscing et per. Bota
            1 metro de cachacis aí pra viagem! Aenean aliquam molestie leo,
            vitae iaculis nisl. Quem num gosta di mim que vai caçá sua turmis!
          </p>
        </div>
      </section>
    </main>
  );
}
