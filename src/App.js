import React, { useRef, useState } from "react";
import AboutUs from './AboutUs';
import Nav from "./Nav";
import HomeAutoSlide from "./HomeAutoSlide";
import Department from "./Department";
import Top from "./images/top.png";
import Orthology from "./Orthology";
import Cardiology from "./Cardiology";
import Neurology from "./Neurology";
import Gastrology from "./Gastrology";
import Urology from "./Urology";
import InitialFile from './InitialFile';
import Gallery from "./Gallery";
import Footer from "./Footer";
function App() {
  const topRef = useRef(null);
  const cardioRef = useRef(null);
  const orthoRef = useRef(null);
  const neuroRef = useRef(null);
  const gastorRef = useRef(null);
  const UroRef = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const gallery = useRef(null);
  const footer = useRef(null);
  // const Home = useRef(null);
  const [login, setLogin] = useState(false);
  // const [navRender, setNavRender ] = useState();
  const scrollToDiv = (temp) => {
    if(temp.current){
      temp.current.scrollIntoView({behaviour:"smooth"});
    }
  };
  
  const UpdateLogin = () =>{
    setLogin(!login);
  }
 
  // return (
  //   <div className="App">
  //   <InitialFile/>
  //   </div>
  // );


  return (
    <div className="App">
    {login && (
      <InitialFile/>
    )}
    {!login && (
      <>
      <Nav UpdateLogin={UpdateLogin} scrollToAbout={()=>{scrollToDiv(about)}} scrollToHome={()=>{scrollToDiv(topRef)}} scrollToServices={()=>{scrollToDiv(services)}} scrollToGallery={()=>{scrollToDiv(gallery)}} scrollToFooter={()=>{scrollToDiv(footer)}}/>
          <div className="top" ref={topRef}>
              {/* <Nav UpdateLogin={UpdateLogin} scrollToAbout={()=>{scrollToDiv(about)}}/> */}
              {/* <div className="blureff"></div> */}

              {/* <Router>
                <Route path="/about" component={AboutUs} />
              </Router> */}
              <HomeAutoSlide/>
              {/* { (navRender === 'Home' && <HomeAutoSlide/>)} */}
             
            </div>
            <button className="btn_top" onClick={() => scrollToDiv(topRef)}>
              <img src={Top} alt="" className="top_img" />
            </button>
            <div ref={services}>
              <Department scrollToOrtho={()=>{scrollToDiv(orthoRef)}} scrollToCardio={()=>{scrollToDiv(cardioRef)}} scrollToNeuro={()=>{scrollToDiv(neuroRef)}}  scrollToGastro={()=>{scrollToDiv(gastorRef)}} scrollToUro={()=>{scrollToDiv(UroRef)}}/>
            </div>
            {/* <Department scrollToOrtho={()=>{scrollToDiv(orthoRef)}} scrollToCardio={()=>{scrollToDiv(cardioRef)}} scrollToNeuro={()=>{scrollToDiv(neuroRef)}}  scrollToGastro={()=>{scrollToDiv(gastorRef)}} scrollToUro={()=>{scrollToDiv(UroRef)}} ref={services}/> */}
            <Orthology ref={orthoRef}/>
            <Neurology ref={neuroRef}/>
            <Cardiology  ref={cardioRef}/>
            <Gastrology ref={gastorRef}/>
            <Urology ref={UroRef}/>
            <AboutUs ref={about}/>
            <Gallery ref={gallery}/>
            <Footer ref={footer}/>
      </>
    )}
      
    </div>
  );
}

export default App;
