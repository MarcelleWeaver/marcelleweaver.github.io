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
import { Link } from 'react-router-dom'



import name_stack from "./assets/name_stack.png";

import name_full from "./assets/name_full.png";

import dropdown from "./assets/dropdown.png";

import exit from "./assets/exit.png";

import discord from "./assets/icons8-discord-64_background.png"

import email from "./assets/icons8-email-48_background.png"

import insta from "./assets/icons8-instagram-48_background.png"

import smile from "./assets/smile_light.png"



export default function Header({width , headerVersion } : {width : number, headerVersion :string}) {
    console.log("Wawa")
  if (width > 600) {
          return <header>
                <nav>
                    <Menudesktop headerVersion={headerVersion}/>
                    <div id="name"><img src={name_stack} alt="marcelle weaver"/></div>
                    <div id="name2"><img src={name_full} alt="marcelle weaver"/></div>

                    <div id="box1"></div>
                </nav>

                
            </header>


          }

  else {
        return <header>
                <nav>
                    <Menuphone headerVersion={headerVersion}/>
                    <div id="name"><img src={name_stack} alt="marcelle weaver"/></div>
                    <div id="box1"></div>      
                </nav>

            </header>
         }     
}


function Menuphone({headerVersion}:{headerVersion:string}) {

  const [revealed, setRevealed] = useState<boolean>(false);

  function handleClick() {
    setRevealed(true)
    
  }

  const callBack = () => {
    
    setRevealed(false);
  
  };


  if (revealed == false) {
    return ( 
      <div  onClick={handleClick} className="menu"> 
            <img className="options" 
            src={ require('./assets/dropdown.png') }
            alt="3 bars, click to access menu"/>        
      </div> );
    }

  else {
    return (
      <div  className="menu"> 
          <Dropdown headerVersion = {headerVersion} callBack = {callBack}/>
          <img className="options" 
          src={ require('./assets/dropdown.png') }
          alt="3 bars, click to access menu"/>
 
      </div> );
    };
};


const Dropdown = ({callBack, headerVersion}:{callBack : Function, headerVersion:string}) => {
  console.log("dropdownExists")
  const nav = useNavigate();

  const [revealed2, setRevealed2] = useState<boolean>(true);

  if (headerVersion == "art") {return <div className="showing"> 
          <ul>             
          <li><img  onClick={(event) => callBack(event)} className="options2"  src={exit} alt="exit" /></li>               
      <li><h2 className="nav_directions"  onClick={() => {nav("/design");}}>design             </h2></li>
      <li><h2 className="nav_directions"><Link to="https://meep-marcelle.itch.io/">games</Link></h2></li>
      <li><h2 className="nav_directions"  onClick={() => {nav("/aboutMe");}}>about             </h2></li>
          
          </ul>
        </div>
  }

  if (headerVersion == "design") {return <div className="showing"> 
  
          <ul>             
          <li><img  onClick={(event) => callBack(event)} className="options2"  src={exit} alt="exit" /></li>               
         <li><h2 className="nav_directions"  onClick={() => {nav("/art");}}>art</h2>                     </li> 
         <li><h2 className="nav_directions"><Link to="https://meep-marcelle.itch.io/">games</Link></h2>  </li>        
         <li><h2 className="nav_directions"  onClick={() => {nav("/aboutMe");}}>about</h2>               </li>         
</ul>
        </div>
  }
  
  if (headerVersion == "about") {return <div className="showing"> 
          <ul>             
          <li><img  onClick={(event) => callBack(event)} className="options2"  src={exit} alt="exit" /></li>               
          <li><h2 className="nav_directions"  onClick={() => {nav("/art");}}>art</h2>                     </li> 
         <li><h2 className="nav_directions"  onClick={() => {nav("/aboutMe");}}>design</h2>               </li>
         <li><h2 className="nav_directions"><Link to="https://meep-marcelle.itch.io/">games</Link></h2>  </li>        
          

          </ul>
        </div>
  }




}

function Menudesktop({headerVersion}:{headerVersion:string},) {
const nav = useNavigate();

  if (headerVersion == "art") {
    console.log("art")
    return (
    
      <div className="menu_desktop">
            <h2 className="nav_directions"  onClick={() => {nav("/design");}}>design             </h2>
            <h2 className="nav_directions"  onClick={() => {nav("/aboutMe");}}>about             </h2>
            <h2 className="nav_directions"><Link to="https://meep-marcelle.itch.io/">games</Link></h2>
            
  </div>)
  }

  if (headerVersion == "design") {
    console.log("design") 
    return (
    <div className="menu_desktop">
    <h2 className="nav_directions"  onClick={() => {nav("/art");}}>art</h2>
    <h2 className="nav_directions"  onClick={() => {nav("/aboutMe");}}>about</h2>
    <h2 className="nav_directions"><Link to="https://meep-marcelle.itch.io/">games</Link></h2>
       
    </div>)
  
}
  if (headerVersion == "about") {
    console.log("about")
    return (
    <div className="menu_desktop">
    <h2 className="nav_directions"  onClick={() => {nav("/art");}}>art</h2>
    <h2 className="nav_directions"  onClick={() => {nav("/design");}}>design</h2>
     
    <h2 className="nav_directions"><Link to="https://meep-marcelle.itch.io/">games</Link></h2>

  
  </div>)
  }


}