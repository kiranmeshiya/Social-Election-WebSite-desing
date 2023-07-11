import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navbar from './Navbar_2.js';
import Footer from './Footer.js';
import BlogTitle from './Blog_Title.js'
import Blogsecfull from './blogsecfull';

function Blogpagefull() {
  return (
    <div>
      <Navbar />
      <BlogTitle />
      <Blogsecfull/>
      <Footer />
    </div>
  );
}
export default Blogpagefull;