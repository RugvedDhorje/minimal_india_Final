import React, { useState } from "react";
import Slider from "react-slick";
import ImageGrid from "./ImageGrid";

const data = [
  {
    id: "1",
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989279/21_DESIGN_MINIMAL_INDIAN_bonojk.jpg",
    content: [
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989277/20_DESIGN_MINIMAL_INDIAN_bnklas.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989276/16_DESIGN_MINIMAL_INDIAN_tebp5a.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989276/17_DESIGN_MINIMAL_INDIAN_mjnsal.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989277/18_DESIGN_MINIMAL_INDIAN_xrlbxx.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989277/19_DESIGN_MINIMAL_INDIAN_unl1ax.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989298/22_DESIGN_MINIMAL_INDIAN_zwgetw.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989299/23_DESIGN_MINIMAL_INDIAN_w2detf.jpg",
    ],
  },
  {
    id: "2",
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989188/30_DESIGN_MINIMAL_INDIAN_toiind.jpg",
    content: [
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989187/14_DESIGN_MINIMAL_INDIAN_uo4ast.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989188/15_DESIGN_MINIMAL_INDIAN_gziyen.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989188/30_DESIGN_MINIMAL_INDIAN_toiind.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989188/31_DESIGN_MINIMAL_INDIAN_wq4x06.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989188/32_DESIGN_MINIMAL_INDIAN_iljevz.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989189/34_DESIGN_MINIMAL_INDIAN_zadwwd.jpg",
    ],
  },
  {
    id: "3",
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1743013758/CARD_9_DESIGN_MINIMAL_INDIAN_iglegl.jpg ",
    content: [
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989317/4_DESIGN_MINIMAL_INDIAN_cjiig8.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989318/5_DESIGN_MINIMAL_INDIAN_i7zysb.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989318/6_DESIGN_MINIMAL_INDIAN_yy7whw.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989319/7_DESIGN_MINIMAL_INDIAN_nqhygd.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989321/10_DESIGN_MINIMAL_INDIAN_dithrz.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989321/11_DESIGN_MINIMAL_INDIAN_wd1fst.jpg",
    ],
  },

  {
    id: "4",
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989261/26_DESIGN_MINIMAL_INDIAN_r5ogrn.jpg",
    content: [
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989244/1_DESIGN_MINIMAL_INDIAN_pjh2up.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989260/2_DESIGN_MINIMAL_INDIAN_jcgmon.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989244/1_DESIGN_MINIMAL_INDIAN_pjh2up.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989260/25_DESIGN_MINIMAL_INDIAN_xi9ual.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989260/24_DESIGN_MINIMAL_INDIAN_cty4ey.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989261/27_DESIGN_MINIMAL_INDIAN_njyuy8.jpg",
    ],
  },
  {
    id: "5",
    category: "iOS",
    title: "Photography just got better.",
    src: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989372/LM_2_cbitkh.jpg",
    content: [
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989379/LM_B_2_suacug.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989373/LM_3_bnzwoy.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989371/LM_1_gchvxs.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989378/LM_9_exq4xv.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989374/LM_5_sgynic.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989374/LM_5_sgynic.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742989372/LM_2_cbitkh.jpg",
    ],
  },
  {
    id: "6",
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1738218779/cld-sample-4.jpg",
    content: [
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1740396024/company_images/tox35pyji8fzr6wmcuo8.png",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1740396025/company_images/u3ubxp3n4nnimeqiaibz.png",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1740294799/company_images/qeifjplhds4zlubf7qvn.png",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1740396027/company_images/tckrigziih2afkhpv4um.jpg",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1740396032/company_images/y8y5eyryoxybqxsm9gha.png",
      "https://res.cloudinary.com/dwh14vxwc/image/upload/v1740371166/company_images/imuuz4av2lk4g8zmlc7s.png",
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
      <div
        className="w-full lg:max-w-screen-2xl md:max-w-screen-lg mx-auto py-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 15%, white 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 15%, white 90%, transparent)",
        }}
      >
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
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
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
