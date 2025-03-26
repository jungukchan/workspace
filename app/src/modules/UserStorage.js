"use strict"; //이크마 스크립트를 준수한다.

class UserStrorage {
    // 변수명에 #을 붙이면 은닉화함
    static #user = {
        id : ["aaaa", 'bbbb', 'cccc'],
        psword : ["1234", "1235", "1236"],
        name : ["하나", "둘", "셋"],
    };

    static getUser(...fields){
        const users = this.#user;
        const newUser = fields.reduce((newUser, field)=>{
            if(users.hasOwnProperty(field)){
                newUser[field] = users[field];
            }
            return newUser;
        }, {});

        return newUser;
    }

    static getUesrInfo(id){
        const users = this.#user;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // ==> [id, psword, name] key값만 list로 만듬
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
    
}

module.exports = UserStrorage;