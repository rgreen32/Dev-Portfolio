import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media,
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
        {/* <NavbarBrand href="/">RG</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink target="_blank" href="/about/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="/components/">
                Projects
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink target="_blank" href="https://github.com/rgreen32">
                GitHub
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink target="_blank" href="/contact/">
                Contact
              </NavLink>
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
        align="center"
        className="mb-0 justify-content-center align-items-center"
      >
        <div
          style={{
            "font-family": "Tahoma"
          }}
        ></div>
      </Jumbotron>
    </>
  )
}

export default App
