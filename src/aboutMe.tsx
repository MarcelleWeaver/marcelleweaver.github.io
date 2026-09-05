
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// import optional lightbox plugins
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

import me from "./assets/me.png"

function AboutMe()
 {
  const headerVersion = "about"
  
  const [index, setIndex] = useState(-1);
  
  const [width, setWidth] = useState<number>(window.innerWidth);
  
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
  
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    return <div>
      
      <Header 
      width = {width} 
      headerVersion = {headerVersion} />
      
      <div id="subtitle">
                    <h1>About Me</h1>
                    <h4>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h4>   
                    <div id="aboutMeContainer">
                    <img src={me} alt="a photo of me holding an umbrella in a bike tunell"/>
                    
                    <p>I'm Marcelle Weaver a new insect they found on the ground next to a Dominoes. I'm the only extant member of my species, but this has not deterred me in my pursuits of education, art, and making fun little games. I will continue to pursue these goals until someone stops me.</p>
                    </div>
    </div>

    
      <Footer />
    </div>
  
}
export default AboutMe;