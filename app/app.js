// http는 내장함수
/*
const http = require("http");
const app = http.createServer((req, res) => {

    //한글 설정을 위한 charset 셋팅
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    if(req.url == "/"){
        res.end("여기는 루트 입니다.");
    }else if(req.url == "/login"){
        res.end("여기는 로그인 화면 입니다.")
    }
});

app.listen(3001, ()=> {
    console.log("http로 기동된 서버입니다.")
});
*/

/*
    참고 동영상 : https://www.youtube.com/watch?v=Jy9quSZbVTc&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=10
*/

//nps install express --save
// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // 이경로에 있는 index.js를 불러와서 사용

//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //view 엔진 (ejs를 ui엔진을 이용) - //npm install ejs -s
app.use(express.static(`${__dirname}/src/public`)); //정적 리렉토리 정보를 변환해서 처리해줌
app.use("/", home); //미들웨어를 등록하는 메서드

module.exports = app;

// package.json 만들때 사용하는 명령어
// npm init -y