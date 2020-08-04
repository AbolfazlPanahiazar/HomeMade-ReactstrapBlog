import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="rounded" align="right" color="dark" fixed light expand="md">
        <NavbarBrand className="text-light" href="http://panahiazar.ir/">
          زمپلاگ
        </NavbarBrand>
        <NavbarToggler className="bg-light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/blog">
                <NavLink className="text-light">صفحه اصلی</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog/posts">
                <NavLink className="text-light">پست ها</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog/users">
                <NavLink className="text-light">کاربران</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText className="text-light">زمپ</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
