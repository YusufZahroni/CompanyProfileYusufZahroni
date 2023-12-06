import Image from "next/image";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";

export default function Services() {
  return (
    <>
      <div className=" h-full">
        <section className="py-32 " id="services">
          <div className="container mx-auto ">
            <SectionTitle className="font-bold">SERVICES</SectionTitle>
            <SectionSubtitle>Kartu Perdana Xtra Combo Flex</SectionSubtitle>

            <div className="flex flex-wrap item-center w-10/15 mx-auto mt-20">
              <div className="md:w-5/12 w-full px-6 mb-10 md:mb-0">
                <Image
                  src="/perdana1.png"
                  alt="product"
                  className="w-full"
                  width="470"
                  height="300"
                />
              </div>
              <div className="md:w-7/12 w-full px-10 ">
                <p className="text-lg leading-relaxed text-justify mt-10 text-2xl ">
                  Beli kartu perdana
                  <span className="font-bold"> PROS CHAMPION</span> dan nikmatin
                  bonus kuota aktivasi!
                  <br />- Siap Main Game Seharian Dengan Kuota Besar
                  <br />- Unlimited MLBB dan FreeFire.
                  <br />- Merchandise X-Clusive Dyland Pros.
                </p>
              </div>
              <br />
              <div className="md:w-5/12 w-full px-6 mt-10 mb-10 md:mb-0">
                <Image
                  src="/perdana2.png"
                  alt="product"
                  className="w-full"
                  width="550"
                  height="300"
                  objectPosition={"center"}
                />
              </div>
              <div className="md:w-7/12 w-full px-10 mt-10">
                <p className="text-lg leading-relaxed text-justify mt-10 text-1.2xl">
                  Beli Xtra <span className="font-bold">COMBO FLEX</span>, kamu
                  bisa bebas pilih bonusnya. Aktifkan sekarang dan kamu bisa
                  langsung mendapatkan Bonus Double Kuota Setahun Penuh setiap
                  kali isi ulang paket data. Tonton video untuk ambil bonus kamu
                  di Aplikasi my
                  <span className="font-bold">XL</span>.
                  <br />
                  - Kuota utama lebih besar dan anti hangus image.
                  <br />
                  - Bonus kuota aplikasi & nelpon ke semua operator.
                  <br />
                  - Akses langsung Unlimited aplikasi produktivitas.
                  <br />- Bonus Vidio Platinum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
