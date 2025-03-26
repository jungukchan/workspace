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
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home"); // 이경로에 있는 index.js를 불러와서 사용

//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //view 엔진 (ejs를 ui엔진을 이용) - //npm install ejs -s
app.use(express.static(`${__dirname}/src/public`)); //정적 리렉토리 정보를 변환해서 처리해줌
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/", home); //미들웨어를 등록하는 메서드

module.exports = app;

// package.json 만들때 사용하는 명령어
// npm init -y


/**
 * nodemon 을 이용하여, 서버의 재기동 없이 처리가 가능하다.
 * npm nodemon install -g 
 */


/**
 * git 처리시
 * - git add .
 * - git push
 * - git push origin master
 */

/**
 * 순서 
 * 1. app.js : node에서 사용하는 패키지(npm), 라우팅, 앱셋팅
 * 2. index.js : 라우터에서 들어온 경로를 가지고 분기 시켜줌 (자바:Controller에서 어노테이션 처리해서 경로 지정 하듯 처리)
 * 3. home.ctrl.js : 라우터에서 들어온 경로를 세부 컨트롤러 처리함 (자바:Controller에서 Service 분기처리)
 * 4. user.js / userStorage.js : 들어온 로직을 체크 및 구현하는 부분 (자바:ServiceImpl 영역)
 * 
 */