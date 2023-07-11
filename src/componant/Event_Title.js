import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';


function AboutEvent() {
    return (
        <div>
            <section className='sec_img'>
                <Container className='ab'> 
                    <Row>
                        <Col xs={12}>
                            <div className='hedding_page'>
                                <h2>Events</h2>
                                <ul className='ps-0'>
                                    <li><a href="home.html">Home</a></li>
                                    <li className='active_link'>Events</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div>
    );
}

export default AboutEvent;