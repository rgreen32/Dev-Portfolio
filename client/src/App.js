import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Jumbotron,
  Row,
  Col
} from "reactstrap"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [fadeIn, setFadeIn] = useState(true)

  const toggleFade = () => setFadeIn(!fadeIn)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img height="50px" width="100px" src={"./logo.png"} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
      <style>
        {`.custom-tag {
          border-radius: 0;
              height: 100%;
              max-width: 100%;
              background-position: center;
              background-image: url("/aurora1.jpg");
              background-repeat: no-repeat;
              background-size: cover; 
            }
          .icon { 
            transition: all .2s ease-in-out; 
          }
              
          .icon:hover { 
            transform: scale(1.5); 
          }
          a{
            color: inherit;
          }
          a:hover 
          {
           color: inherit; 
            text-decoration:none; 

          }`}
      </style>

      <Jumbotron
        align="center"
        className="mb-0 custom-tag justify-content-center align-items-center"
      >
        <div
          style={{
            "font-family": "Tahoma"
          }}
        >
          <Row className="mt-5">
            <Col>
              <h1 className="display-3">Hi, I'm Ray.</h1>
              <img height="100px" width="100px" src={"./profile.png"} />
              <h1 className="display-3">I'm a web developer.</h1>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <span className="mx-2">
                <a href="mailto:ray.greenm@gmail.com?subject = Feedback&body = Message">
                  <i className="icon fab far fa-envelope fa-2x"></i>
                </a>
              </span>
              <span className="mx-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ray-green/"
                >
                  <i className=" icon fab fa-linkedin-in fa-2x"></i>
                </a>
              </span>
              <span className="mx-2">
                <a target="_blank" href="https://github.com/rgreen32">
                  <i className="icon fab fa-github fa-2x"></i>
                </a>
              </span>
            </Col>
          </Row>
        </div>
      </Jumbotron>
      <Jumbotron
        id="about"
        align="center"
        className="mb-0 justify-content-center align-items-center"
        style={{ "background-color": "grey", "border-radius": "0" }}
      >
        <Row>
          <Col align="center">
            <h1>About Me</h1>
            <div style={{ maxWidth: "75%" }} className="my-4">
              <h6 style={{ "line-height": "2.0" }}>
                My name is Ray Green. I am a full-stack web developer currently
                employed at Green Mountain Technology in Memphis, TN. I have a passion for
                creating and exploring what is possible through technology. I
                specialize in web application development, website design, and
                database normalization
                <br />
                Let's work together.
                <br />
              </h6>
              <span className="my-2">
                <a href="mailto:ray.greenm@gmail.com?subject = Feedback&body = Message">
                  <i className="icon fab far fa-envelope fa-2x"></i>
                </a>
              </span>
            </div>
          </Col>
          <Col align="center">
            <h1>Tools and Proficiency</h1>
            <div className="my-4">
              <div
                className="w-25"
                style={{ display: "inline-block", "vertical-align": "middle" }}
              >
                <h5>Flask</h5>
              </div>

              <div
                className="mx-1"
                style={{
                  width: "50%",
                  display: "inline-block",
                  "vertical-align": "middle"
                }}
              >
                <Progress
                  color="success"
                  style={{ "background-color": "#696969" }}
                  value={80}
                />
              </div>
            </div>

            <div className="my-4">
              <div
                className="w-25"
                style={{ display: "inline-block", "vertical-align": "middle" }}
              >
                <h5>React</h5>
              </div>

              <div
                className="mx-1"
                style={{
                  width: "50%",
                  display: "inline-block",
                  "vertical-align": "middle"
                }}
              >
                <Progress
                  color="success"
                  style={{ "background-color": "#696969" }}
                  value={65}
                />
              </div>
            </div>
            <div className="my-4">
              <div className="w-25" style={{ display: "inline-block" }}>
                <h5>Nodejs</h5>
              </div>

              <div
                className="mx-1"
                style={{
                  width: "50%",
                  display: "inline-block",
                  "vertical-align": "middle"
                }}
              >
                <Progress
                  color="success"
                  style={{ "background-color": "#696969" }}
                  value={62}
                />
              </div>
            </div>
            <div className="my-4">
              <div className="w-25" style={{ display: "inline-block" }}>
                <h5>.Net</h5>
              </div>

              <div
                className="mx-1"
                style={{
                  width: "50%",
                  display: "inline-block",
                  "vertical-align": "middle"
                }}
              >
                <Progress
                  color="success"
                  style={{ "background-color": "#696969" }}
                  value={55}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col style={{ maxWidth: "99%" }}>
            <a target="_blank" href="/Resume.pdf">
              <span>
                <h4
                  style={{
                    display: "inline-block",
                    "vertical-align": "middle"
                  }}
                >
                  My Resume
                </h4>
                <i
                  style={{ "vertical-align": "middle" }}
                  className="mx-2 icon far fa-file fa-2x"
                ></i>
              </span>
            </a>
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron
        id="contact"
        align="center"
        className="mb-0 justify-content-center align-items-center"
        style={{ "background-color": "grey", "border-radius": "0" }}
      >
        <Row>
          <Col>
            <h1>Contact Me</h1>
            <Row className="mt-4 mb-2">
              <Col>
                <span>
                  <h5
                    className="mx-5"
                    style={{
                      display: "inline-block"
                    }}
                  >
                    Email: ray.greenm@gmail
                  </h5>
                  <h5
                    className="mx-5"
                    style={{
                      display: "inline-block"
                    }}
                  >
                    Phone: (901) 672-2982
                  </h5>
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="mx-2">
                  <a href="mailto:ray.greenm@gmail.com?subject = Feedback&body = Message">
                    <i className="icon fab far fa-envelope fa-2x"></i>
                  </a>
                </span>
                <span className="mx-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ray-green/"
                  >
                    <i className=" icon fab fa-linkedin-in fa-2x"></i>
                  </a>
                </span>
                <span className="mx-2">
                  <a target="_blank" href="https://github.com/rgreen32">
                    <i className="icon fab fa-github fa-2x"></i>
                  </a>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    </>
  )
}

export default App
