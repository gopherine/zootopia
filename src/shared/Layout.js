import React, { useState } from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Container} from 'reactstrap';
import rabbit_border_logo from '../static/rabbit_border.png';

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar  light style={{"backgroundColor": "#ff80ab","height":"80px"}} expand="md">
                <NavbarBrand  href="/">
                    <img  src={rabbit_border_logo} style={{"height":"60px"}} alt="fireSpot"/>&nbsp;&nbsp;&nbsp;
                    <strong>PINK RABBIT</strong>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                </Collapse>
            </Navbar>
            <Container style={{"marginTop": "20px"}}>
                {children}
            </Container>
            <footer> 
            <div>
                Designed by Atharva <a href="https://github.com/gopherine" title="Gopherine">Gopherine</a> 
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>   
            </footer>
        </React.Fragment>
    )
}

export default Layout