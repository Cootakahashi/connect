import Head from "next/head";

export default function Layoutwrap({ children, metadata }) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterSite} />
        <meta name="twitter:title" content={metadata.ogTitle} />
        <meta name="twitter:description" content={metadata.ogDescription} />
        <meta name="twitter:image" content={metadata.ogImage} />

        <link rel="canonical" href={metadata.canonicalUrl} />
      </Head>
      <main className="mx-4 md:mx-20">{children}</main>
    </div>
  );
}
