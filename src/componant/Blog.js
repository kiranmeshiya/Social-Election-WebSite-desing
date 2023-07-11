import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css';

import React from 'react';
function Blog() {
    return (
        <div>
            <section className='blog_sec spacer'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={8} xs={12} className="text-center">
                            <div className='sec_hed_left sec_title'>
                                <span>Blog Post</span>
                                <h2>Awesome Blog Post &amp; Article. </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={4} md={6} xs={12} className='pt-4 pt-lg-0'>
                            <div className='blog_item'>
                                <div className='blog_img'>
                                    <img src={require('../images/asset 20.jpeg')} alt="" className='img-fluid' />
                                </div>
                                <div className='blog_date'>
                                    <span>26</span><br/>
                                    <strong>AUGUST</strong>
                                </div>
                                <div className='blog_detail'>
                                    <h2>Letraset sheets passage and recently.</h2>
                                    <p>Lorem sum has been the industry standard dummy of the text ever since the
                                        scrambled it to make.</p>
                                    <a href="index.html" class="btn_blog">READ MORE</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12} className='pt-4 pt-lg-0'>
                            <div className='blog_item'>
                                <div className='blog_img'>
                                    <img src={require('../images/asset 21.jpeg')} alt="" className='img-fluid' />
                                </div>
                                <div className='blog_date'>
                                    <span>28</span><br/>
                                    <strong>AUGUST</strong>
                                </div>
                                <div className='blog_detail'>
                                    <h2>Letraset sheets passage and recently.</h2>
                                    <p>Lorem sum has been the industry standard dummy of the text ever since the
                                        scrambled it to make.</p>
                                    <a href="index.html" class="btn_blog">READ MORE</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12} className='pt-4 pt-lg-0'>
                            <div className='blog_item'>
                                <div className='blog_img'>
                                    <img src={require('../images/asset 22.jpeg')} alt="" className='img-fluid' />
                                </div>
                                <div className='blog_date'>
                                    <span>30</span><br/>
                                    <strong>AUGUST</strong>
                                </div>
                                <div className='blog_detail'>
                                    <h2>Letraset sheets passage and recently.</h2>
                                    <p>Lorem sum has been the industry standard dummy of the text ever since the
                                        scrambled it to make.</p>
                                    <a href="index.html" class="btn_blog">READ MORE</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
               
            </section>
        </div>

    );
}
export default Blog;