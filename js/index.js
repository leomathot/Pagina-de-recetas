// ***** Banners carousel *****

let bannerConts = document.querySelectorAll(".home-banner-container")

const carouselTime = 4500
let position = 0
let $prev = document.querySelector('#prev')
let $next = document.querySelector('#next')
let $carouselItem = document.querySelector('#carouselitem')
let interval;

function prev() {
    position--
    position = position === -1 ? bannerConts.length - 1 : position
    showBanner(position)
}

function next() {
    position++
    position = position === bannerConts.length ?  0 : position
    showBanner(position)
}

function play() {
    interval = setInterval(next, carouselTime)
}

function stop() {
    clearInterval(interval)
}

showBanner(0)

function showBanner(pos) {
    bannerConts.forEach((banCont, ind) => {
        if (ind === pos) {
            banCont.style.zIndex = "10"
            banCont.style.left = "0px"
        } else {
            if(banCont.style.left == "0px") {
                banCont.style.zIndex = "5"
                banCont.style.left = "-100vw"
            } else {
                banCont.style.zIndex = "0"
                banCont.style.left = "100vw"
            }
        }
    })
}

play()



// ***** Footer *****

let footer = `
    <div class="page-footer">

    <div class="footer-text">
    <p>
        <i class="fa-regular fa-copyright"></i> 2023 RECIPage
    </p>
    </div>

    <div class="footer-links">
    <a href="https://www.instagram.com" target="_blank" title="Instagram">
        <i class="fa-brands fa-instagram"></i >
    </a>
    <a href="https://www.facebook.com" target="_blank" title="Facebook">
        <i class="fa-brands fa-facebook"></i >
    </a>
    <a href="https://www.twitter.com" target="_blank" title="Twitter">
        <i class="fa-brands fa-twitter"></i >
    </a>
    <a href="https://www.YouTube.com" target="_blank" title="YouTube">
        <i class="fa-brands fa-youtube"></i >
    </a>
    </div>
    </div>

    <div class="developer-info">

    <div>
    <p>Leonardo Mathot</p>
    <p>leomathot21@gmail.com</p>
    </div>

    <div>
    <p>GitHub Repository</p>
    <a href="https://github.com/leomathot/Recipe-page" target="_blank" title="GitHub">
        <i class="fa-brands fa-github"></i>
    </a>
    </div>

    </div>
    `;

document.querySelector("#footer").innerHTML = footer;