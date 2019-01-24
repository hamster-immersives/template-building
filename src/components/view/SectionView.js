import React, { Component } from 'react';

function SectionView (props) {
    return (
        <div>
            <article className="one_third first">
              <div className="hgroup">
                <h6 className="heading">{props.name}</h6>
                <em>{props.title}</em></div>
              <figure><a href="#"><img src="/demo/320x220.png" alt="true" /></a></figure>
              <div className="txtwrap">
                <p>{props.summary}</p>
              </div>
            </article>
        </div>
    )
}

export default SectionView;

