import React, { useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Body() {

  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [professionals, setProfessionals] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const updateNumbers = (setFunc, maxNumber) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setFunc(count);
          if (count === maxNumber) {
            clearInterval(interval);
          }
        }, 10);
      };

      updateNumbers(setProjects, 150);
      updateNumbers(setClients, 80);
      updateNumbers(setProfessionals, 200);
    }
  }, [inView]);

  // Animation spring for Col element
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(300px)",
    config: {
      tension: 200,
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
    color: "rgb(75,85,99)",
    fontFamily: "Acme",
    width: "80%",
  };

  return (
    <Container>
      <Row style={containerStyle}>
        <Col style={colStyle} xl={6} ref={ref}>
          <animated.div style={{ ...springProps, ...colStyle }}>
            <img
              style={imgStyle}
              src="https://en.idei.club/uploads/posts/2023-06/1686925921_en-idei-club-p-white-building-dizain-krasivo-10.jpg"
              alt="no image"
            />
          </animated.div>
        </Col>
        <Col style={colStyle} xl={6}>
          <p style={pStyle}>
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
            <div style={{ width: "50%" }}>
              <h1  style={{color:"rgb(137,151,120)",fontSize:"80px"}}>{projects}+</h1>
              <h5>Projects</h5>
            </div>
            <div style={{ width: "50%" }}>
              <h1 style={{color:"rgb(137,151,120)",fontSize:"80px"}}>{clients}+</h1>
              <h5>Clients</h5>
            </div>
            <div style={{ width: "50%" }}>
              <h1 style={{color:"rgb(137,151,120)",fontSize:"80px"}}>{professionals}+</h1>
              <h5>Professionals</h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
