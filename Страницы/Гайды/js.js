menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");

	if(x.className === "topnav") {
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
};


const width = window.innerWidth
if(width<1024 && width>720){
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log("gfdgdf")
}
else if(width<720){
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}
else{
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}

addEventListener("resize", function(){
const width = window.innerWidth
if(width<1024 && width>720){
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log("gfdgdf")
}
else if(width<720){
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}
else{
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}
});


$(".item1").magnificPopup({
	type : 'image',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
});

function readMore(){
  var dots = document.getElementById("dots");
    var more = document.getElementById("more");
      var btn = document.getElementById("btn");
  if(dots.style.display=="none"){
    dots.style.display="inline";
    btn.innerHTML="Подробнее";
    more.style.display="none";}
    else{
    dots.style.display="none";
    btn.innerHTML="Скрыть";
    more.style.display="inline"
  }
}

function readMore1(){
  var dots1 = document.getElementById("dots1");
    var more1 = document.getElementById("more1");
      var btn1 = document.getElementById("btn1");
  if(dots1.style.display=="none"){
    dots1.style.display="inline";
    btn1.innerHTML="Подробнее";
    more1.style.display="none";}
    else{
    dots1.style.display="none";
    btn1.innerHTML="Скрыть";
    more1.style.display="inline"
  }
}

function readMore2(){
  var dots2 = document.getElementById("dots2");
    var more2 = document.getElementById("more2");
      var btn2 = document.getElementById("btn2");
  if(dots2.style.display=="none"){
    dots2.style.display="inline";
    btn2.innerHTML="Подробнее";
    more2.style.display="none";}
    else{
    dots2.style.display="none";
    btn2.innerHTML="Скрыть";
    more2.style.display="inline"
  }
}