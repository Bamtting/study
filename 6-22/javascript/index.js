// 눌렀을때 콘솔에 나타나게하기
function sayHello(){
    console.log("안녕하세요");
}
// 눌렀을때 경고 창이 뜨게하기
function showAlert() {
    alert("주의:이것은 경고 입니다.");
}
// 눌렀을때 텍스트 보기
function showElement(){
    const element = document.getElementById("myElement");
    element.style.display = "block";
}
// 눌렀을때 텍스트 가리기
function hideElement(){
    const element = document.getElementById("myElement");
    element.style.display = "none";
}
// 눌렀을때 이미지 보기
function showimages(){
    const image = document.getElementById("imgbutton");
    image.style.display = "block";
}
// 눌렀을때 이미지 가리기
function hideimages(){
    const image = document.getElementById("imgbutton");
    image.style.display = "none";
}
// 눌렀을때 이미지 토글 숨기고 가리기 가능
function toggleVisibility(){
    const element =document.getElementById("hideonbush")
    element.style.display = element.style.display === "none" ? "block" : "none";
}

function toggleImages(){
    const image = document.getElementById("imgbutton2");
    image.style.display = (image.style.display === "none") ? "block" : "none";
}

function tgImg(){
    const image = document.getElementById("btImg");
    if (image.style.display ==="none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

// 이미지변경코드

let isImageToggled = false;
function changeImg() {
    var image =document.getElementById ("myImages");
    if (isImageToggled){
        image.src = "../images/위너 everyday.jpg";
        image.alt = "위너";
        isImageToggled = false;
    }
    else{
        image.src = "../images/지수 꽃.jpg";
        image.alt = "지수 꽃";
        isImageToggled = true
    }
}


let ygfamily = false;
function changeYg() {
    var image =document.getElementById ("lee");
    if (ygfamily){
        image.src = "../images/이찬혁.jpg";
        image.alt = "찬혁";
        ygfamily = false;
    } else {
        image.src = "../images/핑크베놈.jpg";
        image.alt = "블랙핑크";
        ygfamily = true;
    }
}

// 텍스트 사이즈 변경
let textChange1 = false;
function textChange(){
    var text = document.getElementById("Tcg");
    if(textChange1){
        text.style.color = "";
        text.style.fontSize ="";
        text.style.fontWeight="";
        textChange1 = false;
    } else {
        text.style.color = "blue";
        text.style.fontSize = "20px";
        text.style.fontWeight="800";
        textChange1 = true;
    }
}

let textgood = false;
function textbold(){
    var text = document.getElementById("Textbd");
    if(textgood){
        text.style.color="";
        text.style.fontSize="";
        text.style.fontWeight="";
        textgood = false;
    } else {
        text.style.color = "red";
        text.style.fontSize="30px";
        text.style.fontWeight="900";
        textgood = true;
    }
}

// 버튼 텍스트 변경
let buttonCg = false
function  buttonChange() {
    var button= document.getElementById("button1");
    if (buttonCg){
        button.innerText ="글자가 바뀐데요";
        buttonCg = false
    } else {
        button.innerText ="글자가 바꼇을껄";
        buttonCg = true
    }
}