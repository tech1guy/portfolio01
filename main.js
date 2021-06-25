// pages
let about = document.querySelector('.about')
let contact = document.querySelector('.contact')
let portfolio = document.querySelector('.portfolio')
let resume = document.querySelector('.Resume')
let nav = document.querySelector('nav')

// navs

let contactNav = document.querySelector('.contactNav')
let aboutNav = document.querySelector('.aboutNav')
let portfolioNav = document.querySelector('.portfolioNav')
let resumeNav = document.querySelector('.resumeNav')



function contactpage(params) {

    contact.classList.toggle('hide')
    about.classList.add('hide')
    resume.classList.add('hide')
    portfolio.classList.add('hide')
}
function aboutpage(params) {

    about.classList.toggle('hide')
    contact.classList.add('hide')
    resume.classList.add('hide')
    portfolio.classList.add('hide')
}

function resumepage(params) {

    resume.classList.toggle('hide')
    about.classList.add('hide')
    contact.classList.add('hide')
    portfolio.classList.add('hide')
}

function portfoliopage(params) {

    portfolio.classList.toggle('hide')
    about.classList.add('hide')
    resume.classList.add('hide')
    contact.classList.add('hide')
}


contactNav.addEventListener('click', () => {
    contactpage()

})
aboutNav.addEventListener('click', () => {
    aboutpage()

})
portfolioNav.addEventListener('click', () => {
    portfoliopage()

})
resumeNav.addEventListener('click', () => {
    resumepage()

})









