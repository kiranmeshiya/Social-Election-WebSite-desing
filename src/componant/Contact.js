import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import Footer from './Footer.js';
import ContactTitle from './Contact_Title';
import Contactus from './Contactus';
import Map1 from './Map1';

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactTitle />
    <Contactus/>
    <Map1/>
      <Footer />
    </div>
  );
}
export default Contact;