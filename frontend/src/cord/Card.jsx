import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ImageComponent = ({ image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}
      className={`image-container ${inView ? "animate" : ""}`}
      style={{
     
        width: "50%",
        height: "50vh",
    
        boxSizing: "border-box",
        transition: "transform 0.5s, opacity 0.5s",
        transform: inView ? "translateY(0)" : "translateY(50px)",
        opacity: inView ? 1 : 0,
      }}
    >
      <img   
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(20%)",
          opacity: 0.5,
          mixBlendMode: "screen",
        }}
        src={image}
        alt="no content"
      />
    </div>
  );
};

function Card() {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/64/de/2c/64de2c76de3a3048cb06c87a1c81f453.jpg",
      title: "RESIDENTIAL",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/64/de/2c/64de2c76de3a3048cb06c87a1c81f453.jpg",
      title: "RESIDENTIAL",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/64/de/2c/64de2c76de3a3048cb06c87a1c81f453.jpg",
      title: "RESIDENTIAL",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/64/de/2c/64de2c76de3a3048cb06c87a1c81f453.jpg",
      title: "RESIDENTIAL",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/64/de/2c/64de2c76de3a3048cb06c87a1c81f453.jpg",
      title: "RESIDENTIAL",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/64/de/2c/64de2c76de3a3048cb06c87a1c81f453.jpg",
      title: "RESIDENTIAL",
    },
  ]);

  return (
    <div style={{ minHeight: "100vh", marginTop: "100px", marginBottom: "100px" }}>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        {data.map((elm) => (
    
       <ImageComponent key={elm.id} image={elm.image} />
    
   
        ))}
      </div>
    </div>
  );
}

export default Card;
