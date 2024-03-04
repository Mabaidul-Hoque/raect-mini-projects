import React, { useState } from "react";

const images = [
  {
    id: 1,
    title: "Explore The World",
    img: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Wild Forest",
    img: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Sunny Beach",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    id: 4,
    title: "City on Winter",
    img: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    id: 5,
    title: "Mountains - Clouds",
    img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];
const ExpandingCards = () => {
  const [activePanel, setActivePanel] = useState(0);
  return (
    <div className="mt-8">
      <div className="flex  gap-4">
        {images.map((image, index) => (
          <div
            onClick={() => setActivePanel(index)}
            key={image.id}
            className={`${
              activePanel === index
                ? "w-[32rem] transition-width duration-500"
                : "w-[5rem] transition-width duration-500"
            } h-96 relative`}
          >
            <img
              className={`${
                activePanel === index
                  ? "rounded-3xl"
                  : "rounded-full object-cover"
              } w-full h-full`}
              src={image.img}
              alt={image.title}
            />
            <p
              className={`${
                activePanel === index ? "opacity-100" : "opacity-0"
              } absolute bottom-6 left-6 text-4xl text-white transition-opacity duration-1000`}
            >
              {image.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
