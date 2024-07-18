import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 400);

    return () => {
      clearTimeout(timer);
      setOpacity(0);
    };
  }, []);

  const [data, setData] = useState([
    {
      title: "From Concept to Construction",
      description: "Tri-United brings your ideas to life from design to build, ensuring every detail matches your vision.",
      image:
        "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Innovation and Excellence ",
      description: "Tri-United blends innovative techniques with unmatched excellence to deliver outstanding results.",
      image:
        "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Crafting Exceptional Experiences",
      description: "Experience the Tri-United difference with quality craftsmanship and meticulous attention to detail.",
      image:
        "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <>
      <Carousel controls={false}>
        {data.map((elm, i) => (
          <Carousel.Item key={i} interval={3000}>
            <img
              style={{
             
                width: "100%",
                height: "100vh",
                filter: "brightness(50%)",
                objectFit: "cover",
              }}
              src={elm.image}
              alt={`Slide ${i}`}
            />
            <Carousel.Caption
              style={{
                textAlign:"left",
                marginLeft:"1060px",
                top: "150px",
                left: "-950px",
              }}
            >
              <h1
                style={{
                  width:"70vw",
                  fontSize:"100px",
                  opacity: opacity,
                  transform: "translateZ(0)",
                  animation: `fadeIn 4s forwards`,
                }}
              >
                {elm.title}
              </h1>
              <p
                style={{
                  
                  opacity: opacity,
                  transform: "translateZ(0)",
                  animation: `slideIn 4s forwards`,
                  fontWeight:"bold"
                }}
              >
                {elm.description}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(200px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
