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

// remember you did all this by making a python script

import bigHat  from './images/bigHat.png';

import elliotUni_copy  from './images/elliotUni_copy.webp';

import fast_plane  from './images/fast_plane.png';

import heavy  from './images/heavy.png';

import house  from './images/house.webp';

import image1  from './images/image1.jpg';

import jurgen  from './images/jurgen.png';

import koi  from './images/koi.webp';

import mech  from './images/mech.png';

import mechhand  from './images/mechhand.webp';

import oranges  from './images/oranges.png';

import pearl  from './images/pearl.png';

import PhoneBad  from './images/PhoneBad.png';

import plane  from './images/plane.jpg';

import rubySentry  from './images/rubySentry.png';

import sydPlaneGreem  from './images/sydPlaneGreem.png';

import talkers  from './images/talkers.jpg';

import utlraone  from './images/utlraone.jpg';

import vulph  from './images/vulph.png';





const photos = [{src: bigHat , width:1582, height:772},

{src: koi , width:706, height:935},

{src: elliotUni_copy , width:768, height:431},

{src: heavy , width:924, height:1099},

{src: plane , width:2102, height:1146},

{src: talkers , width:1967, height:1139},

{src: mech , width:1421, height:814},

{src: house , width:455, height:913},

{src: image1 , width:2038, height:1313},

{src: jurgen , width:853, height:600},

{src: mechhand , width:366, height:512},

{src: pearl , width:229, height:600},

{src: PhoneBad , width:1551, height:904},

{src: rubySentry , width:775, height:913},

{src: sydPlaneGreem , width:988, height:603},

{src: fast_plane , width:1085, height:600},

{src: vulph , width:988, height:838},


];



export default function Gallery() {
  const headerVersion = "art"

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
                    <h1>Art</h1>
                    <h4>digital painting and some illustration too</h4>    
    </div>

    <div id="main">
    <RowsPhotoAlbum  
      photos={photos}
      spacing={5} 
      targetRowHeight={500}
      onClick={({ index }) => setIndex(index)} 
      
      />
    </div>
    <Lightbox
      styles={{ container: { backgroundColor: "rgba(255, 255, 255, .8)" } }}
      slides={photos}
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      plugins={[Thumbnails]}/>
    <Footer />
  </div>
}



