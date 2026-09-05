import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// import optional lightbox plugins
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import { useEffect } from 'react';
import Footer from "./footer";
import Header from "./header";




const photos = [{src: CircularWide , width:2520, height:2267, alt: 'painting of CircularWide'},

{src: DefaultWide , width:2550, height:1950, alt: 'painting of DefaultWide'},

{src: gdc , width:3300, height:5100, alt: 'painting of gdc'},

{src: gdc , width:3300, height:5100, alt: 'painting of gdc'},

{src: kabel , width:3300, height:5100, alt: 'painting of kabel'},

{src: VerticalDark , width:799, height:1325, alt: 'painting of VerticalDark'},

{src: VerticalTwoTone , width:1216, height:1940, alt: 'painting of VerticalTwoTone'},

]

import CircularWide  from './design/CircularWide.png';

import DefaultWide  from './design/DefaultWide.png';

import gdc  from './design/gdc.jpg';


import kabel  from './design/kabel.png';

import VerticalDark  from './design/VerticalDark.png';

import VerticalTwoTone  from './design/VerticalTwoTone.png';




function Design()
 { 
const headerVersion = "design"

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
                    <h1>Design</h1>
                    <h4>ill add some description to these soon</h4>    
    </div>
        <div id="main">

    <RowsPhotoAlbum  
      photos={photos}
      spacing={5} 
      targetRowHeight={1000}
      onClick={({ index }) => setIndex(index)} />
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

export default Design;
