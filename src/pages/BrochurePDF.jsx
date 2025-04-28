// BrochureFlipbook.jsx
import HTMLFlipBook from "react-pageflip";
import "./BrochurePDF.css";
import { toast } from "react-toastify";
import React from "react";

const pages = [
  "/2480x3508-white-solid-color-background.jpg",
  "/School of Allied Brochure KV-images-0.jpg",
  "/School of Allied Brochure KV-images-1.jpg",
  "/School of Allied Brochure KV-images-2.jpg",
  "/School of Allied Brochure KV-images-3.jpg",
  "/2480x3508-white-solid-color-background.jpg",
];

export default function BrochurePDF() {
  const handleDownload = () => {
    toast.success("Downloading Brochure PDF", {
      position: "bottom-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flipbook-wrapper">
      <div className="brochure-header">
        <h1 className="title">Brochure</h1>
        <p className="brochure-subtitle">School of Allied Health Sciences</p>
      </div>
      <HTMLFlipBook
        width={500}
        height={700}
        // size="stretch"
        minWidth={300}
        maxWidth={600}
        minHeight={400}
        maxHeight={900}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        className="flipbook"
      >
        {pages.map((src, index) => (
          <div key={index} className="page">
            <img src={src} alt={`Page ${index + 1}`} className="page-img" />
          </div>
        ))}
      </HTMLFlipBook>

      <a
        href="/School of Allied Brochure KV.pdf"
        download
        className="download-pdf-btn"
        onClick={handleDownload}
      >
        📄 Download Brochure PDF
      </a>
    </div>
  );
}
