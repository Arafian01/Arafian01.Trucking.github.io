window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var bInLeft = document.querySelectorAll(".bLeft");
    var bInRight = document.querySelectorAll(".bRight");
    var bInUp = document.querySelectorAll(".bUp");
    var fInLeft = document.querySelectorAll(".fLeft");
    var fInRight = document.querySelectorAll(".fRight");
    var fInUp = document.querySelectorAll(".fUp");
    

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    for (var i = 0; i < bInLeft.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = bInLeft[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            bInLeft[i].classList.add("animate__bounceInLeft");
        } else {
            bInLeft[i].classList.remove("animate__bounceInLeft");
        }
    }
    for (var i = 0; i < bInRight.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = bInRight[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            bInRight[i].classList.add("animate__bounceInRight");
        } else {
            bInRight[i].classList.remove("animate__bounceInRight");
        }
    }
    for (var i = 0; i < bInUp.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = bInUp[i].getBoundingClientRect().top;
        var revealpoint = 250;
        if (revealtop < windowheight - revealpoint) {
            bInUp[i].classList.add("animate__bounceIn");
        } else {
            bInUp[i].classList.remove("animate__bounceIn");
        }
    }
    for (var i = 0; i < fInLeft.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = fInLeft[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            fInLeft[i].classList.add("animate__fadeInLeft");
        } else {
            fInLeft[i].classList.remove("animate__fadeInLeft");
        }
    }
    for (var i = 0; i < fInRight.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = fInRight[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            fInRight[i].classList.add("animate__fadeInRight");
        } else {
            fInRight[i].classList.remove("animate__fadeInRight");
        }
    }
    for (var i = 0; i < fInUp.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = fInUp[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            fInUp[i].classList.add("animate__fadeIn");
        } else {
            fInUp[i].classList.remove("animate__fadeIn");
        }
    }
}

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };