export default function Fixback() {
  return (
    <>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: "url('/canvawide/1.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              height: "61vh",
              width: "100%",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl"></div>
        </div>
        <div className="h-screen bg-white">{/* Other content here */}</div>
      </div>
    </>
  );
}
