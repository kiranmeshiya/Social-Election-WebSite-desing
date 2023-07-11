import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
// import {TfiArrowRight} from 'react-icons/tfi'

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <section className='main_slider m-0 p-0'>
                <Container fluid className='g-x-0 p-0 m-0'>
                    <Carousel activeIndex={index} onSelect={handleSelect} className='owl_main'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img_1"
                                src={require('../images/asset 24.jpeg')}
                                alt="First slide"
                            />
                            {/* <div className='img_1 d-block w-100'> */}
                            <Carousel.Caption>
                                <h2>Life Without Liberty, As like Hell.</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.</p>
                                <a href="about.html" class="slide_btn">JOIN THE CAMPAIGN</a>
                            </Carousel.Caption>
                           
                        </Carousel.Item>
                       
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../images/asset 25.jpeg')}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h2>Let's Make America Great Again</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.</p>
                                <a href="about.html" class="slide_btn">JOIN THE CAMPAIGN</a>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={require('../images/asset 26.jpeg')}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2>Life Without Liberty, As like Hell.</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.</p>
                                <a href="about.html" class="slide_btn btn_donate">JOIN THE CAMPAIGN</a>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
        </div>
    );
}

export default Slider;
