/* global kakao */  // kakao 가 먼지 몰라도 그냥 뿌림
import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from "styled-components";





// class KakaoMapApi extends Component {
//   componentDidMount() {
//     const script = document.createElement("script");
//     script.async = true;
//     script.src =
//       "https://dapi.kakao.com/v2/maps/sdk.js?appkey=622a26bbe65339602e2bea28321bb212&autoload=false";
//     document.head.appendChild(script);

//     script.onload = () => {
//       kakao.maps.load(() => {
//         let container = document.getElementById("Mymap");
//         let options = {
//           center: new kakao.maps.LatLng(37.506502, 127.053617),
//           level: 7
//         };

//         const map = new window.kakao.maps.Map(container, options);
     
//       });
//     };
//   }

//   render() {
//     return <KakaoMapApis id="Mymap"></KakaoMapApis>;
//   }
// }

// const KakaoMapApis = styled.div`
//   width: 100%;
//   height: 100%;
// `;

class KakaoMapApi extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=622a26bbe65339602e2bea28321bb212&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("myMap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };

        const map = new window.kakao.maps.Map(container, options);
     
      });
    };
  }

   render(){
    return <div id="myMap" style={{ width:'100%', height:'700px' }}></div>
  }
}


export default KakaoMapApi;