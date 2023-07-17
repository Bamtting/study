// tabtitle에 .tab-nav li a를 불러옴
var tabtitle = document.querySelectorAll(".tab-nav li a");

tabtitle.forEach(function(element){
    element.addEventListener("click",function (e) {
        // a태그 링크로 가는걸 취소함
        e.preventDefault();
        
        tabtitle.forEach(function(item){
            item.classList.remove("active");
        });

        this.classList.add("active");
var tabItems = document.querySelectorAll(".tabitem");
tabItems.forEach(function(tab) {
    tab.style.display = "none";
})

var target = this.getAttribute("href");
document.querySelector(target).style.display = "block";
    })
})
tabtitle[0].click();