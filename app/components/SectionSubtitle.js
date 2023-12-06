export default function SectionSubtitle({ leftside, children }) {
  return (
    <p
      className={`text-lg mt-2 text-gray-500 ${!leftside ? "text-center" : ""}`}
    >
      {children}
    </p>
  );
}
