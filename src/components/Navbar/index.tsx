export default function Navbar() {
  return (
    <nav
      id="nav"
      className="fixed top-0 flex w-full items-center justify-center py-4"
    >
      <div id="logo" className="relative">
        <a
          href="#"
          className="relative top-2 font-display text-sm uppercase sm:top-5 md:text-base"
        >
          Alphaflame
        </a>
        <div
          id="logo-revealer"
          className="absolute top-0 z-10 h-full w-full origin-bottom after:absolute after:top-2 after:h-full after:w-full after:bg-[#0f0f0f] after:content-[''] after:sm:top-5"
        />
      </div>
    </nav>
  );
}
