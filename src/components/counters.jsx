import React, {Component} from 'react'


export default class Counter extends Component {
  render () {
    return (

      <section id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/img_bg3.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="colorlib-narrow-content">
        <div className="overlay"></div>
          <div className="row">
            <div className="row">
              <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from="0" data-to="3000" data-speed="5000" data-refresh-interval="50"></span>
                <span className="colorlib-counter-label">Cups of coffee</span>
              </div>
              <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from="0" data-to="24" data-speed="5000" data-refresh-interval="50"></span>
                <span className="colorlib-counter-label">Projects</span>
              </div>
              <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from="0" data-to="22" data-speed="5000" data-refresh-interval="50"></span>
                <span className="colorlib-counter-label">Countries Visited</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
