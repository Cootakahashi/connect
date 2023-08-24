import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

export function NavBar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const node = useRef(); // for clicking outside

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 50
      );
      setPrevScrollPos(currentScrollPos);
    };

    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // if inside click
        return;
      }
      // outside click
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollPos]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={node}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out transform bg-gray-900 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between py-4 px-8 shadow-lg transition duration-500 ease-in-out">
          <div className="flex items-center space-x-4">
            <Link legacyBehavior href="/">
              <a>
                <Image
                  className="-translate-x-2"
                  src="/logo/logo3.png"
                  width={120}
                  height={50}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <nav
            className={`hidden md:flex space-x-7 transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-ful"
            }`}
          >
            <Link legacyBehavior href="/category/k8pvv7ov1lje">
              <a className="text-white relative group text-center">
                Phrasal verb{" "}
                <p className="text-xs text-center opacity-70 pt-2">フレーズ</p>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/english/blogs">
              <a className="text-white relative group text-center">
                Blog
                <p className="text-xs text-center opacity-70 pt-2">
                  ブログ記事
                </p>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/category">
              <a className="text-white relative group text-center">
                Category
                <p className="text-xs text-center opacity-70 pt-2">
                  カテゴリー一覧
                </p>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/prepare">
              <a className="text-white relative group text-center">
                Company
                <p className="text-xs text-center opacity-70 pt-2">会社概要</p>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/prepare">
              <a className="text-white relative group text-center">
                FAQ
                <p className="text-xs text-center opacity-70 pt-2">
                  よくある質問
                </p>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </a>
            </Link>
            <ScrollLink to="formSection" smooth={true} duration={500}>
              <button className="whitespace-nowrap self-end bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md md:hover:bg-orange-700 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-orange-500 md:transition duration-500 ease-in-out">
                無料英会話EVENT
              </button>
            </ScrollLink>
          </nav>

          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="focus:outline-none text-white hover:text-gray-200"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden transition duration-500 ease-in-out">
              <nav className="mt-4 space-y-4">
                <Link legacyBehavior href="/category/k8pvv7ov1lje">
                  <a className="block text-white hover:text-gray-200 underline-hover">
                    Phrasal verb
                  </a>
                </Link>
                <Link legacyBehavior href="/english/blogs">
                  <a className="block text-white hover:text-gray-200 underline-hover">
                    Blog
                  </a>
                </Link>
                <Link legacyBehavior href="/category">
                  <a className="block text-white hover:text-gray-200 underline-hover">
                    Category
                  </a>
                </Link>
                <Link legacyBehavior href="/events">
                  <a className="block text-white hover:text-gray-200 underline-hover">
                    Event
                  </a>
                </Link>
                <Link legacyBehavior href="/prepare">
                  <a className="block text-white hover:text-gray-200 underline-hover">
                    Company
                  </a>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default NavBar;
