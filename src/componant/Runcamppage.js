import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import Footer from './Footer.js';
import RuncampTitle from './RuncampTitle';


function Runcamppage() {
  return (
    <div>
      <Navbar />
      <RuncampTitle />
      <Footer />
    </div>
  );
}
export default Runcamppage;