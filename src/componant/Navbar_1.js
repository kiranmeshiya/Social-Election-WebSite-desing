import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// import SVGImg from '../images/asset 1.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { SlUser } from "react-icons/sl";
function Navbar_1() {
  return (
    <>
      <section className='position-absolute w-100 head_top border-bottom'>
        <Navbar sticky collapseOnSelect expand="lg" className='d-block '>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>
            
            <Navbar.Brand href="/"><img src={require('../images/asset 1.png')} alt="" /></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/">Home
                  {/* <ul className='sub_menu'>
                    <li><a href="index.html">Home Style 1</a></li>
                    <li><a href="index.html">Home Style 2</a></li>
                    <li><a href="index.html">Home Style 3</a></li>
                    <li><a href="index.html">Home Style 4</a></li>
                  </ul> */}
                </Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="#pricing">Events
                  <ul className="sub_menu">
                    <li><a href="/event">EVENTS</a></li>
                    <li><a href="index.html">EVENTS single</a></li>
                    <li><a href="/runcamp">Running Campaign</a></li>
                    <li><a href="index.html">Election Campaign</a></li>
                    <li><a href="index.html">Election Mission</a></li>
                    <li><a href="index.html">Donate</a></li>
                  </ul>
                </Nav.Link>
                <Nav.Link href="#pricing">Pages
                  <ul className="sub_menu">
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="testimonial.html">Testimonial</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="team-single.html">Team Single</a></li>
                    <li>
                      <a href="#index.html">Services</a>
                      {/* <ul class="sub-menu">
                                <li><a href="service.html">Services Style 1</a></li>
                                <li><a href="service-s2.html">Services Style 2</a></li>
                                <li><a href="service-single.html">Services Single</a></li>
                              </ul> */}
                    </li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="shop-single.html">Shop Single</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="404.html">404 Error</a></li>
                  </ul>
                </Nav.Link>
                <Nav.Link href="/blog">Blog
                  <ul class="sub_menu">
                    <li><a  href="/blogright">Blog right sidebar</a></li>
                    <li><a href="/blogleft">Blog left sidebar</a></li>
                    <li><a href="/blogfull">Blog fullwidth</a></li>
                    {/* <li><a href="blog.html">Blog details</a> */}
                      {/* <ul class="sub-menu">
                        <li><a href="blog-single.html">Blog details right sidebar</a>
                        </li>
                        <li><a href="blog-single-left-sidebar.html">Blog details left
                          sidebar</a></li>
                        <li><a href="blog-single-fullwidth.html">Blog details
                          fullwidth</a></li>
                      </ul> */}
                    {/* </li> */}
                  </ul>
                </Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
             
             
            
            </Navbar.Collapse>
            <div>
                <a href="donate.html" className='nav_btn  d-lg-block d-none'>MAKE DONATION</a>
                <a href="index.html" className='nav_btn d-block d-lg-none'><SlUser className='icon_user'/></a>
              </div>
          </Container>
        </Navbar>

      </section>
    </>
  );
}

export default Navbar_1;
