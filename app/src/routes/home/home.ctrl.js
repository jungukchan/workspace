"use strict"; //이크마 스크립트를 준수한다.

const User = require("../../modules/User");


//-- Controller -> 렌더링 해주는 부분 --

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    },
};


const process = {
    login : async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};