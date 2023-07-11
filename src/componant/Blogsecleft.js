import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegComment, FaPlay, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineCalendar } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';
import Pagination from 'react-bootstrap/Pagination';

function Blogsecleft() {


    return (
        <div>
            <section className='sec_blog spacer'>
                <Container>
                    <Row>
                        <Col lg={8} xs={12}>
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
                        <Col lg={4} xs={12}>
                            <div className='blog_sidebar'>
                                <div className='blog_person text-center'>
                                    <div className='blog_img_holder'>
                                        <img src={require('../images/blog7.jpeg')} alt="">
                                        </img>
                                    </div>
                                    <h4>Jenny Alexandra</h4>
                                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                                    <div class="social text-center ">
                                        <ul className='d-flex text-center mx-0 px-0'>
                                            <li><a href="/home"><FaFacebookF className='social_icon' /></a></li>
                                            <li><a href="/home"><FaTwitter className='social_icon' /></a></li>
                                            <li><a href="/home"><FaLinkedinIn className='social_icon' /></a></li>
                                            <li><a href="/home"><FaPinterestP className='social_icon' /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='blog_search'>
                                    <form>
                                        <div className='position-relative'>
                                            <input type="text" class="form_search" placeholder="Search Post.."></input>
                                            <button type="submit"><TfiSearch /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className='blog_categary'>
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a href="/blog">Election<span>5</span></a></li>
                                        <li><a href="/blog">Events<span>7</span></a></li>
                                        <li><a href="/blog">Politics<span>3</span></a></li>
                                        <li><a href="/blog">Program<span>6</span></a></li>
                                        <li><a href="/blog">Family<span>2</span></a></li>
                                        <li><a href="/blog">Social<span>8</span></a></li>
                                    </ul>
                                </div>
                                <div className='blog_recent'>
                                    <h3>Related Post</h3>
                                    <div className='post'>
                                        <div className='post_item  d-flex'>
                                            <div className='post_img '>
                                                <img src={require('../images/blog8.jpeg')} alt="" className='img-fluid'></img>
                                            </div>
                                            <div className='post_detail'>
                                                <h4><a href="blog-single.html">Principle stability in the future with activity</a>
                                                </h4>
                                                <span class="date">19 Jun 2022 </span>
                                            </div>
                                        </div>
                                        <div className='post_item  d-flex'>
                                            <div className='post_img '>
                                                <img src={require('../images/blog9.jpeg')} alt="" className='img-fluid'></img>
                                            </div>
                                            <div className='post_detail'>
                                                <h4><a href="blog-single.html">How to invent a law &amp; pass it in parliament</a></h4>
                                                <span class="date">22 May 2022 </span>
                                            </div>
                                        </div>
                                        <div className='post_item  d-flex'>
                                            <div className='post_img '>
                                                <img src={require('../images/blog11.jpeg')} alt="" className='img-fluid'></img>
                                            </div>
                                            <div className='post_detail'>
                                                <h4><a href="blog-single.html">Hampden-Sydney College in Virginia</a></h4>
                                                <span class="date">12 April 2022 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog_insta'>
                                    <h3>Instagram</h3>
                                    <div className='insta_pic'>
                                    <ul className='d-flex'>
                                        <li>
                                            <a href="/blog"><img src={require('../images/blog5.jpeg')} alt="" className='img-fluid'></img></a>
                                        </li>
                                        <li>
                                            <a href="/blog"><img src={require('../images/blog6.jpeg')} alt="" className='img-fluid'></img></a>
                                        </li>
                                        <li>
                                            <a href="/blog"><img src={require('../images/blog10.jpeg')} alt="" className='img-fluid'></img></a>
                                        </li>
                                        <li>
                                            <a href="/blog"><img src={require('../images/blog12.jpeg')} alt="" className='img-fluid'></img></a>
                                        </li>
                                        <li>
                                            <a href="/blog"><img src={require('../images/blog13.jpeg')} alt="" className='img-fluid'></img></a>
                                        </li>
                                        <li>
                                            <a href="/blog"><img src={require('../images/blog4.jpeg')} alt="" className='img-fluid'></img></a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className='blog_tag'>
                                    <h3>Tags</h3>
                                <div className='tag_a'>

                                    <ul className='d-flex'>
                                    <li><a href="/blog">ELECTION</a></li>
                                    <li><a href="/blog">EVENTS</a></li>
                                    <li><a href="/blog">STATEMENT</a></li>
                                    <li><a href="/blog">POLITICS</a></li>
                                    <li><a href="/blog">PRESS</a></li>
                                    <li><a href="/blog">SOCIAL</a></li>
                                    <li><a href="/blog">SECURITY</a></li>
                                    <li><a href="/blog">VOTE</a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
}
export default Blogsecleft;