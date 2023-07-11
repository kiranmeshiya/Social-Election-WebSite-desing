import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import React from 'react';
import { TfiFacebook,TfiTwitterAlt,TfiInstagram,TfiGoogle,TfiLocationPin } from "react-icons/tfi";
import {FaEnvelope, FaPaperPlane} from "react-icons/fa"
import { RiPhoneFill } from "react-icons/ri";
function Footer() {
    return (
        <div>
            <section className='footer_sec '>
            {/* <div class="shape-1">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_223)"></rect>
                    <defs>
                        <linearGradient id="paint0_linear_1_223" x1="795" y1="5.99883" x2="9.55538e-10" y2="5.99883" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#274DCF"></stop>
                            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="shape-2">
                <svg width="795" height="12" viewBox="0 0 795 12" fill="none">
                    <rect width="795" height="12" fill="url(#paint0_linear_1_224)"></rect>
                    <defs>
                        <linearGradient id="paint0_linear_1_224" x1="2.31964e-06" y1="5.99883" x2="795" y2="5.99898" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#DE2045"></stop>
                            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}
            <div className='upper_footer'>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12} xs={12}  >
                            <div className='footer_1'>
                                <div className='logo'>
                                    <img src={require('../images/asset 23.png')} alt="" className='img-fluid'/>
                                </div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, make
                                    specimen book.</p>
                                <ul className='footer_icon d-flex m-0 p-0'>
                                    <li><a href='index.html'><TfiFacebook className='footer_i'/></a></li>
                                    <li><a href='index.html'><TfiTwitterAlt className='footer_i'/></a></li>
                                    <li><a href='index.html'><TfiInstagram className='footer_i'/></a></li>
                                    <li><a href='index.html'><TfiGoogle className='footer_i'/></a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col  lg={3} md={6} sm={12} xs={12} className='mt-sm-4 mt-lg-0'>
                            <div className='footer_2'>
                                <h3>Quick links:</h3>
                                <ul className='footer_link m-0 p-0'>
                                    <li><a href='index.html'>Home</a></li>
                                    <li><a href='index.html'>Blog Post</a></li>
                                    <li><a href='index.html'>Donate</a></li>
                                    <li><a href='index.html'>Members</a></li>
                                    <li><a href='index.html'>Events</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} xs={12} className='mt-sm-4 mt-lg-0'>
                            <div className='footer_3'>
                                <h3>Contact Us</h3>
                                <ul className='footer_contact'>
                                <li><TfiLocationPin className='f_icon'/>68D, Belsion Town 2365<br/> Fna city, LH 3656, USA</li>
                                <li><RiPhoneFill className='f_icon'/>+ 8 (123) 123 456 789<br/>+ 8 (123) 123 456 789</li>
                                <li><FaEnvelope className='f_icon'/>indudus@gmail.com</li> 
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} xs={12} className='mt-sm-4 mt-lg-0'>
                            <div className='footer_4'>
                                <h3>Newsletter:</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, make
                                    specimen book.</p>
                                    <form>
                                    <div class="input_field">
                                        <input type="email" class="form-control" placeholder="Enter your email" required=""></input>
                                    </div>
                                    <div class="submit">
                                        <button type="submit" className='submit_btn'><FaPaperPlane className='submit_icon'/></button>
                                    </div>
                                    </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className='lower_footer'>
                    <Container>
                        <Row>
                            <Col xs={12}>
                            <p class="copyright">Copyright © 2022 Electian by <a href="index.html">wpOceans</a>.All Rights Reserved.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default Footer;