import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas"; // Import html2canvas
import HubView from "./HubView";
import StatsPanel from "./StatsPanel";

const WsiViewer = () => {
  const [detections, setDetections] = useState([]);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const screenshotRef = useRef(null); // Reference for capturing screenshot
  const currentTime = new Date().toLocaleString(); // Dynamic time

  // Fetch detection results
  useEffect(() => {
    fetch("/output.json")
      .then((res) => res.json())
      .then((data) => {
        if (
          data?.inference_results?.output?.detection_results &&
          Array.isArray(data.inference_results.output.detection_results)
        ) {
          setDetections(data.inference_results.output.detection_results);
        } else {
          setDetections([]);
        }
      })
      .catch(() => setDetections([]));
  }, []);

  // Function to take a screenshot and download it
  const handleDownloadScreenshot = () => {
    if (screenshotRef.current) {
      html2canvas(screenshotRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "wsi_report.png";
        link.click();
      });
    }
  };

  return (
    <div
      ref={screenshotRef} // 📌 Wrap everything inside this div for screenshot capture
      style={{ width: "100vw", height: "100vh", position: "relative", background: "#fff" }}
    >
      {/* Header with Time */}
      <div
        style={{
          textAlign: "center",
          padding: "5px",
          borderBottom: "1px solid #ccc",
          fontWeight: "bold",
        }}
      >
        {currentTime}
      </div>

      {/* Back Button */}
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "20px",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        ←
      </button>

      {/* Layout with Sidebar, WSI, and Hub View */}
      <div style={{ display: "flex", height: "90vh" }}>
        {/* Left Panel - Stats */}
        <StatsPanel />

        {/* Center - WSI Zoomed In View */}
        <div
          ref={containerRef}
          style={{
            flex: 2,
            height: "100%",
            position: "relative",
            overflow: "auto",
            border: "1px solid #ccc",
          }}
        >
          <img
            ref={imageRef}
            src="/wsi.jpg"
            alt="Whole Slide"
            style={{
              display: "block",
              width: "max-content",
              height: "100%",
            }}
          />
          {/* Bounding Boxes */}
          {detections.map(([x1, y1, x2, y2, label], index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${y1}px`,
                left: `${x1}px`,
                width: `${x2 - x1}px`,
                height: `${y2 - y1}px`,
                border: "2px solid red",
                backgroundColor: "rgba(113, 0, 0, 0.1)",
              }}
              title={label}
            />
          ))}
        </div>

        {/* Right Panel - Hub View */}
        <HubView pointerPosition={detections.length > 0 ? detections[0] : null} />
      </div>

      {/* Report Button - Takes Screenshot and Downloads */}
      <button
        onClick={handleDownloadScreenshot}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Report
      </button>
    </div>
  );
};

export default WsiViewer;
