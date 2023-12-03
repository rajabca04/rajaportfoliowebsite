
import Contactme from "./Contactme";
import Footer from "./Footer";
import Herosection from "./Herosection";
import Myworks from "./Myworks";
import Navbar from "./Navbar";

export default function Homepage() {
  return (
    <>
     <Navbar/>
     <Herosection/>
     <Myworks/>
     <Contactme/>
     <Footer/>
    </>
  );
}
