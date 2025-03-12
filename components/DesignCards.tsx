import React, { useState } from "react";
import Slider from "react-slick";
import ImageGrid from "./ImageGrid";

const data = [
  {
    id: "1",
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/21 DESIGN MINIMAL INDIAN .jpg",
    content: [
      "/set 3/20 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/16 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/17 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/18 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/19 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/22 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/23 DESIGN MINIMAL INDIAN .jpg",
    ],
  },
  {
    id: "2",
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/CARD 30 DESIGN MINIMAL INDIAN  copy.jpg",
    content: [
      "/set 1/14 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/15 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/30 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/31 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/32 DESIGN MINIMAL INDIAN .jpg",
      "/img4.png",
      "/img2.jpg",
    ],
  },
  {
    id: "3",
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/CARD 9 DESIGN MINIMAL INDIAN .jpg",
    content: [
      "/set 4/4 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/5 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/6 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/7 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/10 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/11 DESIGN MINIMAL INDIAN .jpg",
    ],
  },

  {
    id: "4",
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/set 2/26 DESIGN MINIMAL INDIAN .jpg",
    content: [
      "/set 2/1 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/2 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/26 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/24 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/27 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/25 DESIGN MINIMAL INDIAN .jpg",
    ],
  },
  {
    id: "5",
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "/img1 (1).jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img1 (1).jpg",
      "/img4.png",
      "/img2.jpg",
    ],
  },
  {
    id: "6",
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "/img1 (1).jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img1 (1).jpg",
      "/img4.png",
      "/img2.jpg",
    ],
  },
];

function MultipleItems() {
  const [selectedItem, setSelectedItem] = useState<(typeof data)[0] | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCardClick = (item: any) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <>
      <div className="w-full lg:max-w-screen-2xl md:max-w-screen-lg mx-auto py-10">
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className="px-2 group flex justify-center items-center"
              onClick={() => handleCardClick(item)}
            >
              <div className="relative overflow-hidden w-full h-full">
                <div className="relative w-full h-full">
                  {/* Fixed size container for images */}
                  <div
                    className="w-full h-72 relative overflow-hidden"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={item.src}
                      alt="Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
                      style={{
                        borderRadius: "10px",
                      }}
                    />

                    {/* Overlay text that appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-[20px] p-4 rounded">
                        {item.title || "View Details"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Popup Overlay */}
      {showPopup && selectedItem && (
        <div
          className="fixed inset-0 top-20 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          {/* Popup Content */}
          <div
            className="bg-[#FFFBF3] rounded-lg px-4 pb-4 w-[900px] mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderRadius: "10px",
            }}
          >
            <div className="flex items-end justify-end">
              <button
                onClick={closePopup}
                className="text-black text-[30px] font-bold"
              >
                &times;
              </button>
            </div>
            <ImageGrid
              card={{
                title: selectedItem?.title ?? "",
                content: selectedItem?.content ?? [],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MultipleItems;
