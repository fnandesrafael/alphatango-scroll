'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  useEffect(() => {
    const header = document.querySelector('#header');
    const letters = document.querySelectorAll('#letter');
    const logo = document.querySelector('#logo a');
    const websiteContent: HTMLElement = document.querySelector(
      '#website-content',
    ) as HTMLElement;

    const lastScroll = 0;
    const sectionHeight = 150;

    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      if (scrollY < 1000) {
        websiteContent.style.position = 'fixed';
        websiteContent.style.top = '0px';
      } else {
        websiteContent.style.position = 'absolute';
        websiteContent.style.top = '1000px';
      }
    });
  }, []);

  return (
    <main id="container">
      <Header />

      <Navbar />

      <section id="website-content" className="top-0 w-full pb-16 pt-[400px]">
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
