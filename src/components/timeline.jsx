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
                        <h2>Internship at Nike EHQ <span> Aug 2019-present</span></h2>
                        <p>I recently joined Nike as a Data Analytics & Engineering Intern in Express Lane's Performance Management team.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pencil" />
                      </div>
                      <div className="timeline-label">
                        <h2>Supply Chain Manager at Scribit<span> Oct 2018 - May 2019</span></h2>
                        <p>Some words about.. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at United Nations Headquarters <span> Aug 2018 - Oct 2019</span></h2>
                        <p>Some words about... </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-bar-graph" />
                      </div>
                      <div className="timeline-label">
                        <h2>Analyst at Deloitte<span> June 2016 - Nov 2016</span></h2>
                        <p>Some words about.. </p>
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
