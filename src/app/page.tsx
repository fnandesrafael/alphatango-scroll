'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  const contentRef = useRef<HTMLElement>(
    document.querySelector('#content') as HTMLElement,
  );

  useEffect(() => {
    const handleContentLock = () => {
      const { scrollY } = window;

      if (scrollY < 900) {
        contentRef.current.style.position = 'fixed';
        contentRef.current.style.top = '0px';
      } else {
        contentRef.current.style.position = 'absolute';
        contentRef.current.style.top = '900px';
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
        id="content"
        className="w-full pb-16 pt-[400px]"
        ref={contentRef}
      >
        <div
          id="container"
          className="mx-auto flex w-[70%] flex-col items-center gap-4 text-center text-[#757575]"
        >
          <h1 className="mb-8 w-1/2 font-head text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>

          <div className="group mb-12 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545431766-45ff67845191?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-150 group-hover:blur-lg"
              alt="Hero image of a lens flare."
              height={800}
              width={800}
              priority
            />
          </div>

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
