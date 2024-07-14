import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
function Header() {
  const [data, setData] = useState([
    {
      title: "jamal=>1",
      description: "hello word=>1",
      image:
        "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "jamal=>2",
      description: "hello word=>2",
      image:
        "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "jamal=>3",
      description: "hello word=>3",
      image:
        "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);
  return (
    <>
      {/* <div
        style={{ minHeight: "100vh", width: "100%", border: "solid red 2px" }}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <div style={{ width: "100%", textAlign: "left" }}>
            {data.map((elm, i) => {
              return (
                <>
                  <div>
                    <div
                      style={{
                        width: "90vw",
                        height: "50vh",
                        border: "solid red 1px",
                        position: "absolute",
                        zIndex: "100",
                        top: "10",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",

                        textAlign: "left",
                        margin: "200px 0 0 110px",
                      }}
                    >
                      <h2>{elm.title}</h2>
                      <p>{elm.description}</p>
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        style={{
                          height: "100vh",
                          width: "100%",
                          objectFit: "cover",
                          filter: "brightness(50%)",
                        }}
                        src={elm.image}
                        alt="no image"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div> */}
      <Carousel>
        {data.map((elm, i) => {
          return (
            <Carousel.Item interval={3000}>
              <img
                style={{
                  width: "100%",
                  height: "100vh",
                  filter: "brightness(50%)",
                  objectFit: "cover",
                }}
                src={elm.image}
                alt="UTRI no image"
              />
              <Carousel.Caption style={{top:"200px",left:"-950px"}}>
                <h3>{elm.title}</h3>
                <p>
                 {elm.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
   
      </Carousel>
    </>
  );
}

export default Header;
