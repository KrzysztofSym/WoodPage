
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
    }

    if ((scrollSize > (introduction2DistanceTop - window.innerHeight * 0.6)) && (pic2.classList.contains('active') !== true)) {
        pic2.classList.add('activePic')
        paragraph2.classList.add('activeP')
        hr2.classList.add('activeHr')
}}
window.addEventListener("scroll", imgSlide);

// Cabinet slider
// Draggable slider
let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

		for (let i=0; i < thumbnails.length; i++){
      thumbnails[i].addEventListener('mouseover', function(){
       let timer = setTimeout(function() {
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}
				thumbnails[i].classList.add('active')
				document.getElementById('featured').src = thumbnails[i].src;
     }, 500);
     thumbnails[i].addEventListener('mouseleave', function(){
      clearTimeout(timer);
    });
      });
		}

const slider = document.getElementById("slider");
firstImg = slider.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".fa");

let isSlideStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; // img widht + 14 margin value
let scrollWidth = slider.scrollWidth - slider.clientWidth; // getting max scrollable width

const showHideIcons = () => {
  // showing and hiding prev/next icon according to slider scroll left value
  arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = slider.scrollLeft >= scrollWidth ? "none" : "block";

}

 arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    // if clicek icon is left, reduce width value form the slider scrool left else add to it
    slider.scrollLeft += icon.id == "slideLeft" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });

 });
 const autoSlide = () => {
  console.log("ok");
 }

 const slideStart = (e) => {
   isSlideStart = true;
   prevPageX = e.pageX || e.touches[0].pageX;
   prevScrollLeft = slider.scrollLeft;
 }

const sliding = (e) => {
  if(!isSlideStart) return;
  e.preventDefault();
  slider.classList.add("sliding");
  let positionDiff = e.pageX - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

const slideStop = () => {
  isSlideStart = false;
  slider.classList.remove("sliding");
  autoSlide();
}

slider.addEventListener("mousedown", slideStart);
slider.addEventListener("touchstart", slideStart);

document.addEventListener("mousemove", sliding);
// slider.addEventListener("touchmove", sliding);

document.addEventListener("mouseup", slideStop);
// slider.addEventListener("mouseleave", slideStop);
// slider.addEventListener("touchend", slideStop);

