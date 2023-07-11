import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import '../style.css';
import { FaPlus } from "react-icons/fa";

function Galleryphotoes() {
    const grid1 = {
        position:'absolute',
        top:0,
        left:0,
      };
      const grid2 = {
        position:'absolute',
        top:0,
        left:'377px',
      };
      const grid3 = {
        position:'absolute',
        top:0,
        left:'754px',
      };
      const grid4 = {
        position:'absolute',
        top:'263px',
        left:0,
      };
      const grid5 = {
        position:'absolute',
        top:'263px',
        left:'754px',
      };
      const grid6 = {
        position:'absolute',
        top:'527px',
        left:0,
      };
      const grid7 = {
        position:'absolute',
        top:'527px',
        left:'754px',
      };
      const grid8 = {
        position:'absolute',
        top:'531px',
        left:'377px',
      };
    return (
        <div>
            <section className='gallery_sec spacer mb-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={8} xs={12} className="text-center">
                            <div className='sec_hed_left sec_title'>
                                <span>Gallery</span>
                                <h2>Awesome Gallery Photo.</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className='gallery_grid'>
                        <Row>
                            <div class="col-lg-12">
                                <div class="gallery_container">
                                    <div className='grid' style={grid1}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g1.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g1.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid2}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g3.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g3.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid3}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g2.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g2.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid4}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g4.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g4.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid5}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g5.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g5.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid6}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g6.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g6.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid7}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g7.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g7.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='grid' style={grid8}>
                                        <div class="img_box">
                                            <a href="../images/gallery/g8.jpeg" class="fancybox">
                                                <img src={require('../images/gallery/g8.jpeg')} alt="" className='img-fluid' />
                                                <div class="link_plus">
                                                   <FaPlus className='pls_icon'/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default Galleryphotoes;