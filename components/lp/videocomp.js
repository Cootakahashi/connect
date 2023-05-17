import React from "react";

export default function Videocomp() {
  return (
    <div className="flex justify-center items-center min-h-screen mt-20">
      <div className="w-full h-full">
        <video controls className="w-full h-full object-contain p-40">
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
