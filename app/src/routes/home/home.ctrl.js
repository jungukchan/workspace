"use strict"; //이크마 스크립트를 준수한다.

//랜더링 해주는 js

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};

const user = {
    id : ["aaaa", 'bbbb', 'cccc'],
    paword : ["1234", "1235", "1236"],
}

const process = {
    login : (req, res) => {
        const id = req.body.id,
        pawrod = req.body.psword;

        if(user.id.includes(id)){
            const idx = user.id.indexOf(id);
            if(user.paword[idx] === pawrod){
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};