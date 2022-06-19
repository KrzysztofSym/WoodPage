
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

const introduction1Height = document.querySelector('.introduction1').clientHeight
const introduction1DistanceTop = document.querySelector('.introduction1').offsetTop
const pic1 = document.querySelector('div.bg1')
const paragraph1 = document.querySelector('.introduction1 span p')
const hr1 = document.querySelector('.introduction1 span hr')
const introduction2Height = document.querySelector('.introduction2').clientHeight
const introduction2DistanceTop = document.querySelector('.introduction2').offsetTop
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

    // check why it doesn't work
//     if ((scrollSize > (introduction2DistanceTop - window.innerHeight * 0.6)) && (pic2.classList.contains('active') !== true)) {
//         pic2.classList.add('activePic')
//         paragraph2.classList.add('activeP')
//         hr2.classList.add('activeHr')

//         console.log('yeah');
// }}
// window.addEventListener("scroll", imgSlide);
