"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login (){
    const req =  {
        id : id.value,
        psword : psword.value,
    }

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res) => {
        if(res.success){
            location.href="/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인 중 오류 발생!!"));
    });
}



/*** 2025.03.25 여기부터...
 * 
 * https://www.youtube.com/watch?v=69JiX9rGNmI&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=21
 * 
 */