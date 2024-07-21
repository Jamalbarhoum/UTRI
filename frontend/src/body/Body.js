import React, { useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Body() {

  const [projects, setProjects] = useState(150);
  const [clients, setClients] = useState(80);
  const [professionals, setProfessionals] = useState(200);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      
    }
  
  }, [inView]);


  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(150px)",
    config: {
      tension: 150,
      friction: 50,
    },
  });
  const springProps2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(150px)",
    config: {
      tension: 150,
      friction: 50,
    },
  });

  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const colStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  };

  const imgStyle = {
    width: "90%",
    boxShadow: "0 4px 8px rgba(55, 55, 0.9, 0.0)",
    height: "660px",
    margin: "90px 50px",
  };

  const spanStyle = {
    fontWeight: "bold",
    color: "rgb(75,85,99)",
  };

  const pStyle = {
    fontSize: "20px",
    fontFamily: "Acme",
    width: "80%",
  };

  return (
    <Container>
      <Row style={containerStyle}>
        <Col style={colStyle} xl={6} >
          <animated.div style={{ ...springProps, ...colStyle }}>
            <img
              style={imgStyle}
              src="https://en.idei.club/uploads/posts/2023-06/1686925921_en-idei-club-p-white-building-dizain-krasivo-10.jpg"
              alt="no image"
            />
          </animated.div>
        </Col>
        <Col style={colStyle }  xl={6}>
        <animated.div style={{...springProps2, ...colStyle}}>
          <p  style={pStyle}>
            <span style={spanStyle}>We are a long-established</span>,
            independent building services and home improvements company. We
            have a wealth of experience working as main building contractors
            on all kinds of projects, big and small,{" "}
            <span style={spanStyle}>
              from home maintenance and improvements to extensions,
              refurbishments and new builds.
            </span>
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              textAlign: "left",
              width: "80%",
              padding: "20px",
            }}
          >
            <div  style={{ width: "50%" }}>
              <h1  style={{color:"rgb(137,151,120)",fontWeight:"bold",fontSize:"80px"}}>{projects}+</h1>
              <h5 style={{fontWeight:"bold"}}>Projects</h5>
            </div>
            <div ref={ref} style={{ width: "50%" }}>
              <h1 style={{color:"rgb(137,151,120)",fontWeight:"bold",fontSize:"80px"}}>{clients}+</h1>
              <h5 style={{fontWeight:"bold"}}>Clients</h5>
            </div>
            <div style={{ width: "50%" }}>
              <h1 style={{color:"rgb(137,151,120)",fontWeight:"bold",fontSize:"80px"}}>{professionals}+</h1>
              <h5 style={{fontWeight:"bold"}}>Professionals</h5>
            </div>
          </div>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
