import React, { Component } from 'react'
import SkillBar from 'react-skillbars';

const skills = [
{
"type": "Python",
"level": 100
},
{
"type": "React",
"level": 70
}
]

export default class Skillbars extends Component {
  render() {
    return (
      <div>
      <section className="skillbars" data-section="skillbars">
        <SkillBar skills={skills}/>
      </section>
      </div>
  )
}
}
