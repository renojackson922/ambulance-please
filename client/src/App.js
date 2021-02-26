import './App.css';
import Header from './component/Header'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars';
import useAsync from './useAsync';
import Distance from './class/Distance';
import React, {useState} from 'react';

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
    hospitalCode : 3013,
    hospitalName : "강건마가정의원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 500,
    roomAvailable: 15
  },
  {
    hospitalCode : 3014,
    hospitalName : "라기라치과의원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 1400,
    roomAvailable: 15
  },
  {
    hospitalCode : 3015,
    hospitalName : "백기산한의원",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 3700,
    roomAvailable: 15
  },
  {
    hospitalCode : 3016,
    hospitalName : "산케메디컬센터",
    address: "서울특별서 강남구 논현로 164 (튼튼영어빌딩)",
    tel: "02-560-0494",
    distance: 5700,
    roomAvailable: 3
  },
  {
    hospitalCode : 3017,
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

function getHopspitalAvailable(){
  return axios.get('http://localhost:5000/dataApi/getHospitalAvailable')
}

function getHopspitalAddr(){
  return axios.get('http://localhost:5000/dataApi/getHospitalAddr')
}

async function getDataApi() {
  const response = await axios.all([getHopspitalAvailable(), getHopspitalAddr()])
  return response;
}

function App() {

  const [state, refetch] = useAsync(getDataApi, []);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0); 
  const { loading, data: hospitals, error } = state;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      setLng(position.coords.longitude)
      setLat(position.coords.latitude)
    });
  }

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!hospitals) return null;

  let hosptialsAvail = hospitals[0].data;
  const hosptialsAddr = hospitals[1].data;

  // 두 개의 JSON 데이터를 조회하여 HPID 공통키가 있는 것들을 조회해서 주소와 위/경도 정보 밀어넣기
  for (let [indexAvail, valAvail] of hosptialsAvail.entries()) {
    hosptialsAvail[indexAvail].dutyAddr = "주소정보가 없습니다"
    hosptialsAvail[indexAvail].distCalc = 0
    for (let [indexAddr, valAddr] of hosptialsAddr.entries()) {
      if(hosptialsAvail[indexAvail].hpid === hosptialsAddr[indexAddr].hpid){
        hosptialsAvail[indexAvail].dutyAddr = hosptialsAddr[indexAddr].dutyAddr;
        let targetLat = hosptialsAddr[indexAddr].wgs84Lat ?? 0;
        let targetLng = hosptialsAddr[indexAddr].wgs84Lon ?? 0;
        hosptialsAvail[indexAvail].distCalc = Distance(lat, lng, targetLat, targetLng, 'K').toFixed(2);
      }
    }
  }



  
  console.log(hosptialsAvail)

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
            <input type="text" className="form-control" placeholder="ex) 서울특별시 서초구" />
            <button className="btn btn-outline-secondary" type="button" onClick={refetch} style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-search"></i></button>
            <button className="btn btn-outline-secondary" type="button" style={{width:"40px", backgroundColor:"#fff"}}><i className="fas fa-map-pin"></i></button>
          </div>
          <div className="mt-2">          
            <Scrollbars style={{ width: "100%", height: "350px" }}>
              <ul className="list-group">
              {
                (hosptialsAvail).map(hospital => 
                  <li className="list-group-item" key={hospital.hpid} style={{ minHeight: "70px" }}>
                  <div style={{ width: "30px", display: "inline", float: "left", padding: "10px 0" }}>
                    <span style={{ color: GetAvaliableNumberColor(hospital.hvec) }}>●</span>
                  </div>
                  <div style={{ display: "inline", float: "left" }}>
                    <span style={{ display: "block" }}>{hospital.dutyName}</span>
                    <span style={{ display: "block", fontSize: ".75rem" }}>{hospital.dutyAddr}</span>
                  </div>
                  <div style={{ display: "inline", float: "right" }}>
                    <span style={{ display: "block", fontSize: ".75rem", color: "#fd8f46" }}>{ hospital.distCalc } km 이내</span>
                    <span style={{ display: "block", fontSize: ".75rem" }}>가용병상: {hospital.hvec <= 0 ? 0 : hospital.hvec }석</span>
                    <span style={{ display: "block", fontSize: ".75rem" }}>마지막 업데이트:&nbsp;
                    { hospital.hvidate.toString().substring(8).substring(0,2) }시 {hospital.hvidate.toString().substring(8).substring(3,4)}분 </span>
                  </div>
                </li>
                )
              }
              </ul>
            </Scrollbars>
          </div>
        </div>
      </div>  
      {/* <ul className="list-group">
        <li className="list-group-item text-center">
          <span style={{ fontSize: ".75rem" }}>10개 더보기 +</span>
        </li>
      </ul> */}
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