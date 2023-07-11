
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import AboutTitle from './About_Title';
import Footer from './Footer.js';
import Services from './Services';
import Aboutus from './Aboutus';
import Team from './Team';
import Callus from './Callus';
// import AboutEvent from './Event_Title.js';
// import AboutBlog from './Blog_Title.js';
// import ContactTitle from './Contact_Title.js'

function About() {
  return (
    <div>
      <Navbar />
      <AboutTitle/>
      <Services/>
      <Aboutus/>
      <Team/>
      <Callus/>
      <Footer /> 
    </div>
  );
}
export default About;