import react, {useEffect} from 'react'

function DataAPI(){

    const xhr = new XMLHttpRequest();
    const url = 'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire'; /*URL*/
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'서비스키'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('STAGE1') + '=' + encodeURIComponent('서울특별시'); /**/
    queryParams += '&' + encodeURIComponent('STAGE2') + '=' + encodeURIComponent('강남구'); /**/ 
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/

    // TODO: 서버단에서 axios 로 대체할 것
    fetch(url+queryParams, {
        credentials: 'omit'
    }).then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });

    // xhr.open('GET', url + queryParams);
    // xhr.setRequestHeader('Ping-Other', 'pingpong');
    // xhr.setRequestHeader('Content-Type', 'application/xml');
    // xhr.withCredentials = true;
    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4) {
    //         console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+ this.responseText);
    //     }
    // };
      
    // xhr.send('');

    return (
        <></>
    )
}

export default DataAPI