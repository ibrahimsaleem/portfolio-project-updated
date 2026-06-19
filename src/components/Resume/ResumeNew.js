import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import resumePdf from "../../Assets/cv.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Use explicit https to avoid mixed content/CSP issues in production
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Use bundled asset path so Webpack emits a hashed file under build/static/media/
const resumeLink = resumePdf;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", gap: "15px" }}>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              href="/cv1page.pdf"
              target="_blank"
              style={{ minWidth: "150px" }}
            >
              <AiOutlineDownload />
              &nbsp;1-Page CV
            </Button>
            <Button
              variant="outline-primary"
              href="/cv2page.pdf"
              target="_blank"
              style={{ minWidth: "150px" }}
            >
              <AiOutlineDownload />
              &nbsp;2-Page CV
            </Button>
          </div>
        </Row>

        <Row className="resume">
          <Document 
            file={resumeLink} 
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div style={{ color: "white", textAlign: "center", padding: "50px" }}>Loading PDF...</div>}
            error={<div style={{ color: "white", textAlign: "center", padding: "50px" }}>Failed to load PDF. <a href={resumeLink} target="_blank" rel="noopener noreferrer" style={{ color: "#c770f0" }}>Click here to download</a></div>}
          >
            <Page 
              pageNumber={1} 
              scale={width > 786 ? 1.7 : 0.6}
              loading={<div style={{ color: "white", textAlign: "center", padding: "20px" }}>Loading page...</div>}
              error={<div style={{ color: "white", textAlign: "center", padding: "20px" }}>Error loading page</div>}
            />
          </Document>
          {numPages && numPages > 1 && (
            <Document 
              file={resumeLink} 
              className="d-flex justify-content-center"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
            >
              <Page 
                pageNumber={2} 
                scale={width > 786 ? 1.7 : 0.6}
                loading={<div style={{ color: "white", textAlign: "center", padding: "20px" }}>Loading page...</div>}
                error={<div style={{ color: "white", textAlign: "center", padding: "20px" }}>Error loading page</div>}
              />
            </Document>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", gap: "15px" }}>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              href="/cv1page.pdf"
              target="_blank"
              style={{ minWidth: "150px" }}
            >
              <AiOutlineDownload />
              &nbsp;1-Page CV
            </Button>
            <Button
              variant="outline-primary"
              href="/cv2page.pdf"
              target="_blank"
              style={{ minWidth: "150px" }}
            >
              <AiOutlineDownload />
              &nbsp;2-Page CV
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
