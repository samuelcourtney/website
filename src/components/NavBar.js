import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .navbar {
        background-color: #0E3746;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #EAE8DC 

        &: hover{
            color: #BE2623;
        }
    }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href="/"> Samuel Courtney </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href = "/"> home </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/#/about"> about </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/#/contact"> contact </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)