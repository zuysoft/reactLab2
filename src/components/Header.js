import React, {Component} from "react";

import {Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

import Home from "../pages/Home";
import Writers from "../pages/Writers";
import Kupala from "../pages/Kupala"
import Kolas from "../pages/Kolas"
import Tank from "../pages/Tank"
import Korot from "../pages/Korotkevich"
import Bagdanovich from "../pages/Bagdanovich"
import Melez from "../pages/Melez"
import {useTranslation} from "react-i18next";
import i18n from "i18next";

export default function Header(){
    const chooseWriter = (name) => {
        switch(name){
            case t('kolas'):
                window.open('/Kolas', '_self', 'noopener,noreferrer');
                break;
            case t('kupala'):
                window.open('/Kupala', '_self', 'noopener,noreferrer');
                break;
            case t('tank'):
                window.open('/Tank', '_self', 'noopener,noreferrer');
                break;
            case t('korotkevich'):
                window.open('/Korotkevich', '_self', 'noopener,noreferrer');
                break;
            case t('bogdanovich'):
                window.open('/Bagdanovich', '_self', 'noopener,noreferrer');
                break;
            case t('melezh'):
                window.open('/Melez', '_self', 'noopener,noreferrer');
                break;    
        }
    }
    const {t} = useTranslation();
        return(
            <>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">{t('W')}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">{t('H')}</Nav.Link>
                                <Nav.Link href="/writers">{t('Wr')}</Nav.Link>

                            </Nav>
                            <Button onClick={()=>{i18n.changeLanguage('ru');}} variant="outline-success">Ru</Button>

                            <Button onClick={()=>{i18n.changeLanguage('en');}}  variant="outline-success">En</Button>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder={t('search1')}
                                    className="me-1"
                                    aria-label="Search"
                                    list="writersList"
                                    id = "searchBox"
                                />
                                <datalist id = "writersList">
                                    <option>{t('kolas')}</option>
                                    <option>{t('kupala')}</option>
                                    <option>{t('tank')}</option>
                                    <option>{t('korotkevich')}</option>
                                    <option>{t('bogdanovich')}</option>
                                    <option>{t('melezh')}</option>
                                </datalist>
                                <Button onClick = {() => chooseWriter(document.getElementById('searchBox').value)} variant="outline-success">{t('search')}</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/writers" element={<Writers/>}/>
                    <Route exact path = '/Kupala' element = {<Kupala/>}/>
                    <Route exact path = '/Kolas' element = {<Kolas/>}/>
                    <Route exact path = '/Tank' element = {<Tank/>}/>
                    <Route exact path = '/Korotkevich' element = {<Korot/>}/>
                    <Route exact path = '/Bagdanovich' element = {<Bagdanovich/>}/>
                    <Route exact path = '/Melez' element = {<Melez/>}/>
                </Routes>
            </Router>
            </>
        )
    }
