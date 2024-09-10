
import Intro from "./components/Intro/Intro";
import AboutUs from "./components/AboutUs/AboutUs";
import Blurb from "./components/Blurb/Blurb";
import LatestWorks from "./components/LatestWorks/LatestWorks";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import StickyHeader from "./components/Header/sticky_header";
import Header2 from "./components/Header/Header2";
import Footer from "./components/Footer/Footer";
import ResponiveNav from "./components/Header/responive-nav";


export default function Home() {
  return (
    <>
      <div className="page windows desktop landscape rd-navbar-fullwidth-linked components-ready page-loaded">
        {/* <Header /> */}
        <StickyHeader/>
      

       
        
        <main>
          <Intro />
          <AboutUs />
          <Blurb />
          <LatestWorks />
          <Clients />
          <Contact />
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  );
}
