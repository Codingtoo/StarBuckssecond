const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click',function(){//클릭하면 어떻게 실행되는지 
    searchInputEl.focus()//input요소에 포커스해라

});

searchInputEl.addEventListener('focus',function(){//input요소에 포커스되면
    searchEl.classList.add('focused');//classList객체에서 추가하겠다
    searchInputEl.setAttribute('placeholder','통합검색');//input요소에html속성을 지정한다
});//placeholder==input요소에 힌트부여한다

//포커스를 해제하는과정
searchInputEl.addEventListener('blur',function(){//input요소에 포커스가 해제되면
    searchEl.classList.remove('focused');//classList객체에서 제거하겠다
    searchInputEl.setAttribute('placeholder','');//input요소에html속성을 지정한다
});//placeholder==input요소에 힌트부여한다



const thisYear=document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//현재 해당 연도를 출력