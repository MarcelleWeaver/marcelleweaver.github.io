
import discord from "./assets/icons8-discord-64_background.png"

import email from "./assets/icons8-email-48_background.png"

import insta from "./assets/icons8-instagram-48_background.png"

import smile from "./assets/smile_light.png"

export default function Footer() {
    return <footer>
        <div className="footer_bits"><img className="icon" src={discord}/><p>.meepster</p></div>
        <div className="footer_bits"><img className="icon" src={insta}/> <p>@marcelletweaver</p></div>
        <div className="footer_bits" ><img className="icon" src={email}/><p>marcelletweaver@gmail.com</p></div>
        <div className="footer_bits" ><img id="silly" src={smile}/></div>
      </footer>
}
