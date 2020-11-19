
const introduction1Height = document.querySelector('.introduction1').clientHeight
const introduction1DistanceTop = document.querySelector('.introduction1').offsetHeight
const pic = document.querySelector('div.bg')

// console.log(introduction1DistanceTop);
function imgSlide() {
    const scrollSize = window.scrollY
    //console.log(scrollSize);
    if (scrollSize > (introduction1DistanceTop + introduction1Height * 0.2)) {
        pic.classList.add('active')
        console.log('działa :)');
    }

}
window.addEventListener("scroll", imgSlide)