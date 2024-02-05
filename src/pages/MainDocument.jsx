import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import SecondDocument from "./SecondDocument";
import ThirdDocument from "./ThirdDocument";

const commonPdfViewerStyle = { width: "100%", height: 1200, margin: "auto" };

const MainDocument = ({ csvData, selectedOption }) => {
  let selectedDocument;
  let fileName;

  switch (selectedOption) {
    case "UPS 2ND DAY AIR":
      fileName = "UPS_2ND_DAY_AIR.pdf";
      selectedDocument = <MyDocument csvData={csvData} fileName={fileName} />;
      break;
    case "UPS NEXT DAY AIR":
      fileName = "UPS_NEXT_DAY_AIR.pdf";
      selectedDocument = (
        <ThirdDocument csvData={csvData} fileName={fileName} />
      );
      break;
    default:
      fileName = "UPS_GROUND.pdf";
      selectedDocument = (
        <SecondDocument csvData={csvData} fileName={fileName} />
      );
  }

  return (
    <div>
      <div className="w-full sm:w-[16%] lg:ml-[10.8%] md:ml-[7%] sm:ml-0 ml-0 px-4 sm:px-0 mb-4">
        <PDFDownloadLink
          className="bg-blue-600 hover:bg-blue-700 mx-auto text-white transition-all rounded-lg sm:w-[100%] w-full flex  justify-center py-2 mb-4"
          document={selectedDocument}
          fileName={fileName}
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
      <PDFViewer fileName="myPdf.pdf" style={commonPdfViewerStyle}>
        {selectedDocument}
      </PDFViewer>
    </div>
  );
};

export default MainDocument;

{
  /* <div className="w-full sm:w-[16%] lg:ml-[10.8%] md:ml-[7%] sm:ml-0 ml-0 px-4 sm:px-0 mb-4">
      <PDFDownloadLink
        className="bg-blue-600 hover:bg-blue-700 mx-auto text-white transition-all rounded-lg sm:w-[100%] w-full flex  justify-center py-2 mb-4 "
        document={getSelectedDocument(selectedOption, csvData)}
        fileName={`${cvsFileName}.pdf`}
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </div> */
}
