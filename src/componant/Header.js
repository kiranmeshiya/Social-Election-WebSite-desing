import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import {Container, Row, Col} from 'react-bootstrap';
import { FiPhoneCall} from "react-icons/fi";
import {TfiEmail,TfiLocationPin  } from "react-icons/tfi";
import { TiSocialFacebook,TiSocialTwitter,TiSocialInstagram ,TiSocialGooglePlus} from "react-icons/ti";
import React from 'react';
function Header() {
  return (
    <>
    
             
    <header className='top_header'>
     <Container fluid>
      <Row className='d-flex'>
        <Col sm={12} md={8} className="p-0" >
            <div className='contact_detail'>
                <ul className='d-flex'>
                    <li><FiPhoneCall className='icon_top'/>Call Us: 548978478</li>
                    <li><TfiEmail className='icon_top'/>demo@example.com</li>
                    <li><TfiLocationPin className='icon_top'/>45 Dreem street Austria</li>
                </ul>
            </div>
        </Col>
        <Col sm={12} md={4} className="p-0" >
        <div class="contact_detail ic">
            <ul className='d-flex '>
                <li className='d-inline-block' ><a href="index.html">Social Address:</a></li>
                <li><a href="index.html"><TiSocialFacebook className='icon_top2'/></a></li>
                <li><a href="index.html"><TiSocialTwitter className='icon_top2'/></a></li>
                <li><a href="index.html"><TiSocialInstagram className='icon_top2'/></a></li>
                <li><a href="index.html"><TiSocialGooglePlus className='icon_top2'/></a></li>
            </ul>
        </div>
        </Col>
      </Row>
    </Container>
    </header>  
    </>
  );
}

export default  Header;
