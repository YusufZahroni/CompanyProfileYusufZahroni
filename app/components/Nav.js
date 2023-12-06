import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <>
      <ul className="flex justify-center space-x-10 text-white ">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/teams">Teams</NavItem>
        <NavItem href="/about">About Us</NavItem>
      </ul>
    </>
  );
}
