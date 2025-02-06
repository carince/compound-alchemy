import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Compound Alchemy</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
