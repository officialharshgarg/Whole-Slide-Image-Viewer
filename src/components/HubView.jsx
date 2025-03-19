import React from "react";

const HubView = ({
  pointerPosition,
  fullImageSize = { fullWidth: 1024, fullHeight: 768 },
  zoomedViewSize = { zoomWidth: 500, zoomHeight: 400 },
}) => {
  if (!pointerPosition)
    return (
      <div
        style={{
          width: "20%",
          padding: "10px",
          borderLeft: "1px solid #ccc",
          color: "black",
        }}
      >
        <h3>WSI Zoomed-out View (Hub)</h3>
        <p>No selection</p>
      </div>
    );

  const [x, y, width, height] = pointerPosition;
  const { fullWidth, fullHeight } = fullImageSize; // Full WSI image dimensions
  const { zoomWidth, zoomHeight } = zoomedViewSize; // Zoomed-in view dimensions

  // Calculate scale factor for HubView
  const scaleX = 200 / fullWidth; // Assuming the HubView image is 200px wide
  const scaleY = 100 / fullHeight; // Assuming the HubView image is 100px high

  return (
    <div
      style={{ width: "20%", padding: "10px", borderLeft: "1px solid #ccc" }}
    >
      <h3>WSI Zoomed-out View (Hub)</h3>
      <p>Patient ID: 7</p>
      <p>Blood</p>

      <div
        style={{
          position: "relative",
          width: "200px", // Fixed width for the HubView image
          height: "100px", // Fixed height for the HubView image
          backgroundImage: "url('/wsi.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "1px solid #ccc",
        }}
      >
        {/* Blue Rectangle (Zoomed-in Area Indicator) */}
        <div
          style={{
            position: "absolute",
            top: `${y * scaleY}px`,
            left: `${x * scaleX}px`,
            width: `${width * scaleX}px`,
            height: `${height * scaleY}px`,
            border: "2px solid blue",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default HubView;
