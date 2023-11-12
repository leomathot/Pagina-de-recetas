// ***** Theme *****

let themeSwitch = document.querySelector('#theme-switch')

themeSwitch.addEventListener('click', () => {
    if(document.querySelector("html").getAttribute('prefers-color-scheme') == 'dark') {
        document.documentElement.setAttribute('prefers-color-scheme', 'light')
    } else {
        document.documentElement.setAttribute('prefers-color-scheme', 'dark')
    }
});


// ***** Banners carousel *****

let bannerConts = document.querySelectorAll(".home-banner-container")

const carouselTime = 3500
const goToTime = 6000
// play() fires on load and moves the banners immediately, so the last banner is set as current to get the first one (it is the next one) at that time
let currentBanner = bannerConts.length - 1
let leftBanner
let rightBanner
let prevBtn = document.querySelector('#banners-prev')
let nextBtn = document.querySelector('#banners-next')
let stopBtn = document.querySelector('#banners-stop')
let playBtn = document.querySelector('#banners-play')
let interval
let timeOut

function prev() {
    // set prev as current
    currentBanner--
    currentBanner = currentBanner === -1
        ? bannerConts.length - 1
        : currentBanner
    // show it
    showBanner(currentBanner)
}

function next() {
    // set next as current
    currentBanner++
    currentBanner = currentBanner === bannerConts.length
        ? 0
        : currentBanner
    // show it
    showBanner(currentBanner)
}

function getLeft() {
    // prev banner position/index
    leftBanner = currentBanner - 1
    leftBanner = leftBanner === -1
        ? bannerConts.length - 1
        : leftBanner
    return leftBanner
}

function getRight() {
    // next banner position/index
    rightBanner = currentBanner + 1
    rightBanner = rightBanner === bannerConts.length
        ? 0
        : rightBanner
    return rightBanner
}

function showBanner(currentBann) {
    bannerConts.forEach((banCont, ind) => {
        if (ind === currentBann) {
            // current to screen
            banCont.style.zIndex = "10"
            banCont.style.transition = "left .5s ease-in-out"
            banCont.style.left = "0px"
        } else {
            if (ind === getLeft()) {
                // set the left one
                banCont.style.zIndex = "5"
                banCont.style.left = "-100vw"
            } else if (ind === getRight()) {
                // set the right one
                banCont.style.zIndex = "5"
                banCont.style.left = "100vw"
            } else {
                banCont.style.transition = "left 0s linear"
            }
        }
    })
}

function play() {
    // if paused, resume
    next()
    // loop
    interval = setInterval(next, carouselTime)
}

function stop() {
    // clear timeout and interval
    clearTimeout(timeOut)
    clearInterval(interval)
}

function goPrev() {
    // if paused, resume
    // show play btn
    stopBtn.style.zIndex = "20"
    playBtn.style.zIndex = "0"
    stop() // to clear timeout and interval
    prev() // move to prev
    timeOut = setTimeout(play, goToTime) // wait for timeout and play
}

function goNext() {
    stopBtn.style.zIndex = "20"
    playBtn.style.zIndex = "0"
    stop() // to clear timeout and interval
    next() // move to next
    timeOut = setTimeout(play, goToTime) // wait for timeout and play
}

prevBtn.addEventListener("click", goPrev)
nextBtn.addEventListener("click", goNext)
stopBtn.addEventListener("click", () => {
    stopBtn.style.zIndex = "0"
    playBtn.style.zIndex = "20"
    stop()
})
playBtn.addEventListener("click", () => {
    stopBtn.style.zIndex = "20"
    playBtn.style.zIndex = "0"
    play()
})

showBanner(currentBanner)
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
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" title="Facebook">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" title="X">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.YouTube.com" target="_blank" title="YouTube">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
    </div>

    <div id="developer-info">

        <div id="developer-name-and-email">
            <p>Leonardo Mathot</p>
            <p id="developer-email">
                leomathot21@gmail.com
                <i class="fa-solid fa-copy" title="Copy e-mail"></i>
            </p>
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

// ***** Copy email *****

document.querySelector("#developer-email").addEventListener("click", copyEmail)

function copyEmail() {

    navigator.clipboard.writeText
        ("leomathot21@gmail.com");
}