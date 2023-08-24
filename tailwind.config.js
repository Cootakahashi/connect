/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/lpevent/backscreen/3.jpg')",
        "custom-image-md": "url('/lpevent/backscreen/11.jpg')", // 例えば、中サイズの画像のURL
      },
    },
  },
  plugins: [],
};
