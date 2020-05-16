import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p><strong>Hi, I'm Saverio Guzzo</strong> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="bounceInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">

            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bar-graph-2" />
                </span>
                <div className="desc">
                    <h3>Data Analysis</h3>
                    { /*}<p>I love extracting knowledge from raw data</p> */}
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Cloud Data Warehouses</h3>
                    {/*<p>bibidi bobidi bu </p> */}
                </div>
                </div>
            </div>


            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Algorithms & Data Structures</h3>
                  {/*  <p>true</p> */ }
                </div>
                </div>
            </div>
          </div>

          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-cloud4"/>
                </span>
                <div className="desc">
                    <h3>Infrastructure as Code</h3>
                  {/*  <p</p> */}
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Problem Solving</h3>
                   {/*  <p>something here</p> */}
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-speech-bubble" />
                </span>
                <div className="desc">
                    <h3>Effective communication</h3>
                  {/*  <p>true/p> */}
                </div>
                </div>
            </div>

          </div>
        </div>
        </section>
      </div>
    )
  }
}
