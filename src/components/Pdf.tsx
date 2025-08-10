import { useEffect, useState } from "react";
import { isClient } from "utilities/helpers";
import type { Document, Page } from "react-pdf";
import Head from "next/head";

let DocumentAsync: typeof Document;
let PageAsync: typeof Page;
if (isClient()) {
  const { Document, Page } = await import("react-pdf");
  DocumentAsync = Document;
  PageAsync = Page;
}

const css = `
  canvas {
    padding: 0;
    margin: 0 auto 0 auto;
    width: 10px;
  }
`;

interface PdfProps {
  fileUrl: string;
}

function Pdf({ fileUrl }: PdfProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <DocumentAsync file={fileUrl} renderMode="canvas">
      <Head>
        <style>{css}</style>
      </Head>
      <PageAsync pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
    </DocumentAsync>
  ) : (
    <></>
  );
}

export default Pdf;
