/* global kakao */ 
import React, { useEffect } from 'react';

function Geolocation(props) {
    console.log("카카오맵API를 받아옵니다 ***", window.kakao);
    let lat = "";
    let lng = "";

    useEffect(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=622a26bbe65339602e2bea28321bb212&autoload=false";
      document.head.appendChild(script);
  
      script.onload = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                console.log('latitude : ' + position.coords.latitude + ' , longitude : ' + position.coords.longitude);
            });
        }
      };
    });

    return (
    <>
        {lat}, {lng}
    </>
    )
  }
  
  
  export default Geolocation;