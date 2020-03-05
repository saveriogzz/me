import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Saverio Guzzo</a></h1>
              <span className="email"><i className="icon-mail"></i> saverio.g.guzzo@gmail.com</span>
              <br></br>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  {/* <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <br></br>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* }<li><a href="https://www.facebook.com/saveriogzz" target="_blank" rel="noopener noreferrer"><i className="icon-facebook22"/></a></li> */}
                <li><a href="https://twitter.com/SaverioGuzzo22" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2"/></a></li>
                {/* <li><a href="https://www.instagram.com/saveriomaggiusto/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"/></a></li> */}
                <li><a href="https://www.linkedin.com/in/saverioguzzo/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"/></a></li>
                <li><a href="https://github.com/saveriogzz" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://open.spotify.com/user/saverio_22" target="_blank" rel="noopener noreferrer"><i className="icon-spotify"></i></a></li>
                {/*Kaggle link Non funziona*/}
                <li><a href="https://www.kaggle.com/saveriogzz" target="_blank" rel="noopener noreferrer"><i className="icon-kaggle"/></a></li>
                <br></br>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true"/> and <i className="icon-coffee" aria-hidden="true"/>.<br></br> Thanks to Colorlib for inspiration.
              </small></p>
              <p><small>
                ...something more coming soon!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
