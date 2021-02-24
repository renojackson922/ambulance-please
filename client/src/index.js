import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header'
import { Scrollbars } from 'react-custom-scrollbars';
//import Geolocation from './component/Geolocation';
import KakaoMapApi from './component/KakaoMapApi';
import DataAPI from './component/DataAPI';
import reportWebVitals from './reportWebVitals';


const hospitals =  [
  {
    hospitalCode : 3008,
    hospitalName : "강남세브란스병원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 500,
    roomAvailable: 3
  },
  {
    hospitalCode : 3009,
    hospitalName : "강남베드로병원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 1400,
    roomAvailable: 15
  },
  {
    hospitalCode : 3010,
    hospitalName : "365MC",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 3700,
    roomAvailable: 7
  },
  {
    hospitalCode : 3011,
    hospitalName : "기쁨병원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 5700,
    roomAvailable: 4
  },
  {
    hospitalCode : 3012,
    hospitalName : "상계백병원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 10000,
    roomAvailable: 0
  },{
    hospitalCode : 3008,
    hospitalName : "강건마가정의원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 500,
    roomAvailable: 15
  },
  {
    hospitalCode : 3009,
    hospitalName : "라기라치과의원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 1400,
    roomAvailable: 15
  },
  {
    hospitalCode : 3010,
    hospitalName : "백기산한의원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 3700,
    roomAvailable: 15
  },
  {
    hospitalCode : 3011,
    hospitalName : "산케메디컬센터",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 5700,
    roomAvailable: 3
  },
  {
    hospitalCode : 3012,
    hospitalName : "표독수이비인후과",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 10000,
    roomAvailable: 0
  }
];

function GetAvaliableNumberColor(t){

  const roomAvailable = t || 0;
  if (roomAvailable >= 8) 
    return "green";
  else if (roomAvailable >= 4 && roomAvailable < 8) 
    return"orange";
  else if (roomAvailable >= 1 && roomAvailable < 4) 
    return "red";
  else if (roomAvailable <= 0)
    return "#000";
  else
    return "#000";
  
}

function HospitalList(props){
  DataAPI()
  const hospitals = props.hospitals;
  const listItems = hospitals.map(hospital => 
    //console.log(hospital);
    <li className="list-group-item" key={hospital.hospitalCode} style={{minHeight:"70px"}}>
      <div style={{width:"30px", display:"inline", float:"left", padding:"10px 0"}}>
        <span style={{color: GetAvaliableNumberColor(hospital.roomAvailable)}}>●</span>
      </div>
      <div style={{display:"inline", float:"left"}}>
        <span style={{display:"block"}}>{hospital.hospitalName}</span>
        <span style={{display:"block", fontSize: ".75rem"}}>{hospital.address}</span>
      </div>
      <div style={{display:"inline", float:"right"}}>
            <span style={{display:"block", fontSize:".75rem", color:"#fd8f46"}}>{hospital.distance}m 이내</span>
            <span style={{display:"block", fontSize:".75rem"}}>가용병상: {hospital.roomAvailable}석</span>         
      </div>
    </li>
  );

  return (
    <>
    <Scrollbars style={{width:"100%", height:"350px"}}>
      <ul className="list-group">
        {listItems}
      </ul>
    </Scrollbars>
    <ul className="list-group">
       <li className="list-group-item text-center">
        <span style={{fontSize: ".75rem"}}>10개 더보기 +</span>
      </li>     
    </ul>    
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
  <Header/>
  <div className="main-wrapper" style={{maxWidth:"768px", margin:"0 auto"}}>
    <div className="container" style={{marginTop:"10vh"}}>
      <div style={{textAlign:"right"}}>
        <span className="amb-title">응급실 잔여병상 현황</span>
        <span className="amb-title-sub">ver 0.0.1</span>
      </div>
      <div className="input-group mt-4">
        <input type="text" className="form-control" placeholder="ex) 서울특별시 서초구" />
        <button className="btn btn-outline-secondary" type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-search"></i></button>
        <button className="btn btn-outline-secondary" type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-map-pin"></i></button>
      </div>
      <div className="mt-2">
          <HospitalList hospitals={hospitals} />   
      </div>
      {/* <KakaoMapApi/> */}
    </div>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
  // ,<div style={{position:'absolute', bottom:'0px', height:'100px', backgroundColor:'#000'}}></div>
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
