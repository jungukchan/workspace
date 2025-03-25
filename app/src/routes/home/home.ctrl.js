"use strict"; //이크마 스크립트를 준수한다.

// -- 랜더링 해주는 js --

const UserStrorage = require("../../modules/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};


const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        const user = UserStrorage.getUser("id", "psword");

        const response = {};
        if(user.id.includes(id)){
            const idx = user.id.indexOf(id);
            console.log(user.psword[idx]);
            console.log(psword);
            if(user.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg="로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};