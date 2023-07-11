import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';


function ContactTitle() {
    return (
        <div>
            <section className='sec_img'>
                <Container className='ab'> 
                    <Row>
                        <Col xs={12}>
                            <div className='hedding_page'>
                                <h2>Contact Us</h2>
                                <ul className='ps-0'>
                                    <li className='pe-3'><a href="home.html">Home</a></li>
                                    <li className='active_link ps-0'>Contact Us</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div>
    );
}

export default ContactTitle;