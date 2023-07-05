import Head from "next/head";
export default function Layoutwrap({ children }) {
  return (
    <div>
      {" "}
      <Head>
        <title>Restart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="mx-4 md:mx-20">{children}</main>
    </div>
  );
}
