

//뱃지 사진이 스크롤되면 사라지는코드

const badgeEl=document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
        //배지 숨기기
        //badgeEl.style.display='none';
        //gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,.6,{
            opacity:0,//시각적으로만 안보이고 형태는 남아있다
            display:'none'//형태자체도 숨긴다
        });
    }
    else{
        //배지보이기
       // badgeEl.style.display='block';
       gsap.to(badgeEl,.6,{
        opacity:1,
        display:'block'
    });
    }
},300));//300=0.3초  함수가 우르르 실행ㄷ되는것을 방지하기위해 .throttle함수를 사용

//_.throttle('함수',시간)


//이미지 순차적으로 나타나게 만든다
const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index) {
    gsap.to(fadeEl,1,{
        delay:(index + 1) *.7,//.7,1.4,2.1.....
        opacity:1
    });
});

//공지사항 부분이 자동 슬라이드 되기위한 js
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
    direction:'vertical', //방향옵션 설정
    autoplay:true,        //자동재생 여부
    loop:true             //반복재생 여부
});

//사진이 하나씩 넘어가는 과정 
new Swiper('.promotion .swiper-container',{
    //direction:'horizontal' 이미 swiper브븐에 기본값으로 들어가있다.
    slidesPerView:3, //한번에 3개의 슬라이드를 보여주겠다
    spaceBetween: 10, //슬라이드 사이의 여백
    centeredSlides:true,//첫번째 슬라이드가 가운데에서 부터 시작하겠다
    loop:true,
    autoplay:{
        delay:5000  //5초에 한번씩 자동으로 넘어감
    },
    pagination:{
        el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
        clickable:true       //사용자의 페이지 번호 요소 제어 가능여부
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});


//마지막부분이지만 같은 swiper이기에 모아둔다

new Swiper('.awards .swiper-container',{
    //direction:'horizontal' 이미 swiper부분에 기본값으로 들어가있다.
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl:'.awards .swiper-prev', //이전버튼과 다음버튼을 누르면 실행되기위해서 선언해야한다
        nextEl:'.awards .swiper-next'
    }
});








//togglr-promotion
const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn =document.querySelector('.toggle-promotion');
let isHidePromotion=false;//화면애 잘 보이기때문에
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion //반댓값대입
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
//유튜브 섹션에 사진들을 둥둥떠다니게 할수있도록
function floatingObject(selector,delay,size){
    //gsap.to(요소,시간,옵션)
    gsap.to(selector,//선택자
        random(1.5,2.5),//애니메이션 동작시간
        {//옵션
        y: size,       //위에서 아래로 내려오는 애니메이션
        repeat:-1,   //선언전에는 한번만 반복되서 무한반복을 위해 repeat -1을 선언
        yoyo:true ,   //한번 재생된 애니메이션을 다시 뒤로 재생 
        ease: Power1.easeInOut, //이전까지는 둥둥뜨는 느낌이아니라 통통튀는 느낌이여서 좀 더 자연스럼게 하기위함
        delay:random(0,delay)  //몇초뒤에 애니메이션을 실행하겠다
    });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

//scrollmagic
const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(sptEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 //뷰포트 시작하는 윗부분이 0 아래가 1이니 0.8지점에 걸리면 실행된다
            
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());


});

