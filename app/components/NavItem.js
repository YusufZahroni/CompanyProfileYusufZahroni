import Link from "next/link";

export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-white text-lg font-semibold hover:text-opacity-95 hover:cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}

// fixed top-0 w-full bg-blue-700 p-4
