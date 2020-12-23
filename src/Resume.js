import React from "react";
import 'animate.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import ResumeFile from "./assets/Pauldin_Bebla_Resume_.pdf";
import styled from "styled-components";
const Styles = styled.div`
  .document{
    margin: 30;
    textAlign: center;
  }
`;
export const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
      
    <Styles>
      <Document
        file={ResumeFile}
      >
          <Page pageNumber={1} scale="1.5" />
      </Document>
    </Styles>
  );
};
