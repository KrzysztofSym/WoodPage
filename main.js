
fetch("./header.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("header").innerHTML = data;
});

fetch("./footer.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("footer").innerHTML = data;
});

const introduction1Height = document.querySelectorAll('.introduction1').clientHeight
// const introduction1Height = document.querySelectorAll('.introduction1').style.backgroundColor = "blue"
const introduction1DistanceTop = document.querySelectorAll('.introduction1').offsetTop
const pic1 = document.querySelector('div.bg1')
const paragraph1 = document.querySelector('.introduction1 span p')
const hr1 = document.querySelector('.introduction1 span hr')
const introduction2Height = document.querySelectorAll('.introduction2').clientHeight
const introduction2DistanceTop = document.querySelectorAll('.introduction2').offsetTop
const pic2 = document.querySelector('div.bg2')
const paragraph2 = document.querySelector('.introduction2 span p')
const hr2 = document.querySelector('.introduction2 span hr')


// const distanceToTop = pic.getBoundingClientRect().top;

// console.log(introduction1DistanceTop);
function imgSlide() {
    const scrollSize = window.scrollY
    //console.log(scrollSize);
    if ((scrollSize > (introduction1DistanceTop - window.innerHeight * 0.6)) && (pic1.classList.contains('active') !== true)) {
        pic1.classList.add('activePic')
        paragraph1.classList.add('activeP')
        hr1.classList.add('activeHr')

        // console.log(introduction1DistanceTop);
        // console.log(window.innerHeight);
    };

    if ((scrollSize > (introduction2DistanceTop - window.innerHeight * 0.6)) && (pic2.classList.contains('active') !== true)) {
        pic2.classList.add('activePic')
        paragraph2.classList.add('activeP')
        hr2.classList.add('activeHr')
}}
window.addEventListener("scroll", imgSlide);

// Cabinet slider
let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

		for (let i=0; i < thumbnails.length; i++){
      thumbnails[i].addEventListener(/*'click'*/'mouseover', function(){
       let timer = setTimeout(function() {
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}
				thumbnails[i].classList.add('active')
				document.getElementById('featured').src = thumbnails[i].src;
     }, 500);
     thumbnails[i].addEventListener(/*'click'*/'mouseleave', function(){   
      clearTimeout(timer);
    });
      });
		}

    
    let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');
    let sliderDimension = thumbnails[0].getBoundingClientRect();
    let sliderWidth = sliderDimension.width;
  

    
		// buttonLeft.addEventListener('click', function(){
    //   document.getElementById('slider').scrollLeft -= sliderWidth;
    //   console.log("left");
    //   console.log(sliderWidth);

		// })

		// buttonRight.addEventListener('click', function(){
		// 	document.getElementById('slider').scrollLeft += sliderWidth
		// console.log("right");
    // console.log(sliderWidth);
    // })

    // Another option to scroll

    const productContainers = [...document.querySelectorAll('#slider')];
    const nxtBtn = [...document.querySelectorAll('.right')];
    const preBtn = [...document.querySelectorAll('.left')];
    
    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        console.log(containerWidth);

    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })

