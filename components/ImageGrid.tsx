// import React from "react";
// import { motion } from "framer-motion";

// const ImageGrid = ({ card }) => {
//   // If no content or empty content array, return null
//   if (!card.content || card.content.length === 0) {
//     return (
//       <div className="w-full h-full flex items-center justify-center text-gray-500">
//         No images to display
//       </div>
//     );
//   }

//   // Determine grid layout based on number of images
//   const getGridLayout = (imageCount: any) => {
//     switch (imageCount) {
//       case 1:
//         return [{ size: "col-span-5 row-span-3", index: 0 }];
//       case 2:
//         return [
//           { size: "col-span-3 row-span-3", index: 0 },
//           { size: "col-span-2 row-span-3", index: 1 },
//         ];
//       case 3:
//         return [
//           { size: "col-span-3 row-span-2", index: 0 },
//           { size: "col-span-2 row-span-1", index: 1 },
//           { size: "col-span-2 row-span-1", index: 2 },
//         ];
//       case 4:
//         return [
//           { size: "col-span-3 row-span-2", index: 0 },
//           { size: "col-span-2 row-span-1", index: 1 },
//           { size: "col-span-1 row-span-1", index: 2 },
//           { size: "col-span-1 row-span-1", index: 3 },
//         ];
//       case 5:
//         return [
//           { size: "col-span-3 row-span-2", index: 0 },
//           { size: "col-span-2 row-span-1", index: 1 },
//           { size: "col-span-1 row-span-1", index: 2 },
//           { size: "col-span-2 row-span-1", index: 3 },
//           { size: "col-span-1 row-span-1", index: 4 },
//         ];
//       default:
//         return [
//           { size: "col-span-3 row-span-2", index: 0 },
//           { size: "col-span-2 row-span-1", index: 1 },
//           { size: "col-span-1 row-span-1", index: 2 },
//           { size: "col-span-2 row-span-1", index: 3 },
//           { size: "col-span-1 row-span-2", index: 4 },
//           { size: "col-span-1 row-span-1", index: 5 },
//         ];
//     }
//   };

//   // Limit the number of images to 6
//   const displayImages = card.content.slice(0, 6);
//   const gridLayout = getGridLayout(displayImages.length);

//   return (
//     <div className="grid grid-cols-5 grid-rows-3 gap-1 h-[600px] w-full">
//       {gridLayout.map((layout, idx) => (
//         <motion.div
//           key={idx}
//           className={`${layout.size} overflow-hidden`}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.5,
//             delay: idx * 0.1,
//           }}
//         >
//           <img
//             src={displayImages[layout.index]}
//             alt={`${card.title} image ${layout.index + 1}`}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ImageGrid;
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  card: {
    title: string;
    content: string[]; // ✅ Enforced as array of image URLs
  };
}

const ImageGrid: React.FC<CardProps> = ({ card }) => {
  if (!card.content || card.content.length === 0) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center text-gray-500">
        No images to display
      </div>
    );
  }

  const gridLayout = [
    { size: "col-span-3 row-span-2", index: 0 },
    { size: "col-span-1 row-span-1", index: 1 },
    { size: "col-span-1 row-span-1", index: 2 },
    { size: "col-span-2 row-span-2", index: 3 },
    { size: "col-span-1 row-span-1", index: 4 },
    { size: "col-span-1 row-span-1", index: 5 },
    { size: "col-span-1 row-span-1", index: 6 },
  ];

  const displayImages = card.content.slice(0, 7);

  return (
    <div className="grid grid-cols-5 grid-rows-3 gap-4 h-[500px] w-full">
      {gridLayout.slice(0, displayImages.length).map((layout, idx) => (
        <motion.div
          key={idx}
          className={`${layout.size} overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
          }}
        >
          <img
            src={displayImages[layout.index]}
            alt={`${card.title} image ${layout.index + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            style={{
              borderRadius: "10px",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
