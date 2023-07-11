import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Button } from 'react-bootstrap';
import '../style.css';
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
function Events() {
    return (
        <div>
            <section className='sec_contact '>
                <Container>
                    <Row className='m_8'>
                        <Col lg={4} md={6} xs={12} className=' pt-lg-0 pt-5'>
                            <div className='office_item'>
                                <div className='office_icon'>
                                    <FaMapMarkerAlt className='office_i'></FaMapMarkerAlt>
                                </div>
                                <div className='office_text'>
                                    <h2>Address</h2>
                                    <p>7 Green Lake Street Crawfordsville, IN 47933</p>

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12} className='pt-lg-0 pt-5'>
                            <div className='office_item'>
                                <div className='office_icon'>
                                    <FaEnvelope className='office_i' />
                                </div>
                                <div className='office_text'>
                                    <h2>Email Us</h2>
                                    <p className='m-0'>Electian@gmail.com</p>
                                    <p>helloyou@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12} className='pt-lg-0 pt-5'>
                            <div className='office_item'>
                                <div className='office_icon'>
                                    <FaPhoneAlt className='office_i' />
                                </div>
                                <div className='office_text'>
                                    <h2>Call Now</h2>
                                    <p className='m-0'>+1 800 123 456 789</p>
                                    <p>+1 800 123 654 987</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='m_8'>
                        <Col xs={12} className=' pt-lg-0 pt-5'>
                            <div className='contact_title'>
                                <h2>Have Any Question?</h2>
                                <p>It is a long established fact that a reader will be distracted content of a page when looking.</p>
                            </div>
                        </Col>
                        <Col xs={12} className=' pt-lg-0 pt-5'>
                            <div className='form_area'>
                                <Form>
                                    <Row>
                                        <Col xs={12} lg={6}>
                                            <Form.Group>
                                                <Form.Control type="text" className='form_pro' placeholder='Your Name*' />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} lg={6}>
                                            <Form.Group>
                                                <Form.Control type="email" className='form_pro' placeholder='Your Email*' />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} lg={6}>
                                            <Form.Group>
                                                <Form.Control type="number" className='form_pro' placeholder='Your Phone*' />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} lg={6}>
                                            <Form.Select className='form_pro'>
                                                <option>Services</option>
                                                <option value="1">Tax Management</option>
                                                <option value="2">Financial Advices </option>
                                                <option value="3">Risk Management</option>
                                            </Form.Select>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group className="mb-3 form_pro high_area ps-1" >
                                                <Form.Control as="textarea" rows={30} placeholder='Message...' />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} className="text-center">
                                            <Button variant="primary" type="submit" className='form_btn'>Get In Touch</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </div >
    );
}
export default Events;