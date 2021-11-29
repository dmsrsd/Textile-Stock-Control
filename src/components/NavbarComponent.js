import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Tabel Product</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/dmsrsd">GitHub</NavLink>
              </NavItem>
            </Nav>

            <NavLink href="/components/">Admin</NavLink>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Example;
