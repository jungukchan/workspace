"use strict"; //이크마 스크립트를 준수한다.

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};