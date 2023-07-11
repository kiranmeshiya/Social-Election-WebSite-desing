import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegComment, FaPlay } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';
import Pagination from 'react-bootstrap/Pagination';

function Blogsecfull() {


    return (
        <div>
            <section className='sec_blog spacer'>
                <Container>
                    <Row className='margin_c'>
                   
                        <Col lg={10} xs={12}>
                            <div className='blog_sec1'>
                                <div className='blog_details'>
                                    <div className='blog_img1'>
                                        <img src={require('../images/blog1.jpeg')} alt="" className='img-fluid'></img>
                                    </div>
                                    <div className='blog_list'>
                                        <ul className='d-flex p-0'>
                                            <li><CiUser className='blog_i' /> By <a href="/home">Jenny Watson</a> </li>
                                            <li><FaRegComment className='blog_i' />Comments 35 </li>
                                            <li><AiOutlineCalendar className='blog_i' /> 24 Jun 2022</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <h3><a href="blog-single.html">Principle stability in the future with activity</a></h3>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                    <a href="blog-single.html" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div className='blog_sec2'>
                                <div className='blog_list'>
                                    <ul className='d-flex p-0'>
                                        <li><CiUser className='blog_i' /> By <a href="/home">Jenny Watson</a> </li>
                                        <li><FaRegComment className='blog_i' />Comments 35 </li>
                                        <li><AiOutlineCalendar className='blog_i' /> 24 Jun 2022</li>
                                    </ul>
                                </div>
                                <div class="blog-content">
                                    <h3><a href="blog-single.html">We’re the people who don’t just support progressive change</a></h3>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                    <a href="blog-single.html" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div className='blog_sec3 owl'>
                                <Carousel className='blog_carousel'>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require('../images/blog2.jpeg')}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require('../images/blog1.jpeg')}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <div className='blog_list'>
                                    <ul className='d-flex p-0'>
                                        <li><CiUser className='blog_i' /> By <a href="/home">Jenny Watson</a> </li>
                                        <li><FaRegComment className='blog_i' />Comments 35 </li>
                                        <li><AiOutlineCalendar className='blog_i' /> 24 Jun 2022</li>
                                    </ul>
                                </div>
                                <div class="blog-content">
                                    <h3><a href="blog-single.html">How to invent a law &amp; pass it in parliament</a></h3>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                    <a href="blog-single.html" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div className='blog_sec4'>
                                <div className='blog_details'>
                                    <div className='blog_img1 blog_img_before'>
                                        <img src={require('../images/blog3.jpeg')} alt="" className='img-fluid'></img>
                                        <a href="https://www.youtube.com/embed/3ZJ5K0zo7dc" class="video-btn" data-type="iframe">
                                            <FaPlay className='play_icon' /></a>

                                    </div>
                                    <div className='blog_list'>
                                        <ul className='d-flex p-0'>
                                            <li><CiUser className='blog_i' /> By <a href="/home">Jenny Watson</a> </li>
                                            <li><FaRegComment className='blog_i' />Comments 35 </li>
                                            <li><AiOutlineCalendar className='blog_i' /> 24 Jun 2022</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <h3><a href="blog-single.html"> We are the people who don’t just support  progressive change </a>
                                    </h3>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.</p>
                                    <a href="blog-single.html" class="read-more">READ MORE...</a>
                                </div>
                            </div>
                            <div className='blog_sec4'>

                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Next />
                                </Pagination>
                            </div>
                        </Col>
                      
                    </Row>
                </Container>
            </section>
        </div >
    );
}
export default Blogsecfull;