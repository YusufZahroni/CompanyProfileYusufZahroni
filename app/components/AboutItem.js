import Image from "next/image";

export default function AboutItem({ name, description, image }) {
  return (
    <article className="text-center md:w-10/12 md:mx-10">
      <Image
        src={image}
        alt="portfolio 1"
        className="w-full rounded-lg"
        width="475"
        height="357"
      />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-grey-400">{description}</p>
    </article>
  );
}
