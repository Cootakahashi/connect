import Head from "next/head";

export default function Layoutwrap({ children, metadata, isMargin = false }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <title>{metadata.title}</title>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="ja" />
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${isMargin ? "mx-4 md:mx-20" : ""}`}>{children}</main>
    </div>
  );
}
