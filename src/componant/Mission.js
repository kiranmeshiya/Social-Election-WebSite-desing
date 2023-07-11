import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container } from 'react-bootstrap';
import '../style.css';

function Mission() {
    return (
        <div>
            <section className='mission_sec spacer'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={8} xs={12} className="text-center">
                            <div className='sec_hed_left sec_title'>
                                <span>Our Mission &amp; Vission</span>
                                <h2>We Can Make Solution Everything To Our Demand.</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className='mission_wrap'>
                    <Row>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 9.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">MEDICAL SYSTEM</div>
                                <div class="mission_item_text">
                                    <h3>MEDICAL SYSTEM</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                               
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 10.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">residential area</div>
                                <div class="mission_item_text">
                                    <h3>residential area</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 11.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">Traffic Jam</div>
                                <div class="mission_item_text">
                                    <h3>Traffic Jam</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 12.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">Economic Zone</div>
                                <div class="mission_item_text">
                                    <h3>Economic Zone</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 13.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">Food Safety</div>
                                <div class="mission_item_text">
                                    <h3>Food Safety</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 14.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">Foreign policy</div>
                                <div class="mission_item_text">
                                    <h3>Foreign policy</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className='mission_item'>
                                <img src={require('../images/asset 15.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">Education SYSTEM</div>
                                <div class="mission_item_text">
                                    <h3>Education SYSTEM</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12} >
                            <div className='mission_item'>
                                <img src={require('../images/asset 16.jpeg')} alt="" className='img-fluid '></img>
                                <div class="mission_item_title">Family Safety</div>
                                <div class="mission_item_text">
                                    <h3>Family Safety</h3>
                                    <p>Lorem Ipsum has been the industry's standard dummy of the text ever since make.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
                {/* <div class="shape-1">
                <svg width="1245" height="1206" viewBox="0 0 1245 1206" fill="none">
                    <path opacity="0.6" d="M0 0L1245 619V1206H0V0Z"></path>
                    <defs>
                        <linearGradient id="paint0_linear_1_102" x1="622.5" y1="0" x2="622.5" y2="1206" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#F8F2F2"></stop>
                            <stop offset="1" stop-color="#F8F2F2" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="shape-2">
                <svg width="945" height="884" viewBox="0 0 945 884" fill="none">
                    <path opacity="0.6" d="M945 0L0 503V884L945 359V0Z"></path>
                    <defs>
                        <linearGradient id="paint0_linear_1_106" x1="945" y1="64" x2="661" y2="809" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#F8F2F2"></stop>
                            <stop offset="1" stop-color="#F8F2F2" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}
            </section>
        </div>
    );
}

export default Mission;