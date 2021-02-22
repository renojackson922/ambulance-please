import React from 'react';
import ReactDOM from 'react-dom';
//import Clock from './class/clock';
import './index.css';
import App from './App';
import KakaoMapApi from './class/KakaoMapApi';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   element,
//   document.getElementById('root')
// );

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  function App2(){ 
    return(
      <div>
        <Clock inteval="1000"/>
        <Clock inteval="2000"/>
        <Clock inteval="3000"/>
      </div>
    );
  }

  function Mp3Test(){
    return(
      <div>
        <audio controls="controls" controlsList="nodownload">
          <source src="https://docs.google.com/uc?export=download&id=1vunlaJfCuNHd34DduUTLU3s0wAu4PObG"/>
        </audio>
      </div>
    )
  }

ReactDOM.render(
  <div>
    <span>응급</span>
    <KakaoMapApi/>
  </div>,
  document.getElementById('root')
);

  // <Mp3Test/>,
  // <KakaoMapApi/>,
  // <App2 />,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
