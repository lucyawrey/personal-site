import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <body className="h-full bg-slate-50 dark:bg-slate-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
