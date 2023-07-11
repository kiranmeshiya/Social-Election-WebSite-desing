import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Container} from 'react-bootstrap';


function Services() {
  
    return (
        <>
            <section className='spacer'>
                <Container>
                    <OwlCarousel className='owl-theme' loop margin={10} nav navText={[
  '&#171;',
  '&#187;'
]} dots={false} responsive= {
                {
                    '0':{
                        items: 1
                    },
                    '800': {
                        items: 2
                    },
                    '1200': {
                        items: 3
                    }
                }
                
            }
            >
                        <div className='item'>
                          <div className='item_containt text-center'>
                            <div class="service_icon">
                                {/* <img src={require('../images/asset 6.png')} alt=""className="img-fluid"/> */}
                                <img src={require('../images/4.png')} alt="" style={{width:'80%'}}/>
                            </div>
                            <h2>MAKE DONATION</h2>
                            <p>Lorem Ipsum is simply dummy text the industrey's standard dummy text ever scrambled type specimen</p>
                            <a href="service-single.html">Details</a>
                          </div>
                        </div>
                        <div class='item'>
                        <div className='item_containt text-center'>
                            <div class="service_icon" style={{backgroundColor:'#DE2045'}}>
                                {/* <img src={require('../images/asset 6.png')} alt=""className="img-fluid"/> */}
                                <img src={require('../images/3.png')} alt="" style={{width:'80%'}}/>
                            </div>
                            <h2>Our Campaign</h2>
                            <p>Lorem Ipsum is simply dummy text the industrey's standard dummy text ever scrambled type specimen</p>
                            <a href="service-single.html">Details</a>
                          </div>
                        </div>
                        <div class='item'>
                        <div className='item_containt text-center'>
                            <div class="service_icon">
                                {/* <img src={require('../images/asset 6.png')} alt=""className="img-fluid"/> */}
                                <img src={require('../images/5.png')} alt="" style={{width:'80%'}}/>
                            </div>
                            <h2>Become Volunteer</h2>
                            <p>Lorem Ipsum is simply dummy text the industrey's standard dummy text ever scrambled type specimen</p>
                            <a href="service-single.html">Details</a>
                          </div>
                        </div>
                        <div className='item'>
                          <div className='item_containt text-center'>
                            <div class="service_icon" style={{backgroundColor:'#DE2045'}}>
                                {/* <img src={require('../images/asset 6.png')} alt=""className="img-fluid"/> */}
                                <img src={require('../images/4.png')} alt="" style={{width:'80%'}}/>
                            </div>
                            <h2>MAKE DONATION</h2>
                            <p>Lorem Ipsum is simply dummy text the industrey's standard dummy text ever scrambled type specimen</p>
                            <a href="service-single.html">Details</a>
                          </div>
                        </div>
                        <div class='item'>
                        <div className='item_containt text-center'>
                            <div class="service_icon">
                                {/* <img src={require('../images/asset 6.png')} alt=""className="img-fluid"/> */}
                                <img src={require('../images/3.png')} alt="" style={{width:'80%'}}/>
                            </div>
                            <h2>Our Campaign</h2>
                            <p>Lorem Ipsum is simply dummy text the industrey's standard dummy text ever scrambled type specimen</p>
                            <a href="service-single.html">Details</a>
                          </div>
                        </div>
                        <div class='item'>
                        <div className='item_containt text-center'>
                            <div class="service_icon" style={{backgroundColor:'#DE2045'}}>
                                {/* <img src={require('../images/asset 6.png')} alt=""className="img-fluid"/> */}
                                <img src={require('../images/5.png')} alt="" style={{width:'80%'}}/>
                            </div>
                            <h2>Become Volunteer</h2>
                            <p>Lorem Ipsum is simply dummy text the industrey's standard dummy text ever scrambled type specimen</p>
                            <a href="service-single.html">Details</a>
                          </div>
                        </div>
                        
                    </OwlCarousel>

                </Container>
            </section>
        </>
    );
}

export default Services;

