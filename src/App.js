import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Education from './components/education'
import Counter from './components/counters'
import Skillbars from './components/skillbars'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	 <Sidebar></Sidebar>
				 <div id="colorlib-main">
					 <Introduction></Introduction>
					 <About></About>
           <Counter></Counter>
					 <Timeline></Timeline>
           <Education></Education>
           <Skillbars></Skillbars>
         </div>
      	</div>
      </div>
    );
  }
}

export default App;
