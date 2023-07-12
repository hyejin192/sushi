let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// localStorage는 웹 브라우저에서 제공하는 웹 스토리지기술 중 하나입니다
// 웹에서 데이터를 클라이언트(자기 pc)측에 영구적으로 저장할 수 있게 해주는 저장소입니다

// 배경테마 변경
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "ri-sun-fill";


let getCurrentTheme = () => {
  // body안에 클래스명 darktheme를 가지고 있냐고 묻는다
  // 가지고 있으면 'dark'를 넣고 아니라면 'light'를 넣는다
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};
let getCurrentIcon = () => {
    let result = themeButton.classList.contains(iconTheme)? "ri-moon-line":"ri-sun-fill";
    return result;
};
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // 웹의 스토어에 값 셋팅 (검정색인 테마를 클릭하고 다음에 들어올때도 검정색이 유지되게끔 기억)
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem('selected-theme');
let selectedIcon = localStorage.getItem('selected-icon');
console.log(selectedIcon);

if (selectedTheme) {
 if(selectedTheme == 'dark'){
    document.body.classList.add(darkTheme);
 }else{
    document.body.classList.remove(darkTheme);
 }

 if(selectedIcon == 'ri-moon-line'){
    themeButton.classList.add(iconTheme);
 }else {
    themeButton.classList.remove(iconTheme);
 }
}

// header (스크롤이 생기고 내리면 헤더에 그림자가 생기게 함)
let scrollHeader = ()=>{
    let header = document.getElementById('header');
    pageYOffset >=50? header.classList.add("bg-header"):header.classList.remove("bg-header");
}
window.addEventListener('scroll', scrollHeader)






// Reveal animation

ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.recently_data,.recently_img,.popular_card,.footer_description,.footer_content,.footer_info', {
  delay: 300,
  duration: 2500,
  origin: 'top',
  distance: '50px',
  reset: true
});



ScrollReveal().reveal('.home_data', { origin:'bottom' });
ScrollReveal().reveal('.about_data,.recently_data', { origin:'left' });
ScrollReveal().reveal('.about_img,.recently_img', { origin:'right' });
// 순차적으로 나오게 함
ScrollReveal().reveal('.popular_card', { interval: 100 });


// scroll up
// window.addEventListener("scroll",function(){
//     scrollup()
// })

let scrollup=()=>{
  let scrollup=document.getElementById('scroll-up');
  pageYOffset>=350? 
  scrollup.classList.add('show-scroll'): 
  scrollup.classList.remove('show-scroll');
}
window.addEventListener("scroll",scrollup)


// menu
let scrollActive =()=>{
  let scrollY = pageYOffset;
  // console.log(scrollY)
  // section[id] -> section의 속성 중 id를 가지고 있는 section
  let sections = document.querySelectorAll('section[id]')
  // console.log(sections)

  // sections.forEach((각각의 아이템, 아이템의 인덱스번호)=>{}) sections의 아이템 각각이 할 일
  // 인덱스번호는 생략이 가능
  sections.forEach((current)=>{
    let sectionHeight = current.offsetHeight; // 자신의 영역의 전체 높이값
    // console.log(sectionHeight)

    // 자신의 영역이 시작되는 지점, 나의 머리가 천장에 닿는 지점
    let sectionTop = current.offsetTop -60;

    let sectionId = current.getAttribute('id') // id의 속성을 뽑겠다
    console.log(sectionId)

    // a태그의 href 중에서 home을 포함하고 있냐고 물음
    let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`);

    console.log(sectionClass)

    if (scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link');
    }else {
      sectionClass.classList.remove('active-link');
    }


  }) 
}
window.addEventListener('scroll',scrollActive)

