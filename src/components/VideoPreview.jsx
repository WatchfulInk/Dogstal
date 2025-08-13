import React from "react";

function VideoPreview() {
  return (
    <div className="flex justify-center items-center p-4">
      <div
        className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out hover:scale-101"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <iframe
          src="https://drive.google.com/file/d/1cNAx8Mz6mloWWOoRzgS5B1J6rP0rfiFK/preview"
          width="100%"
          height="100%"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Animación CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default VideoPreview;
