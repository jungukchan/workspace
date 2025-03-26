"use strict"; //이크마 스크립트를 준수한다.

const fs = require("fs").promises;

class UserStrorage {
    // 변수명에 #을 붙이면 은닉화함
    static #users = fs.Dir

    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // ==> [id, psword, name] key값만 list로 만듬
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        
        return userInfo;
    }

    static #getUsers(data, isAll ,fields){
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUser = fields.reduce((newUser, field)=>{
            if(users.hasOwnProperty(field)){
                newUser[field] = users[field];
            }
            return newUser;
        }, {});

        return newUser;
    }

    static getUsers(isAll, ...fields){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll ,fields);
        })
        .catch(console.error);

        //const users = this.#users;
        
    }

    static getUesrInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success : true};
    }
    
}

module.exports = UserStrorage;


/**
 * git 정리
 * > git add .
 * > git commit -m "메세지"
 * > git push origin master
 * > git tag v1.0
 * > git tag
 * > git log --oneline
 * > git push origin v1.0
 * > git add --all
 * > git push origin :v1.0   (git 서버 tag 삭제)
 * > git tag -d v1.0 (git 로그 tag 삭제)
 */