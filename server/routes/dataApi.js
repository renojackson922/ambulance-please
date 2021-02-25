const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/dataApi", (req, res) => {

    const url = "http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire";
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'3JSKy8OQAgWy6GIIMYV4ClVy43GIiu2HHfoRGbW1diBBLkHoI9u68zbpYJMVinZPW0m8dwrsH9icXrXAIQxd%2Fw%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('STAGE1') + '=' + encodeURIComponent('서울특별시'); /**/
    queryParams += '&' + encodeURIComponent('STAGE2') + '=' + encodeURIComponent('강남구'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    
    axios.get(url + queryParams, { method: "get", responseType: "json" })
    .then((response) => {
        console.log(response.data.response.body.items.item);
        res.status(200).send(response.data.response.body.items.item);
    }).catch((ex) => {
        console.log(ex)
    });
    
});


module.exports = router; 
