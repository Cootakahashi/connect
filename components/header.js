import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Blogheader() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const node = useRef(); // for clicking outside

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsTop(currentScrollPos === 0);
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
        className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-500 ease-in-out transform bg-gray-100 ${
          isTop ? "translate-y-0" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between py-4 px-8 shadow-lg transition duration-500 ease-in-out">
          <div className="flex items-center space-x-4">
            <Link legacyBehavior href="/">
              <a>
                <Image
                  className={`-translate-x-2 ${isTop ? "scale-100" : "hidden"}`}
                  src="/logo/logo-black1.png"
                  width={120}
                  height={50}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="flex space-x-8">
            <nav
              className={`hidden md:flex space-x-7 transition-transform duration-500 ease-in-out ${
                isTop ? "-translate-x-16" : "opacity-0"
              }`}
            >
              <Link legacyBehavior href="/category/k8pvv7ov1lje">
                <a className="text-gray-800 relative group text-center">
                  Phrasal verb
                  <p className="text-xs text-center opacity-70 pt-2">
                    フレーズ
                  </p>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </Link>
              <Link legacyBehavior href="/english/blogs">
                <a className="text-gray-800 relative group text-center">
                  Blog
                  <p className="text-xs text-center opacity-70 pt-2">
                    ブログ記事
                  </p>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </Link>
              <Link legacyBehavior href="/category">
                <a className="text-gray-800 relative group text-center">
                  Category
                  <p className="text-xs text-center opacity-70 pt-2">
                    カテゴリー一覧
                  </p>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </Link>
              <Link legacyBehavior href="/prepare">
                <a className="text-gray-800 relative group text-center">
                  Company
                  <p className="text-xs text-center opacity-70 pt-2">
                    会社概要
                  </p>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </Link>
              <Link legacyBehavior href="/prepare">
                <a className="text-gray-800 relative group text-center">
                  FAQ
                  <p className="text-xs text-center opacity-70 pt-2">
                    よくある質問
                  </p>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
              </Link>
              <Link legacyBehavior href="/events">
                <button className="whitespace-nowrap self-end bg-orange-500 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out">
                  無料英会話EVENT
                </button>
              </Link>
            </nav>
          </div>

          <div className="md:hidden"></div>
        </div>
      </header>
      <button
        onClick={handleMenuToggle}
        className={`focus:outline-none text-gray-900 hover:text-gray-500 fixed top-3 right-4 p-4 md:hidde z-50 ${
          isTop ? "-translate-y-2" : "opacity-"
        }`}
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
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-50 transition duration-500 ease-in-out">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={handleMenuToggle}
              className="focus:outline-none text-white"
            >
              {" "}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col justify-center items-center h-full text-center text-white text-2xl space-y-8">
            {/* Links */}
            <Link legacyBehavior href="/">
              <a>
                <Image
                  className={`-translate-y- rounded-xl ${
                    isTop ? "scale-100" : ""
                  }`}
                  src="/logo/logo3.png"
                  width={120}
                  height={50}
                  alt="Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/category/k8pvv7ov1lje">
              <a onClick={handleMenuToggle}>Phrasal verb</a>
            </Link>
            <Link legacyBehavior href="/english/blogs">
              <a onClick={handleMenuToggle}>Blog</a>
            </Link>
            <Link legacyBehavior href="/category">
              <a onClick={handleMenuToggle}>Category</a>
            </Link>
            <Link legacyBehavior href="/prepare">
              <a onClick={handleMenuToggle}>Company</a>
            </Link>
            <Link legacyBehavior href="/events">
              <button
                className="mt-8 whitespace-nowrap self-center bg-orange-500 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-500 ease-in-out"
                onClick={handleMenuToggle}
              >
                無料英会話EVENT
              </button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Blogheader;
