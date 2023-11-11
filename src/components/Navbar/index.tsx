'use client';

import gsap from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector('#nav') as HTMLElement;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        gsap.to(navbar, {
          opacity: 1,
        });
      } else if (window.screenY < 500) {
        gsap.to(navbar, {
          opacity: 0,
        });
      }
    });
  }, []);

  return (
    <nav
      id="nav"
      className="fixed top-0 z-20 flex w-full origin-center items-center justify-center py-4 opacity-0"
    >
      <Link
        href="#"
        className="relative top-2 font-display text-sm uppercase ease-in-out sm:top-5 md:text-base"
      >
        Alphaflame
      </Link>
    </nav>
  );
}
