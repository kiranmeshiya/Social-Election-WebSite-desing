// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Header from './Header.js';
import Navbar from './Navbar_1.js';
import Slider from './Slider.js';
import Services from './Services.js';
import Aboutus from './Aboutus.js';
import Donate from './Donate.js';
import Mission from './Mission.js';
import Events from './Events.js';
import Blog from './Blog.js';
import Footer from './Footer.js';
// import AboutEvent from './Event_Title.js';
// import AboutBlog from './Blog_Title.js';
// import ContactTitle from './Contact_Title.js'

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Services />
      <Aboutus />
      <Donate />
      <Mission />
      <Events />
      <Blog />
      <Footer /> 
    </div>
  );
}

export default Home;
