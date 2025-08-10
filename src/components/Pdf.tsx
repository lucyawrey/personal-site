import { useEffect, useState } from "react";
import { isClient } from "utilities/helpers";

let DocumentAsync: any;
let PageAsync: any;
if (isClient()) {
  const { Document, Page } = await import("react-pdf");
  DocumentAsync = Document;
  PageAsync = Page;
}

interface PdfProps {
  fileUrl: string;
}

function Pdf({ fileUrl }: PdfProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <DocumentAsync file={fileUrl}>
      <PageAsync pageNumber={1} />
    </DocumentAsync>
  ) : (
    <></>
  );
}

export default Pdf;
