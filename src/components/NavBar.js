import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";
import './CustomNavbar.css';
import logo from '../src_assets/SClogo.png';

const Styles = styled.div`
    .navbar {
        background-color: black;
        z-index: 10000;
        top: 0;
        width: 100%;

    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #D0D0D0; 
        &: hover{
            color: white;
        }
        &: focus{
            color: grey;
        }
        
    }
    
`;

export const NavBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand = "lg">
            <Navbar.Brand href="/"> 
                <a href="/#">
                <img src={logo} style={{width:100, marginTop: -7}} alt="logo"/>
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href = "/"> Home </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link a href = "/#/about"> About Me</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/#/contact"> Contact Info </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)