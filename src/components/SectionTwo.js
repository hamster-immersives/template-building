import React, { Component } from 'react'

export default class SectionTwo extends Component {
  render() {
    return (
        <div className="wrapper overlay coloured">
        <section className="hoc container clear"> 
          <div className="sectiontitle">
            <h6 className="heading">Varius tristique</h6>
            <p>Luctus et ultrices posuere cubilia curae maecenas.</p>
          </div>
          <ul id="stats" className="nospace group">
            <li className="one_quarter first"><a href="#"><i className="fa fa-3x fa-cogs" /></a>
              <p>Faucibus</p>
              <p>12345</p>
            </li><li className="one_quarter"><a href="#"><i className="fa fa-3x fa-comments-o" /></a>
              <p>Pellentesque</p>
              <p>12345</p>
            </li>
            <li className="one_quarter"><a href="#"><i className="fa fa-3x fa-connectdevelop" /></a>
              <p>Hendrerit</p>
              <p>12345</p>
            </li>
            <li className="one_quarter"><a href="#"><i className="fa fa-3x fa-sliders" /></a>
              <p>Venenatis</p>
              <p>12345</p>
            </li>
          </ul>
          <div className="clear" />
        </section>
      </div>
    )
  }
}
