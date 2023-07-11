import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col } from 'react-bootstrap';
import '../style.css';


function Callus() {
    return (
        <div>
            <section className='call_sec spacer'>
                <Container>
                    <Row>
                        <Col xs={12}>
                        <div className='call_backimg'>
                            <div className='call_item d-lg-flex'>
                                <div className='call_text'>
                                    <span>WE ARE HERE</span>
                                    <h2>Let’s fight with all injustice and corruption.</h2>
                                </div>
                                <div className='call_btn'>
                                <a href="contact.html">Call us</a>
                                </div>
                                <div class="call_shape">
                                    <svg width="325.000000pt" height="267.000000pt" viewBox="0 0 325.000000 267.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,267.000000) scale(0.100000,-0.100000)" stroke="none">
                                            <path d="M0 1332 l0 -1332 920 0 919 0 39 53 c213 291 233 519 64 720 -101 119 -201 194 -617 462 -344 222 -452 297 -605 426 -320 268 -528 547 -676 906 -20 48 -38 90 -40 92 -2 2 -4 -595 -4 -1327z"></path>
                                        </g>
                                    </svg>
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

export default Callus;