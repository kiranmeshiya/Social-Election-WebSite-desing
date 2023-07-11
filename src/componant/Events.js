import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import { FaMapMarkerAlt,FaCalendarAlt,FaClock } from "react-icons/fa";
import React from 'react';
function Events() {
    return (
        <div>
            <section className='sec_event mt-4'>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={6} xs={12}  className='pt-4 pt-lg-0'>
                            <div className='sec_hed_left event_hed'>
                                <span>Our Event's</span>
                                <h2>You Can Attend our upcoming events</h2>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}  className='pt-4 pt-lg-0'>
                            <div className='event_items'>
                                <div className='event_img'>
                                    <img src={require('../images/asset 17.jpeg')} alt=" " className='img-fluid'/>
                                </div>
                                <div className='event_detail'>
                                <span><FaMapMarkerAlt className='event_icon'/> Cirantam’s, Shiloh, Hawaii8062, USA.</span>
                                <h2><a href="index.html">Letraset sheets passage and recently.</a></h2>
                                <div class="event-date d-flex justify-content-between align-items-center">
                                        <span class="date"><FaCalendarAlt  className='event_icon'/>28.06.2022</span>
                                        <span class="time"><FaClock  className='event_icon'/>9:00 AM - 10:00 AM</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}  className='pt-4 pt-lg-0'>
                            <div className='event_items'>
                                <div className='event_img'>
                                    <img src={require('../images/asset 18.jpeg')} alt=" " className='img-fluid'/>
                                </div>
                                <div className='event_detail'>
                                <span><FaMapMarkerAlt className='event_icon'/> Cirantam’s, Shiloh, Hawaii8062, USA.</span>
                                <h2><a href="index.html">Letraset sheets passage and recently.</a></h2>
                                <div class="event-date d-flex justify-content-between align-items-center">
                                        <span class="date"><FaCalendarAlt  className='event_icon'/>28.06.2022</span>
                                        <span class="time"><FaClock  className='event_icon'/>9:00 AM - 10:00 AM</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12} className='pt-4 pt-lg-0'>
                            <div className='event_items'>
                                <div className='event_img'>
                                    <img src={require('../images/asset 19.jpeg')} alt=" " className='img-fluid'/>
                                </div>
                                <div className='event_detail'>
                                <span><FaMapMarkerAlt className='event_icon'/> Cirantam’s, Shiloh, Hawaii8062, USA.</span>
                                <h2><a href="index.html">Letraset sheets passage and recently.</a></h2>
                                <div class="event-date d-flex justify-content-between align-items-center">
                                        <span class="date"><FaCalendarAlt  className='event_icon'/>28.06.2022</span>
                                        <span class="time"><FaClock  className='event_icon'/>9:00 AM - 10:00 AM</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
               
            </section>
        </div>
    );
}
export default Events;