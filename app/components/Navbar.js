import Nav from "./Nav";
import Button from "./Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center top-0 fixed w-full justify-between bg-transparent py-4 md:py-2 px-5">
        <div className=" fixedw-1/12 text-right lg:text-center md:text-center uppercase text-2xl font-semibold tracking-widest text-white ">
          <Image
            src="/Logo.png"
            alt="XLlOGO"
            className="w-full ml-2"
            width="50"
            height="50"
            layout="responsive"
          />
        </div>
        <div className="w-6/12 hidden md:block text-white ">
          <Nav />
        </div>
        <div className="w-3/12 text-right lg:text-center md:pr-10 hidden md:block">
          <Button href="#contact" variant="outline-yellow">
            Order Now
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <Image
            src="/menu.svg"
            alt="burger menu"
            className="inline-block"
            width="40"
            height="40"
          />
        </div>
      </div>

      {/* <div className="w-6/12 hidden fixed bg-blue right-0 top-0 h-full w-full">
        <Nav />
      </div> */}
    </>
  );
}
