import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-bar-graph-2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Nike EHQ <span> <strong> Hilversum, The Nethelrands </strong> | Aug 2019-present |</span></h2>
                        <p>I recently joined Nike as a Data Analytics & Engineering Intern in Express Lane's Performance Management team, where I use advanced analytics tools such as, amongst others, <i>Python's pandas and scikit-learn</i> to find insights from raw data.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pencil" />
                      </div>
                      <div className="timeline-label">
                        <h2>Supply Chain Manager at Scribit <span> <strong> Turin, Italy </strong> | Oct 2018 - May 2019 |</span></h2>
                        <p>I had the honour to work within an amazing startup aimed at designing the first write-and-erase robot, which was awarded by the <a href="https://time.com/collection/best-inventions-2019/5733108/scribit/">TIME </a>
                              as one of the best inventions of 2019. During the time spent at Scribit, I was in charge of developing the whole Supply Chain, from procurement to outbound logistics.
                              <br></br>
                              From January 2020, it's possible to find Scribit at the prestigious New York City's <a href="https://store.moma.org/kids/arts-crafts/scribit-drawing-robot/10861-149759.html/">MoMA Design Store</a>.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase"/>
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at United Nations Headquarters <span> <strong> New York City, U.S.A. </strong> | Aug 2018 - Oct 2018 |</span></h2>
                        <p>Together with a team of three other talented engineers, I have been responsible of creating a database containing information of UNHQ artwork collection.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-book2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Visiting Research Scholar at Griffith University <span> <strong> Gold Coast, Queensland, Australia </strong> | October 2017 - March 2018 |</span></h2>
                        <p>Worked on my Master's Degree thesis upon Agent-based modeling for Flood Emergency Management. The model was created using the simulation software AnyLogic and Java.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-bar-graph" />
                      </div>
                      <div className="timeline-label">
                        <h2>Analyst at Deloitte <span> <strong> Turin, Italy </strong> | June 2016 - Nov 2016 |</span></h2>
                        <p>Worked as a consultant for one of the biggest third party logistics companies of Northern Italy, operating all over Europe.
                           The aim of the project was to build a platform for monitoring and optimizing fuel consumption.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
