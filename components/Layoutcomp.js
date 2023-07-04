import Head from "next/head";
export default function Layoutwrap({ children }) {
  return (
    <div>
      {" "}
      <Head>
        <title>My Next.js Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="mx-5 md:mx-20">{children}</main>
    </div>
  );
}
