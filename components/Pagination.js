//components/Pagination.js
import Link from "next/link";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 8;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex gap-8 mt-10">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <Link key={index} href={`/english/page/${number}`}>
          <li className="border p-2 px-5 hover:bg-blue-500 transition duration-300 ease-in-out">
            {number}
          </li>
        </Link>
      ))}
    </ul>
  );
};
