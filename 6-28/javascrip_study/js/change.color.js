window.onload = function (){
var heading = document.querySelector("#heading");
        heading.onclick = function () {
            heading.style.color = "blue";
            heading.style.fontSize = "24px";
        }
        var heading1 =document.querySelector("#heading1");
        heading1.onclick = function () {
            heading1.style.color = "green";
            heading1.style.fontSize = "72px";
        }
        // 글자색 바꾸기 토글
        var heading = document.querySelector("#heading");
        var isBlue = false; //초기 토글 상태는 false
        heading.onclick = function(){
            // isBlue 변수 값에 따라 텍스트 색상을 변경합니다
            if(isBlue){
                heading.style.color = "initial"; //원래 색상으로 변경
                isBlue = false;
            }
            else{
                heading.style.color = "blue"; //파란색으로 변경
                isBlue = true;
            }
        }
        var heading1 =document.querySelector("#heading1");
        var isGreen = false;
        heading1.onclick = function(){
            if(isGreen){
                heading1.style.color = "initial";
                isGreen = false;
            }
            else{
                heading1.style.color = "red";
                isGreen = true;
            }
        }
    
    }