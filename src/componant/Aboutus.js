import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';

function Aboutus() {
       return (
        <div>
            <section className='sec_about_as'>
                <Container>
                    <Row className='align-items-center d-flex'>
                        <Col xs={12} md={12} lg={6}>
                            <div className='img_sec'>
                                <img src={require('../images/asset 5.jpeg')} alt="sec_image" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6} className='pt-4 pt-lg-0'>
                            <div className='sec_text ps-xs-0 ps-lg-5'>
                                <div className='sec_hed_left'>
                                    <span>About Us</span>
                                    <h2>We Can Make Our New Histry Together!</h2>
                                </div>
                                <p class="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras.
                                 Tristique semper adipiscing massa placerat dictumst amet, libero vitae.
                                  Eget purus blandit velit sit mauris nibh porta.
                                 Sagittis iaculis feugiat sed sem diam, sagittis ullamcorper. Vel posuere justo, </p>
                                 <Row>
                                    <Col lg={6} md={12}>
                                        <div className='about_text'>
                                            <div className='img_about'>
                                            <img src={require('../images/asset 6.png')} alt="sec_image" fluid />
                                            </div>
                                            <div class="text">
                                                 <h3>OUR CAMPAIGN</h3>
                                                 <p>Standard dummy of the text ever  the scrambled it to make.</p>
                                             </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className='about_text'>
                                            <div className='img_about'>
                                            <img src={require('../images/asset 7.png')} alt="sec_image" />
                                            </div>
                                            <div class="text">
                                                 <h3>BECOME A VOLUNTEER</h3>
                                                 <p>Standard dummy of the text ever  the scrambled it to make.</p>
                                             </div>
                                        </div>
                                    </Col>
                                 </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Aboutus;
