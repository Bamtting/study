window.onload = function () {
    //상단 스크롤 기능
    const header = document.querySelector(".header"); //.header를 들고옴
    const mbt = document.querySelector(".mbt"); //.mbt를 들고옴
    let scy = 0;
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = window.document.documentElement.scrollTop; 
    // 2.class 적용 
    if(scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
    }
    // 스크롤 했을때 뭔가가 이루어진다
    window.addEventListener("scroll" , function(){
        scy = window.document.documentElement.scrollTop;
        if (scy > 0) {
            header.classList.add("active");
            mbt.classList.add("active");
        }else {
            //  스크롤이 되지 않은 상태이면서 !!!!!!
            const state = navMb.classList.contains("active");
            if (state) {
              // 만약에 모바일 메뉴가 펼쳐진 상태라면
              header.classList.add("active");
              mbt.classList.add("active");
            } else {
              // 그렇지 않다면 원래대로 처리하고..
              header.classList.remove("active");
              mbt.classList.remove("active");
            }
          }
    });


    // 모바일 메뉴 클릭 처리
    const htmlRoot = document.querySelector("html");
    const navMb = document.querySelector(".nav-mb");

    // mbt 요소 클릭시 실행될 함수 등록
    mbt.addEventListener("click" , function(){
        // 함수 내부 "mbt" 요세에 "ani" 가 있는지 확인
        const state = this.classList.contains("ani");
        /* 4.만약 "mbt" 요소에 "ani" 클래스가 있다면, 다음 동작을 수행합니다

- "ani" 클래스를 제거합니다.
- **`<html>`** 요소의 "active" 클래스를 제거하여 스크롤바가 나타나도록 합니다.
- "navMb" 요소의 "active" 클래스를 제거하여 모바일 메뉴를 숨깁니다.
- 만약 페이지가 스크롤된 상태라면, "header" 요소와 "mbt" 요소에 "active" 클래스를 추가합니다.
- 페이지가 스크롤되지 않았다면, "header" 요소와 "mbt" 요소의 "active" 클래스를 제거합니다. 
*/
        if(state){
            this.classList.remove("ani");
            htmlRoot.classList.remove("active");
            navMb.classList.remove("active");
        if(scy > 0){
            header.classList.add("active");
            mbt.classList.add("active");
        }
        else{
            header.classList.remove("active");
            mbt.classList.remove("active");
        }
        }
        else{ 
//          5.만약 "mbt" 요소에 "ani" 클래스가 없다면, 다음 동작을 수행합니다:

//          - "ani" 클래스를 추가합니다.
//          - **`<html>`** 요소에 "active" 클래스를 추가하여 스크롤바를 숨깁니다.
//          - "navMb" 요소에 "active" 클래스를 추가하여 모바일 메뉴를 보여줍니다.
//          - "header" 요소와 "mbt" 요소에 "active" 클래스를 추가합니다.
            this.classList.add("ani");
            htmlRoot.classList.add("active");
            navMb.classList.add("active");
            header.classList.add("active");
            mbt.classList.add("active");
        }
       
    })
    // 윈도우 내부 너비를 변수에 저장
    let winW = window.innerWidth;
    // 윈도우 크기가 변경될때마다 실행되는 resize 이벤트를 등록
    window.addEventListener("resize" , function(){
        // 이벤트 내부에 현재 윈도우 내부 너비를 다시계산
        winW = window.innerWidth;
//         4.윈도우의 크기가 1024px보다 크다면, 모바일 화면에서 PC 화면으로 전환한 것이므로 다음 동작을 수행합니다:

// - "mbt" 요소에서 "ani" 클래스를 제거합니다.
// - **`<html>`** 요소에서 "active" 클래스를 제거하여 스크롤바를 나타내도록 합니다.
// - "navMb" 요소에서 "active" 클래스를 제거하여 모바일 메뉴를 숨깁니다.
// - 페이지가 스크롤된 상태라면, "header" 요소와 "mbt" 요소에 "active" 클래스를 추가합니다.
// - 페이지가 스크롤되지 않았다면, "header" 요소와 "mbt" 요소의 "active" 클래스를 제거합니다.
if (winW > 1024) {
    mbt.classList.remove("ani");
    htmlRoot.classList.remove("active");
    navMb.classList.remove("active");
    if(scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
    }
    else {
        header.classList.remove("active");
        mbt.classList.remove("active");
    }
}
    })
    // 비쥬얼 슬라이드
    // 1. 슬라이드 (.swiper-slide)개수만큼 li생성하기
    const swSlideCount = document.querySelectorAll(".sw-visual .swiper-slide").length;
    // 2. li태그 출력 장소(ul태그)저장
    const swSlidePgUl = document.querySelector(".sw-visual-pg-list");
    // 3. li에 html로 작성할 글자를 생성
    let swVisualHtml = ``;
    for(let i = 0; i < swSlideCount; i++){
        swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`;
    }
    // 4. html을 추가한다
    swSlidePgUl.innerHTML = swVisualHtml;
    // 5. 페이지네이션 관련(코딩으로 생성한 li태그 저장)
    const swVisualPgLi = document.querySelectorAll(".sw-visual-pg-list > li");
    
    
    // 스와이프
    var swiper = new Swiper (".sw-visual" , {
        effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    })
    //swiper가 최초 실행될떄
    // 1번 li 의 흰색 라인이 늘어나는 모션을 실행
    swVisualPgLi[0].classList.add("active");
    /*  swiper 가 바뀔때 마다 실행
        슬라이더가 바뀌는 상태를 찾아서
        적용하고자 하는 처리를 하고
        swiper의 API를 참조해서 작성
    */
    swiper.on("slideChange" , function(){
        swVisualPgLi.forEach(function(item,index){
            // realINdex는 Html태그의 순서값
            if(swiper.realIndex === index){
                item.classList.add("active");
            }
            else{
                item.classList.remove("active");
            }
        });
    });
    // li태그를 클릭을 하면 처리하기
    swVisualPgLi.forEach(function(item,index) {
    item.addEventListener("click" , function(){
        swiper.slideToLoop(index, 500 , false);
    });
    });
    
}

