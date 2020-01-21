import React from 'react';
import Demo from './Demo';
import Display from './Display';
import CalcDesign from './CalcDesign';

import './App.css';


class App extends React.Component{
  state = {
    fname : "",
    lname : "",
    show : false
  };

  setData = (event) => {
      this.setState({[event.target.name] : event.target.value});
  }

  Done = () => {
    this.setState({
     show : true
    });
  }

  render(){
    return(
        <div>
          <Demo setData={this.setData} Done={this.Done}/>
          
          {this.state.show && <Display s={this.state} />}

          
        </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
