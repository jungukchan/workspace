"use strict"; //이크마 스크립트를 준수한다.

const app = require("../app");

//포트
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});