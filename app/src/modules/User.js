"use strict";

const userStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;

        //primise가 넘어오기전에 기다리라는 명령어가 필요하다 -> await => async에서만 사용 가능
        const {id, psword} = await userStorage.getUesrInfo(client.id);

        if(id){
            if(id === client.id && psword === client.psword){
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 다릅니다."};
        }

        return {success : false, msg : "존재하지 않는 아이디 입니다."};
    }

    register(){
        const client = this.body;
        const response = userStorage.save(client);

        return response;
    }
    
}

module.exports = User;