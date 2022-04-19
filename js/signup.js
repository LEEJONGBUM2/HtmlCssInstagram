const input_datas = document.querySelectorAll('.input-data');
const password_visible = document.querySelector('.password-visible');

password_visible.onclick = () => {

}

//let docFirstLoad = true;
// const phoneOrEmail_label = input_datas[0].querySelector('label');
// const phoneOrEmail_input = input_datas[0].querySelector('input');

for (let i = 0; i < input_datas.length; i++){
    const label = input_datas[i].querySelector('label');
    const input = input_datas[i].querySelector('input');

    input.onkeydown = () => {
        label.style.top = '2px';
        label.style.fontSize = '11px';
        input.style.padding = '16px 0px 2px 8px';       
    }

    input.onkeyup = () => {
        if(input.value.length == 0){
            label.style.top = '9px';
            label.style.fontSize =  '13px';
            label.style.padding = '9px 8px 7px 8px';
        }
    }

    input.onblur = () => {
        const inputMsg = document.querySelectorAll('.input-msg');
        if(input.value.length == 0){
        // if(input.value.length == 0 && docFirstLoad == false){
            // const inputMsg = document.querySelectorAll('.input-msg');
            inputMsg[i].innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
            // docFirstLoad = false;
        } else {
            inputMsg[i].innerHTML = `<i class="fa-solid fa-circle-check" style="color: #8e8e8e;"></i>`;
           // docFirstLoad = false;
        }
    }
}

$(document).ready(function(){
    $('.main i').on('click',function(){
        $('input').toggleClass('active');
        if($('input').hasClass('active')){
            $(this).attr('class',"fa fa-eye-slash fa-lg")
            .prev('input').attr('type',"text");
        }else{
            $(this).attr('class',"fa fa-eye fa-lg")
            .prev('input').attr('type','password');
        }
    });
});