import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header'
import KakaoMapApi from './class/KakaoMapApi';
import reportWebVitals from './reportWebVitals';

const availableNumber = {
    "0" : "#000"
  , "1/3" : "red"
  , "4/7" : "orange"
  , "8/X" : "green"
}

ReactDOM.render(
  <React.StrictMode>
  <Header/>
  <div className="main-wrapper">
    <div className="container" style={{marginTop:"10vh"}}>
      <div style={{textAlign:"right"}}>
        <span className="amb-title"><i className="fas fa-ambulance"></i>&nbsp;&nbsp;응급실 잔여병상 현황</span>
        <span className="amb-title-sub">ver 0.0.1</span>
      </div>
      <div className="input-group mt-4">
        <input type="text" class="form-control" placeholder="ex) 서울특별시 서초구" />
        <button className="btn btn-outline-secondary" type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-search"></i></button>
        <button className="btn btn-outline-secondary" type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-map-pin"></i></button>
      </div>
      <div className="mt-2">
        <ul className="list-group">
          <li className="list-group-item">
            <div style={{width:"30px", display:"inline", float:"left", padding:"10px 0"}}>
              <span style={{color: availableNumber['1/3']}}>●</span>
            </div>
            <div style={{display:"inline", float:"left"}}>
              <span style={{display:"block"}}>강남세브란스병원</span>
              <span style={{display:"block", fontSize: ".75rem"}}>서울특별서 강남구 논현로 164 (튼튼영...</span>
            </div>
            <div style={{display:"inline", float:"right"}}>
                  <span style={{display:"block", fontSize:".75rem", color:"#fd8f46"}}>500m 이내</span>
                  <span style={{display:"block", fontSize:".75rem"}}>가용병상: 3석</span>
               
            </div>
          </li>
          <li className="list-group-item">
            <div style={{width:"30px", display:"inline", float:"left", padding:"10px 0"}}>
              <span style={{color: availableNumber['8/X']}}>●</span>
            </div>
            <div style={{display:"inline", float:"left"}}>
              <span style={{display:"block"}}>365MC</span>
              <span style={{display:"block", fontSize: ".75rem"}}>서울특별서 강남구 논현로 164 (튼튼영...</span>
            </div>
            <div style={{display:"inline", float:"right"}}>
                  <span style={{display:"block", fontSize:".75rem", color:"#fd8f46"}}>500m 이내</span>
                  <span style={{display:"block", fontSize:".75rem"}}>가용병상: 3석</span>
               
            </div>
          </li>
          <li className="list-group-item">
            <div style={{width:"30px", display:"inline", float:"left", padding:"10px 0"}}>
              <span style={{color: availableNumber['8/X']}}>●</span>
            </div>
            <div style={{display:"inline", float:"left"}}>
              <span style={{display:"block"}}>기쁨병원</span>
              <span style={{display:"block", fontSize: ".75rem"}}>서울특별서 강남구 논현로 164 (튼튼영...</span>
            </div>
            <div style={{display:"inline", float:"right"}}>
                  <span style={{display:"block", fontSize:".75rem", color:"#fd8f46"}}>500m 이내</span>
                  <span style={{display:"block", fontSize:".75rem"}}>가용병상: 3석</span>
               
            </div>
          </li>
          <li className="list-group-item">
            <div style={{width:"30px", display:"inline", float:"left", padding:"10px 0"}}>
              <span style={{color: availableNumber['4/7']}}>●</span>
            </div>
            <div style={{display:"inline", float:"left"}}>
              <span style={{display:"block"}}>모커리한방병원</span>
              <span style={{display:"block", fontSize: ".75rem"}}>서울특별서 강남구 논현로 164 (튼튼영...</span>
            </div>
            <div style={{display:"inline", float:"right"}}>
                  <span style={{display:"block", fontSize:".75rem", color:"#fd8f46"}}>500m 이내</span>
                  <span style={{display:"block", fontSize:".75rem"}}>가용병상: 3석</span>
               
            </div>
          </li>
          <li className="list-group-item">
            <div style={{width:"30px", display:"inline", float:"left", padding:"10px 0"}}>
              <span style={{color: availableNumber['0']}}>●</span>
            </div>
            <div style={{display:"inline", float:"left"}}>
              <span style={{display:"block"}}>상계백병원</span>
              <span style={{display:"block", fontSize: ".75rem"}}>서울특별서 강남구 논현로 164 (튼튼영...</span>
            </div>
            <div style={{display:"inline", float:"right"}}>
                  <span style={{display:"block", fontSize:".75rem", color:"#fd8f46"}}>500m 이내</span>
                  <span style={{display:"block", fontSize:".75rem"}}>가용병상: 3석</span>
               
            </div>
          </li>
          <li className="list-group-item text-center">
            <span>10개 더보기 +</span>
          </li>
        </ul>
      </div>
      {/* <KakaoMapApi/> */}
    </div>
    {/* <div style={{position:'absolute', bottom:'0px', height:'100px', backgroundColor:'#000'}}></div> */}
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
function Mp3Test(){
  return(
    <div>
      <audio controls="controls" controlsList="nodownload">
        <source src="https://docs.google.com/uc?export=download&id=1vunlaJfCuNHd34DduUTLU3s0wAu4PObG"/>
      </audio>
    </div>
  )
}
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
