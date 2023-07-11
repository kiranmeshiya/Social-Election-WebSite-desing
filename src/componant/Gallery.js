
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import Footer from './Footer.js';
import GalleryTitle from './Gallery_Title';
import Galleryphotoes from './Gallery_Photo';
import Counters1 from './Counters1';

function About() {
  return (
    <div>
      <Navbar />
      <GalleryTitle />
      <Galleryphotoes />
      <Counters1/>
      <Footer />
    </div>
  );
}
export default About;