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

