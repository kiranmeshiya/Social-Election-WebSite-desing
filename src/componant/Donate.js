import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../style.css';
import React from 'react';

function Donate() {
    return (
      <div>
            <section className='donate'>
                <Container>
                    <div className='donation_sec'>
                        <Row className='align-items-center'>
                            <Col lg={5} sm={12}>
                                <div className='donate_img'>
                                <img src={require('../images/asset 8.jpeg')} alt="sec_image" className='fluid'/>
                                </div>
                            </Col>
                            <Col lg={7} sm={12} className='pt-4 pt-lg-0'>
                            <div className='donate_text'>
                                <span className='sub_title'>DONATE TODAY!</span>
                                <h2 class="title">You Can Contribute Our Last Campaign</h2>
                                <div class="progress_bar">
                                    <div class="donate-progress">
                                        <ProgressBar className="bar_color" now={75} />
                                    </div>
                                    <div className='d-flex justify-content-between progress_text'>
                                        <div class="goal">
                                            <span>Goal:</span>
                                            <strong>$85,000</strong>
                                        </div>
                                        <div class="goal text-center w-50">
                                            <span>Raised:</span>
                                            <strong>$74,000</strong>
                                        </div>
                                    </div>
                                </div>
                                <a href="donate.html" class="btn_donate">DONATE NOW</a>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
      </div>
    );
  }
  
  export default Donate;
  