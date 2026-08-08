import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#1d293a]/50 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link
            href="/"
            className="text-3xl font-bold text-[#16f2b3]"
          >
             AYB
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          id="navbar-default"
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
        >
          <li>
            <Link
              href="/#about"
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#experience"
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#skills"
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#education"
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/#projects"
              className="block px-4 py-2 no-underline outline-none"
            >
              <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;