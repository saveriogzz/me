import React, { Component } from 'react'
import SkillBar from 'react-skillbars';

const skills = [
{
"type": "Python",
"level": 90
},
{
"type": "SQL",
"level": 90
},
{
"type": "JavaScript",
"level": 70
},
{
"type": "React",
"level": 60
},
{
"type": "NodeJs",
"level": 60
}
]

export default class Skillbars extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
         <div className="colorlib-narrow-content">
           <div className="row">
             <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What I can do</span>
              <h2 className="colorlib-heading animate-box">Skills</h2>
           </div>
         </div>
         <article className="timeline-entry animate-box" data-animate-effect="bounceInLeft">
          <section className="skillbars" data-section="skillbars">
           <SkillBar skills={skills} height={30}/>
          </section>
         </article>
         </div>
        </section>
      </div>
  )
}
}
