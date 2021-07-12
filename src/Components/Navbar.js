import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import "./Style.css"

const Navbarcomp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="head">
      <Navbar className="mainnavdiv" light expand="md">
        <NavbarBrand href="/">HICODER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto navpart2" navbar>
            <NavItem className="navmar">
              <NavLink href="/components/">HICODER +</NavLink>
            </NavItem>
            <NavItem className="navmar"> 
              <NavLink href="https://github.com/reactstrap/reactstrap">COURSE +</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="navmar">
              <DropdownToggle nav >
                HIRE +
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider /> */}
                <DropdownItem>
                  Reset +
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button style={{backgroundColor:"#1c3988"}}>APPLY NOW</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarcomp;