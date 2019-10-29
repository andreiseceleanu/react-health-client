import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to={'/'} exact >Hospital</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/patient-list'} exact>
                            <NavItem eventKey={1}>
                                Patients
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/ailments'}>
                            <NavItem eventKey={2}>
                                Ailments
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/medications'}>
                            <NavItem eventKey={2}>
                                Medications
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/loginform'}>
                            <NavItem eventKey={2}>
                                Login
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/registerform'}>
                            <NavItem eventKey={2}>
                                Register
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}

export default navigation;