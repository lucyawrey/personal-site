import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <body id="home" className="h-full bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
