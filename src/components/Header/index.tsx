export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 z-10 mt-12 flex w-full p-4 after:absolute after:left-0 after:top-full after:z-10 after:h-full after:w-full after:bg-[#0f0f0f] after:content-['']"
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
