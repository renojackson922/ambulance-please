import './App.css';

import RenderHospitalList from './class/RenderHospitalList'
import Header from './class/Header'

import React, {useState, useEffect, useRef } from 'react';


function App() {

  const [searchTxt, setSearchTxt] = useState("");

  return (
    <>
      <Header/>
      <div className="main-wrapper" style={{maxWidth:"768px", margin:"0 auto"}}>
        <div className="container" style={{marginTop:"10vh"}}>
          <div style={{textAlign:"right"}}>
            <span className="amb-title">응급실 잔여병상 현황</span>
            <span className="amb-title-sub">ver 0.0.1</span>
          </div>
          <div className="input-group mt-4">
            <input type="text" className="form-control" placeholder="지역명이나 병원명을 입력해주세요" value={searchTxt} onChange={(e) => {setSearchTxt(e.target.value)}} />
            <button className="btn btn-outline-secondary" onClick={()=>{ RenderHospitalList(searchTxt) }} type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-search"></i></button>
            <button className="btn btn-outline-secondary" type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-map-pin"></i></button>
          </div>
          <div className="mt-2">          
            <RenderHospitalList stage1={searchTxt} stage2={searchTxt}/>
          </div>
        </div>
      </div>  
      <footer className="footer mt-auto py-2">
        <div className="container text-center">
          <span className="" style={{fontSize: "12px"}}>ⓒ 튼튼전사들</span>
        </div>
      </footer>

    </>
  );
}

export default App;

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