export default function Slider3D() {
  return (
    <div className="banner my-40 ">
      {/* Using className instead of class */}
      <div
        className="slider"
        style={{ "--quantity": 10 } as React.CSSProperties}
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <img
              src={`images/dragon_${index + 1}.jpg`}
              alt={`Dragon ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="content">
        <h1 data-content="FILM ONLY">FILM ONLY</h1>
        <div className="author">
          <h2></h2>
          <p>
            <b></b>
          </p>
          <p></p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
}
