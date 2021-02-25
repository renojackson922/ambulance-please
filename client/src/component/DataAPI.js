import react, {useEffect} from 'react'
import axios from 'axios'
import { render } from 'react-dom';

function DataAPI(){

    //let dp = new window.DOMParser();
    //let parsedXml = "";
    let resp;

    // useEffect(()=> {

    // });

    const url = '/api/getDataApi'; /*URL*/
    //let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'3JSKy8OQAgWy6GIIMYV4ClVy43GIiu2HHfoRGbW1diBBLkHoI9u68zbpYJMVinZPW0m8dwrsH9icXrXAIQxd%2Fw%3D%3D'; /*Service Key*/
    let queryParams = '?' + encodeURIComponent('stage1') + '=' + encodeURIComponent('서울특별시'); /**/
    queryParams += '&' + encodeURIComponent('stage2') + '=' + encodeURIComponent('강남구'); /**/ 
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/

    axios({
      method:'get',
      url: url + queryParams,
      responseType:'json'
    })
    .then(function (response) {
      resp = response.data.response.body.items.item;
      // dp = new window.DOMParser();
      // parsedXml = dp.parseFromString(response.data, "text/xml");
      // console.log(parsedXml);
    });


    return(resp)

}

export default DataAPI