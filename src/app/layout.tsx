import type { Metadata } from 'next';
import { Archivo_Black, Bebas_Neue, Roboto } from 'next/font/google';
import './globals.css';

const archivoBlack = Archivo_Black({
  weight: '400',
  variable: '--font-archivo-black',
  preload: true,
  subsets: ['latin'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas-neue',
  preload: true,
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400'],
  variable: '--font-roboto',
  preload: true,
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Page Scroll Animation | Codegrid Rebuild',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${roboto.variable} ${archivoBlack.variable}  h-full min-h-[400vh] w-full bg-[#0f0f0f] font-sans text-white`}
      >
        {children}
      </body>
    </html>
  );
}
