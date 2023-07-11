import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';
import React from 'react';

function Counters1() {
    return (
        <div>
            <section className='counter_sec'>
                <Container>
                    <Row className='info_1'>
                        <Col xs={12} md={6} lg={3} className='m-0 ,p-0'>
                            <div className='item m-0 ,p-0'>
                                <div class="info">
                                    <h3>25</h3>
                                    <p>AREA COVERAGE</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className='item m-0 ,p-0'>
                                <div class="info">
                                    <h3>32</h3>
                                    <p>Campaign Done</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className='item m-0 ,p-0'>
                                <div class="info">
                                    <h3>321K</h3>
                                    <p>Project Done</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className='item m-0 ,p-0'>
                                <div class="info">
                                    <h3>8M</h3>
                                    <p>Active Valunteer</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </div>
    );
}

export default Counters1;