const VideoThroughTextCSS = () => {
  return (
    <div className="relative w-full h-96 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 800 400">
          <defs>
            <mask id="textMask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                fontFamily="Arial"
                fontSize="80"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
              >
                YOUR TEXT
              </text>
            </mask>
          </defs>
          <foreignObject width="100%" height="100%" mask="url(#textMask)">
            <video
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/your-video.mp4"
              autoPlay
              muted
              loop
            />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};
export default VideoThroughTextCSS;
