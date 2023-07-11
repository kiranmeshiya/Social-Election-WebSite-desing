import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';


function GalleryTitle() {
    return (
        <div>
            <section className='sec_img'>
                <Container className='ab'> 
                    <Row>
                        <Col xs={12}>
                            <div className='hedding_page'>
                                <h2>Gallery</h2>
                                <ul className='ps-0'>
                                    <li><a href="home">Home</a></li>
                                    <li className='active_link'>Gallery</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div>
    );
}

export default GalleryTitle;