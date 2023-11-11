'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Header() {
  const headerRef = useRef<HTMLElement>(
    document.querySelector('#header') as HTMLElement,
  );
  const sectionHeight = 150;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const letters = document.querySelectorAll('#letter');
      const orderPairs = [
        [4, 5],
        [3, 6],
        [2, 7],
        [1, 8],
        [0, 9],
      ];

      orderPairs.forEach((pair, index) => {
        const { scrollY } = window;
        const initScroll = sectionHeight * index;

        if (scrollY >= initScroll) {
          const moveFactor = Math.min(
            1,
            (scrollY - initScroll) / sectionHeight,
          );

          const translateY = -moveFactor * headerRef.current.offsetHeight;

          pair.forEach((i) => {
            const letter = letters[i];
            gsap.to(letter, {
              y: translateY,
              zIndex: 10 - moveFactor,
            });
          });
        } else {
          pair.forEach((i) => {
            const letter = letters[i];
            gsap.to(letter, {
              y: 0,
              zIndex: 10,
            });
          });
        }
      });
    });
  });

  return (
    <header
      id="header"
      ref={headerRef}
      className="fixed top-0 z-10 mt-12 flex w-full p-4"
    >
      {'alphaflame'.split('').map((l, index) => (
        <span
          key={index}
          id="letter"
          className="flex-1 text-center font-head text-6xl uppercase sm:text-[8rem] md:text-[10rem] lg:text-[14rem]"
        >
          {l}
        </span>
      ))}
    </header>
  );
}
