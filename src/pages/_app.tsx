import "styles/globals.css";
import type { AppProps } from "next/app";
import { isClient } from "utilities/helpers";

// Configure PDF worker
if (isClient()) {
  let { pdfjs } = await import("react-pdf");

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
