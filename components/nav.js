import Image from "next/image";
import Link from "next/link";
export function NavBar() {
  return (
    <>
      <nav className="hidden md:flex absolute top-0 w-full h-16 items-center justify-between bg-blue/50 overflow-hidden">
        <div className="">
          <Link href="/" passHref>
            {/* <Image
              className=" pt-"
              src="/logo/3-2.png"
              alt="logo"
              height={100}
              width={100}
              priority
            /> */}
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <Link href="/aboutus" passHref>
            <div className="p-2 cursor-pointer">一日一問</div>
          </Link>
          <Link href="/aboutus" passHref>
            <div className="p-2 cursor-pointer">単語学習</div>
          </Link>
          <Link href="/portforio" passHref>
            {" "}
            <div className="p-2 cursor-pointer">文法記事</div>
          </Link>

          {/* <Link href="/aboutus" passHref>
            {" "}
            <div className="p-2 cursor-pointer">料金プラン</div>
          </Link> */}

          <Link href="/blog/allblog" passHref>
            {" "}
            <div className="p-2 cursor-pointer">オンライン交流会</div>
          </Link>
          <Link href="/blog/allblog" passHref>
            <Image
              className=""
              src="/logo/3.png"
              alt="logo"
              height={100}
              width={100}
              priority
            />
          </Link>

          {/* <div className="my-auto ml-auto block cursor-pointer pr-4">
            <div id="burger">
              <div className="relative top-0 h-1 w-8 rounded-r bg-stone-700 shado"></div>
              <div className="mt-1 h-1 w-8 rounded-r bg-stone-700 opacity-100"></div>
              <div className="relative top-0 mt-1 h-1 w-8 rounded-r bg-stone-700"></div>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}
export default NavBar;
