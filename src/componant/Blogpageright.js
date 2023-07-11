import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import Footer from './Footer.js';
import BlogTitle from './Blog_Title.js'
import Blogsecright from './Blogsecright';

function Blogpageright() {
  return (
    <div>
      <Navbar />
      <BlogTitle />
      <Blogsecright/>
      <Footer />
    </div>
  );
}
export default Blogpageright;