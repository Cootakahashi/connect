import React from "react";
import Image from "next/image";

export default function EventCard({ event }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };
  return (
    <div className="w-full my-4 p-4 bg-white rounded-lg shadow-lg">
      <Image
        src={event.image.url}
        alt={event.title}
        width={500}
        height={300}
        objectFit="cover"
        className="rounded"
      />
      <h2 className="mt-4 font-bold text-xl sm:text-2xl">{event.title}</h2>
      <p className="text-gray-700 sm:text-lg">{event.date}</p>
      <p className="text-gray-700 sm:text-lg">{event.description}</p>
      <a
        href={event.url}
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        参加する
      </a>
    </div>
  );
}
