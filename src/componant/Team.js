import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container } from 'react-bootstrap';
import '../style.css';
import { FaPlus } from "react-icons/fa";

function Team() {
    return (
        <div>
            <section className='team_sec'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={8} xs={12} className="text-center">
                            <div className='sec_hed_left sec_title'>
                                <span>TEAM MEMBERS</span>
                                <h2>Campaign Staff</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className='mission_wrap'>
                    <Row>
                        <Col lg={3} md={6} xs={12}>
                            <div className='team_item'>
                                <div className='team_img'>
                                <img src={require('../images/about/team1.jpeg')} alt="" className='img-fluid '></img>
                                <div class="team_item_text">
                                    <span>Manager</span>
                                    <h2>Stephen Jefferson</h2>
                                    <div class="button_plus">
                                            <a href="team-single.html"><FaPlus/></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className='team_item'>
                                <div className='team_img'>
                                <img src={require('../images/about/team2.jpeg')} alt="" className='img-fluid '></img>
                                <div class="team_item_text">
                                    <span>Coordinator</span>
                                    <h2>Kathy Hughes</h2>
                                    <div class="button_plus">
                                            <a href="team-single.html"><FaPlus/></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className='team_item'>
                                <div className='team_img'>
                                <img src={require('../images/about/team3.jpeg')} alt="" className='img-fluid '></img>
                                <div class="team_item_text">
                                    <span>Director</span>
                                    <h2>Greg Morgan</h2>
                                    <div class="button_plus">
                                            <a href="team-single.html"><FaPlus/></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12}>
                            <div className='team_item'>
                                <div className='team_img'>
                                <img src={require('../images/about/team1.jpeg')} alt="" className='img-fluid '></img>
                                <div class="team_item_text">
                                    <span>PR Specialist</span>
                                    <h2>Marcia Davis</h2>
                                    <div class="button_plus">
                                            <a href="team-single.html"><FaPlus/></a>
                                    </div>
                                </div>
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

export default Team;