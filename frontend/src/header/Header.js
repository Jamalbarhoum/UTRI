import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
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
      <Carousel.Item interval={1000}>
        <img style={{width:"100%",height:"100vh",filter:"brightness(50%)", objectFit: "cover",}} src="https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="UTRI no image"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img style={{width:"100%",height:"100vh",filter:"brightness(50%)", objectFit: "cover",}} src="https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="UTRI no image"/>
       
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img style={{width:"100%",height:"100vh",filter:"brightness(50%)", objectFit: "cover",}} src="https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="UTRI no image"/>
 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Header;
