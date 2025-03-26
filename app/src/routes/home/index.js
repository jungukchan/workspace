"use strict"; //이크마 스크립트를 준수한다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//-- Controller (경로지정) --

// - GET -
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);

// - POST - 
router.post("/login", ctrl.process.login);


//외부로 모듈을 사용할 수 있도록 처리하는 로직
module.exports = router; 