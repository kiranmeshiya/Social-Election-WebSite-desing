import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import Footer from './Footer.js';
import BlogTitle from './Blog_Title.js'
import Blogsecleft from './Blogsecleft';

function Blogpageleft() {
  return (
    <div>
      <Navbar />
      <BlogTitle />
      <Blogsecleft/>
      <Footer />
    </div>
  );
}
export default Blogpageleft;