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

      <section id="website-content">
        <div id="website-content-wrapper">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>

          <Image
            src="https://images.unsplash.com/photo-1599848609343-e0f4233d55f5?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
            alt="Hero image of a lens flare."
            height={800}
            width={800}
            priority
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            sapiente obcaecati voluptates earum quam assumenda quas! Eos
            recusandae quos illum numquam! Eius totam optio adipisci voluptatem
            eligendi repellat explicabo nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            sapiente obcaecati voluptates earum quam assumenda quas! Eos
            recusandae quos illum numquam! Eius totam optio adipisci voluptatem
            eligendi repellat explicabo nulla.
          </p>
        </div>
      </section>
    </main>
  );
}
