const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector(".navbar__logo")
const body = document.querySelector("body")

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
    body.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu)

// Smooth Scroll to pages on click
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000,
      'linear'
    )
  })

//   Fixed Navbar
$(".js--fixed-nav").waypoint(function (direction) {
    if (direction == "down") {
        $(".js--nav").toggleClass("fixed")
    } else {
        $(".js--nav").toggleClass("fixed")
    }
    
},{
    offset:"60px"
})



// GSAP Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-hero", {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from(".animate-services", {
    scrollTrigger: ".animate-services",
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from(".animate-img", {
    scrollTrigger: ".animate-services",
    duration: 1.2,
    opacity: 0,
    x: -200
});

gsap.from(".animate-membership", {
    scrollTrigger: ".animate-membership",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from(".animate-card", {
    scrollTrigger: ".animate-card",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

gsap.from(".animate-team", {
    scrollTrigger: ".animate-team",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from(".animate-email", {
    scrollTrigger: ".animate-email",
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.3
});