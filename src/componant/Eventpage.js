
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
// import EventTitle from './Event_Title.js'
import Footer from './Footer.js';
import Events from './Events';
 import AboutEvent from './Event_Title.js';
// import AboutBlog from './Blog_Title.js';
// import ContactTitle from './Contact_Title.js'

function Eventpage() {
  return (
    <div>
      <Navbar />
      <AboutEvent/>
      <Events/>
      <Footer /> 
    </div>
  );
}
export default Eventpage;