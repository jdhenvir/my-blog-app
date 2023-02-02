import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='black'>
      <MDBContainer>
        <MDBNavbarBrand href='/'>DhenFolio</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>

          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <Link to="/">
              <MDBNavbarItem>
                <MDBNavbarLink>
                    Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/profile">
            <MDBNavbarItem>
              <MDBNavbarLink>
                Profile
              </MDBNavbarLink>
            </MDBNavbarItem>
            </Link>
            <MDBNavbarItem>
              <MDBNavbarLink href='/projects'>
                Projects
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='blogpost'>
                Blog
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
  
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}