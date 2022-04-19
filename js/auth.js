//const username_input = document.querySelector("#username");
const input_items = document.querySelectorAll(".input-items");//input_items 순서가 중요하다.
const username_input = input_items[0].querySelector("input");
const username_label = input_items[0].querySelector("label");

//const password_input = document.querySelector("#password");

const password_input = input_items[1].querySelector("input");
const password_label = input_items[1].querySelector("label");
const signin_button = input_items[2].querySelector("button");


username_input.onkeydown = () => {
    if(window.event.keyCode == 13){
        password_input.focus();
    }else{
        username_label.style.top = "0px";
        username_label.style.fontSize = "6px";
    }
    console.log("키보드 입력됨.");
}

username_input.onkeyup = ()=>{
    if(username_input.value.length == 0){
        username_label.style.top = "15px";
        username_label.style.fontSize = "12px";
    }
    console.log("back키보드 입력됨.");
}

password_input.onkeydown = () => {
    if(window.event.keyCode == 13){
        signin_button.click();
    }
    else{
        password_label.style.top = "0px";
        password_label.style.fontSize = "6px";
        console.log("패스워드 입력됬음"); 
    }
}

password_input.onkeyup = () => {
    if(password_input.value.length == 0){
        password_label.style.top = "15px";
        password_label.style.fontSize = "12px";
    }
    console.log("(패스워드)back키보드 입력됨.");
}

signin_button.onclick = () => {
    if(username_input.value.length == 0){
        alert("아이디를 입력해주세요.");
    }
    else if (password_input.value.length == 0){
        alert("비밀번호를 입력해주세요.");
    } else {
        alert("로그인 시도");
    }
}
