import Image from 'next/image';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main
      id="container"
      className="container flex flex-col items-center justify-center px-[3vw]"
    >
      <Header />

      <Navbar />

      <section
        id="website-content"
        className="flex flex-col items-center gap-4 pb-20 pt-[500px] text-center"
      >
        <h1 className="text-2xl text-[#757575]">
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
          Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut
          semper sapien. Detraxit consequat et quo num tendi nada. Em pé sem
          cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
          Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque,
          eget.
        </p>
        <p className="text-lg">
          Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
          fermentis. Manduma pindureta quium dia nois paga. Não sou faixa preta
          cumpadi, sou preto inteiris, inteiris. Praesent vel viverra nisi.
          Mauris aliquet nunc non turpis scelerisque, eget.
        </p>
      </section>
    </main>
  );
}
