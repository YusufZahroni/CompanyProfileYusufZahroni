import Image from "next/image";
//contact item
export default function ContactItem({ icon, label, value, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`flex items-start ${addClassName}`}>
      <Image src={icon} alt="icon" width="24" height="24"></Image>
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
