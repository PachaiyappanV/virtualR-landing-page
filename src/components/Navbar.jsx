import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
const Navbar = () => {
  return (
    <nav className="sticky top-0 backdrop-blur-lg z-50 py-3 border-b border-neutral-700">
      <div className="container mx-auto px-4 relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-12 items-center justify-center">
            <a href="#" className="py-2 px-3 border rounded-md capitalize">
              sign in
            </a>
            <a
              href="#"
              className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
