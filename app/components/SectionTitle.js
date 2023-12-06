export default function SectionTitle({ leftside, children }) {
  return (
    <h2
      className={`text-2xl font-semibold font-mono ${
        !leftside ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
