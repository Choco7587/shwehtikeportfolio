gsap.registerPlugin(ScrollTrigger);

let navtoggle = document.getElementById('toggle');
let sidenav = document.querySelector('.side-nav');
let toggle = document.querySelector('.nav-toggle');
let bars = document.querySelector('.fa-bars');
let xmark = document.querySelector('.fa-xmark');

gsap.to(navtoggle, {
    scrollTrigger: {
        trigger: '.toggle',
        start: "center top",
        end: "top top",
        scrub: true,
    },
    opacity: 1,
    y: -10,
    ease: Elastic.easeOut.config(1 , 0.3),
});

const navSlide = ()=> {
    navtoggle.addEventListener('click', ()=> {
        sidenav.classList.toggle("side-active");
        bars.classList.toggle("bars");
        xmark.classList.toggle("xmark");

        gsap.from('.side-nav', 0.5, {
            right: -100,
            ease: Elastic.easeOut(1, -0.3),
        })
    });
};
navSlide();

// toggle.addEventListener('click', ()=> {
//     sidenav.style.display = "block";
// });

gsap.set('.cursor', {xPercent: -50, yPercent: -50});
let cursor = document.querySelector('.cursor');
let body = document.querySelector('body');
let hand = document.querySelector('.hand');
let title = document.querySelector('.hoverItem');
let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, {x: mouseX,y:mouseY});
})

body.addEventListener('mouseover', ()=>{
    gsap.to(cursor, 1, {
        scale: 1,
        opacity: 1,
    })
})

body.addEventListener('mouseleave', ()=>{
    gsap.to(cursor, 1, {
        scale: 0,
        opacity:0,
    })
})

title.addEventListener('mouseover', ()=> {
    gsap.to(hand, 0.5, {
        scale: 1,
        opacity: 1,
        top: '-75px',
        left: '-75px',
        rotate: 0,
        ease: Elastic.easeOut.config(1 , 0.3),
    })
})

title.addEventListener('mousemove', ()=> {
    gsap.to(hand, 0.5, {
        x: mouseX,
        y: mouseY,
    })
})

title.addEventListener('mouseleave', ()=> {
    gsap.to(hand, 0.5, {
        scale: 0,
        opacity: 0,
    })
});


var today = new Date();

document.getElementById("displayTime").innerHTML = Date() ;

// scroll down animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }

    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
// scroll down animation end
// custom cursor
// let myDiv = document.getElementById("my-div");
// //detect touch device
// function isTouchDevice(){
//     try{
//         document.createEvent("TouchEvent");
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
// const move = (e) => {
//     //try to aboidany errors for touch screens
//     try {
//         var x = !isTouchDevice() ?  e.pageX : e.touches[0].pageX;
//         var y = !isTouchDevice() ?  e.pageY : e.touches[0].pageY;
//     } catch (e) {}
//     //Set left and top of div based on mouse position
//     myDiv.style.left = x - 10 + "px";
//     myDiv.style.top = y - 10 + "px";
// };

// //for mouse
// document.addEventListener("mousemove", (e) => {
//     move(e);
// });
// //for touch
// document.addEventListener("touchmove", (e) => {
//     move(e);
// });
// custom cursor end

// recent work to contact page transition effect
const SkewedOne = document.querySelector('.SkewedOne');
const SkewedTwo = document.querySelector('.SkewedTwo');
window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/110;
    const value2 = 15 + window.scrollY/-110;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)";
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
});

// js cursor animation

// let mouseCursor = document.querySelector(".cursor");
// let workItems = document.querySelector(".work-item .work-items");

// window.addEventListener("mousemove", cursor);

// function cursor(e) {
//     mouseCursor.style.top = e.pageY + "px";
//     mouseCursor.style.left = e.pageX + "px";
// }

// workItems.forEach(item => {
//     item.addEventListener("mouseleave", () => {
//         mouseCursor.classList.remove("link-grow");
//     });
//     item.addEventListener("mouseover", () => {
//         mouseCursor.classList.add("link-grow");
//     });
// });

// recent work cursor animation
// const hoverItem = document.getElementById("hoverItem");

// window.onmousemove = (e) => {
//     const percent = e.clientX / window.innerWidth;

//     hoverItem.animate({
//         transform: `translateX(${percent * hoverItem.offsetWidth * -1}px)`,
//     }, {
//         fill: "forwards",
//         duration: 4000,
//     })
// }

