import React, {Component} from 'react'

export default class Education extends Component {
  render () {
    return (
       <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
           <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInRight">
              <h2 className="colorlib-heading animate-box">Education</h2>
           </div>
          </div>

          <div className="row">
          <div className="fancy-collapse-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">

          <article className="education-entry animate-box" data-animate-effect="fadeInRight">
            <div className="col-md-12">
             <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
               <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                 <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master of Science in Industrial Engineering and Management</a>
                </h4>
               </div>
               <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div className="panel-body">
                 <div className="row">
                  <div className="col-md-12">
                    <li>Politecnico di Torino, Turin, Italy.</li>
                    <ul>The Master’s Degree Course in Management Engineering is aimed at preparing engineers who will be open-minded to the systematic problems that characterize the every-day life of a company. The objective of the Course is to train a graduate to be culturally prepared in the technological and in the economic-managerial fields, who will be capable of managing product and service innovations. The educational plan will follow a route that starts with the analysis of market structures, from an economic and legal point of view, and goes on to the management of new product development projects, company strategies, organizational planning, production system management and quality management.
                    </ul>
                  </div>
                 </div>
                </div>
                </div>
              </div>

            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree in Industrial Engineering</a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <li>Politecnico di Torino, Turin, Italy.</li>
                    <ul>
                      The degree program aims to train engineers who will act as companies’ operation managers and, therefore, will have a cross curricular profile based - on the one hand, on the use of analytical tools that are typical of industrial engineering and production, and - on the other hand, on the application of information systems and IT knowledge to support company operations.
                    </ul>
                    </div>
                </div>
            </div>


            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">High School Diploma</a>
                    </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <li>Liceo Scientifico F. Vercelli, Asti</li>
                      <ul>Information Technology, Physics and Mathematics</ul>
                    </div>
                </div>
            </div>


              </div>
              </div>
              </article>
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
