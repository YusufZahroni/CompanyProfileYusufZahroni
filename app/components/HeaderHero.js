// import Navbar from "./Navbar";
import Button from "./Button";

export default function HeaderHero() {
  return (
    <div className="text-center h-screen  flex flex-col justify-center bg-[url('/header-hero.png')]">
      <div className="  flex flex-col justify-center mt-36">
        <h1 className="xl:text-6xl lg:text-2xl md:text-xl sm:text-base text-white font-serif w-10/12 md:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
          Selamat Datang di XL Axiata
        </h1>
        <br />
        <h1 className="xl:text-4xl lg:text-2xl md:text-xl sm:text-base text-white font-serif w-10/12 md:w-8/12 lg:w-10/12 mx-auto mb-10 leading-relaxed">
          <span className="text-6xl">#1</span> Operator Konvergensi di Indonesia
        </h1>
        <p className="text-white text-opacity-80  xl:text-lg lg:text-lg md:text-sm text-xs w-8/12 md:w-4/12 mx-auto mt-6 mb-0 leading-relaxed">
          #JadiLebihBaik
        </p>
        <p className="text-5xl">
          <Button
            href="#profile"
            className="mt-4 mb-4 md:mb-16 font-bold py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More Product
          </Button>
        </p>
      </div>
    </div>
  );
}
