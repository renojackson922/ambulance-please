import React, {useState, useEffect, useRef }  from 'react'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars';
import useAsync from '../useAsync';
import Distance from './Distance';

function GetAvaliableNumberColor(t){

  const roomAvailable = t || 0;
  if (roomAvailable >= 8) 
    return "green";
  else if (roomAvailable >= 4 && roomAvailable < 8) 
    return"orange";
  else if (roomAvailable >= 1 && roomAvailable < 4) 
    return "red";
  else if (roomAvailable <= 0)
    return "#888";
  else
    return "#000";
  
}
/*  API 호출부분 */ 
async function getDataApi() {
  const response = await axios.all([getHopspitalAvailable(), getHopspitalAddr()])
  return response;
}
function getHopspitalAvailable(stage1, stage2){
  return axios.get('http://localhost:5000/dataApi/getHospitalAvailable', { stage1: stage1, stage2: stage2  })
}
function getHopspitalAddr(stage1, stage2){
  return axios.get('http://localhost:5000/dataApi/getHospitalAddr', { stage1: stage1, stage2: stage2  })
}

function RenderHospitalList({ stage1, stage2 }){

  let _stage1 = stage1 ?? "";
  let _stage2 = stage2 ?? "";

  console.log("called", _stage1, _stage2)

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

  if (loading) return <div className="text-center">로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!hospitals) return null;

  let hosptialsAvailTmp = hospitals[0].data;
  const hosptialsAddr = hospitals[1].data;

  // 두 개의 JSON 데이터를 조회하여 HPID 공통키가 있는 것들을 조회해서 주소와 위/경도 정보 밀어넣기
  for (let [indexAvail, valAvail] of hosptialsAvailTmp.entries()) {
    hosptialsAvailTmp[indexAvail].dutyAddr = "주소정보가 없습니다"
    hosptialsAvailTmp[indexAvail].distCalc = 0
    for (let [indexAddr, valAddr] of hosptialsAddr.entries()) {
      if(hosptialsAvailTmp[indexAvail].hpid === hosptialsAddr[indexAddr].hpid){
        hosptialsAvailTmp[indexAvail].dutyAddr = hosptialsAddr[indexAddr].dutyAddr;
        let targetLat = hosptialsAddr[indexAddr].wgs84Lat ?? 0;
        let targetLng = hosptialsAddr[indexAddr].wgs84Lon ?? 0;
        hosptialsAvailTmp[indexAvail].distCalc = Distance(lat, lng, targetLat, targetLng, 'K').toFixed(2);
      }
    }
  }

  hosptialsAvailTmp.sort((a,b) => {
    return a.distCalc - b.distCalc;
  });

  return (
    <>
      <Scrollbars 
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ width: "100%", height: "350px" }} 
        renderTrackVertical={({ style, ...props }) => <div {...props} className="track-vertical" style={{ ...style }}/> } >
        <div className="list-group">
          {
                (hosptialsAvailTmp).map(hospital => hospital.distCalc == 0 ? "" : 
                <a className="list-group-item list-group-item-action flex-column align-items-start" key={hospital.hpid} style={{ minHeight: "70px" }}>
                  <div className="d-flex "> {/*d-flex w-100 justify-content-between*/}
                    <div style={{ width: "30px", padding: "10px 0"  }}>
                      <span style={{ color: GetAvaliableNumberColor(hospital.hvec) }}>●</span>
                    </div>
                    <div style={{minWidth:"160px"}}>
                      <span style={{ display: "block", fontWeight: 500}}>{hospital.dutyName}</span>
                      <span style={{ display: "block", fontSize: ".75rem" }}>{hospital.dutyAddr}</span>
                    </div>
                    <div className="ms-auto">
                      <span style={{ display: "block", textAlign:"right", fontSize: ".75rem", color: "#fd8f46" }}>{ hospital.distCalc } km 이내</span>
                      <span style={{ display: "block", textAlign:"right", fontSize: ".75rem" }}>가용병상: {hospital.hvec <= 0 ? 0 : hospital.hvec }석</span>
                      <span style={{ display: "block", textAlign:"right", fontSize: ".75rem" }}>마지막 업데이트:&nbsp;
                      { hospital.hvidate.toString().substring(8).substring(0,2) }시 {hospital.hvidate.toString().substring(8).substring(3,4)}분 </span>
                    </div>
                  </div>
                </a>
              )
          }
        </div>      
      </Scrollbars>
    </>
  )
}


export default RenderHospitalList