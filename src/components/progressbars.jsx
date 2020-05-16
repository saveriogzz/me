import React, { Component } from 'react'


export default class ProgressBar extends Component {
  render () {
    return (

      <section className="colorlib-skills" data-section="skills">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Tech Skills</span>
							{/* }<h2 className="colorlib-heading animate-box">My Skills</h2> */}
              <br></br>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>Python</h3>
								<div className="progress">
								 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="85"
								  	aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
								    <span>85%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>SQL / NoSQL</h3>
								<div className="progress">
								 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
								  	aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
								    <span>90%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>Java</h3>
								<div className="progress">
								 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="70"
								  	aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
								    <span>70%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>AWS</h3>
								<div className="progress">
								 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="65"
								  	aria-valuemin="0" aria-valuemax="100" style={{width: '65%'}}>
								    <span>65%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>ETL</h3>
								<div className="progress">
								 	<div className="progress-bar color-5" role="progressbar"
								  	aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
								    <span>80%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>Spark</h3>
								<div className="progress">
								 	<div className="progress-bar color-6" role="progressbar"
								  	aria-valuemin="0" aria-valuemax="100" style={{width: '65%'}}>
								    <span>65%</span>
								  	</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

    )
  }
}
