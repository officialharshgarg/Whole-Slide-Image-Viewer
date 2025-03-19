import React from "react";

const HubView = ({
  pointerPosition,
  fullImageSize = { fullWidth: 1024, fullHeight: 768 },
  zoomedViewSize = { zoomWidth: 200, zoomHeight: 100 }, // Default zoomed view size
}) => {
  if (!pointerPosition) {
    return (
      <div
        style={{
          width: "20%",
          padding: "10px",
          borderLeft: "1px solid #ccc",
          color: "#000",
        }}
      >
        <h3 style={{ color: "#000" }}>WSI Zoomed-out View (Hub)</h3>
        <p style={{ color: "#000" }}>No selection</p>
      </div>
    );
  }

  const [x, y, width, height] = pointerPosition;
  const { fullWidth, fullHeight } = fullImageSize;
  const { zoomWidth, zoomHeight } = zoomedViewSize;

  // Calculate scale factor dynamically based on zoomed view size
  const scaleX = zoomWidth / fullWidth;
  const scaleY = zoomHeight / fullHeight;

  return (
    <div
      style={{
        width: "20%",
        padding: "10px",
        borderLeft: "1px solid #ccc",
        color: "#000",
      }}
    >
      <h3 style={{ color: "#000" }}>WSI Zoomed-out View (Hub)</h3>
      <p style={{ color: "#000" }}>Patient ID: 7</p>
      <p style={{ color: "#000" }}>Blood</p>

      <div
        style={{
          position: "relative",
          width: `${zoomWidth}px`, // Dynamic zoomed view width
          height: `${zoomHeight}px`, // Dynamic zoomed view height
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
