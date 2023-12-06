export default function Button({
  href,
  className,
  variant,
  children,
  notpill,
}) {
  const addClassName = className ? `${className}` : "";
  const varians = {
    "outline-yellow":
      "border border-yellow-500 text-yellow-500 hover:border-yellow-300 hover:text-yellow-300",
    "fullfilled-yellow": "bg-yellow-500 text-black hover:bg-yellow-300",
    "fullfilled-black": "bg-black text-white hover:bg-opacity-70",
  };
  const pickedVariant = varians[variant];

  return (
    <a
      href={href}
      className={`text-lg px-10 py-3 inline-block ${
        !notpill ? "rounded-full" : ""
      } ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
