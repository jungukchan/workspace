"use strict";

const userStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;

        const {id, psword} = userStorage.getUesrInfo(body.id);
        //console.log(id, psword);

        if(id){
            if(id === body.id && psword === body.psword){
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 다릅니다."};
        }

        return {success : false, msg : "존재하지 않는 아이디 입니다."};
    }
    
}

module.exports = User;