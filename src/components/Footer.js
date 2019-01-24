import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
   
        <div className="wrapper row4 bgded overlay" style={{backgroundImage: 'url("images/demo/backgrounds/02.png")'}}>
        <footer id="footer" className="hoc clear"> 
          <div className="one_third first">
            <h6 className="heading">Basend</h6>
            <p>Nullam quis ligula elementum lectus varius aliquet vivamus odio donec metus libero semper quis suscipit ut aliquam a metus integer.</p>
            <p className="btmspace-50">Pretium curabitur magna odio laoreet eu accumsan vitae gravida quis odio.</p>
            <nav>
              <ul className="nospace">
                <li><a href="index.html"><i className="fa fa-lg fa-home" /></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Online Shop</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </nav>
          </div>
          <div className="one_third">
            <h6 className="heading">Aliquam non fermentum</h6>
            <ul className="nospace btmspace-30 linklist contact">
              <li><i className="fa fa-map-marker" />
                <address>
                  Street Name &amp; Number, Town, Postcode/Zip
                </address>
              </li>
              <li><i className="fa fa-phone" /> +00 (123) 456 7890</li>
              <li><i className="fa fa-fax" /> +00 (123) 456 7890</li>
              <li><i className="fa fa-envelope-o" /> info@domain.com</li>
            </ul>
            <ul className="faico clear">
              <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook" /></a></li>
              <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter" /></a></li>
              <li><a className="faicon-dribble" href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a className="faicon-google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a className="faicon-vk" href="#"><i className="fa fa-vk" /></a></li>
            </ul>
          </div>
          <div className="one_third">
            <h6 className="heading">Sapien lobortis nec</h6>
            <article><a href="#"><img className="btmspace-15" src="images/demo/320x140.png" alt /></a>
              <h6 className="nospace font-x1"><a href="#">Velit pellentesque</a></h6>
              <time className="font-xs block btmspace-10" dateTime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
              <p className="nospace">Eget nisl mauris placerat mauris a semper posuere sem arcu cursus felis non cursus enim odio in maecenas ut justo […]</p>
            </article>
          </div>
        </footer>
      </div>
  
    )
  }
}
