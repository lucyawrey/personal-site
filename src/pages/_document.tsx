import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  const bgClass = process.env.NODE_ENV === "production" ? "bg-gray-100" : "bg-[#86cecb]";
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <body id="home" className={`h-full ${bgClass}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
