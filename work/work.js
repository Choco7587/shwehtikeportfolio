import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
gsap.registerPlugin(ScrollTrigger);

let navtoggle = document.getElementById('toggle');
let toggle = document.querySelector('.nav-toggle');
let sidenav = document.querySelector('.side-nav');
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

let bg = document.getElementById('bg');
let leftGirl = document.getElementById('leftGirl');
let rightBoy = document.getElementById('rightBoy');
let ball = document.getElementById('ball');
let title = document.getElementById('title');


// javascript responsive!!!

const mm = window.matchMedia("(max-width: 391px)");

function myFunction(mm) {
    if (mm) {
        window.addEventListener('scroll', () => {
            let value = window.scrollY;
        
            leftGirl.style.left = value * -0.3 + 'px';
            ball.style.left = value * -0.35 + 'px';
            rightBoy.style.left = value * 0.5 + 'px';
            bg.style.top = value * 0.2 + 'px';
            title.style.marginTop = value * -1 + 'px';
        });

        console.log ("hello world");
    } else{
        
        console.log("OK");
    }
  }

  myFunction();

  mm.addEventListener("change", function() {
    myFunction(mm);
  });

  //end


// gsap page start effect
gsap.from("#bg", 1, {
  top: 100,
  opacity: 0,
})
gsap.from("#rightBoy", 2, {
  left: 200,
  opacity: 0,
  delay: 0.6,
})
gsap.from("#leftGirl", 2,{
  left: -200,
  opacity: 0,
  delay: 0.5,
})
gsap.from("#ball", 2, {
  left: -200,
  opacity: 0,
  delay: 0.6,
});


gsap.set('.cursor', {xPercent: -50, yPercent: -50});
let cursor = document.querySelector('.cursor');
let body = document.querySelector('body');
let hand = document.querySelector('.hand');
let hoveritem = document.querySelector('.hoverItem');
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

hoveritem.addEventListener('mouseenter', ()=> {
    gsap.to(hand, 0.5, {
        scale: 1,
        opacity: 1,
        top: '-75px',
        left: '-75px',
        rotate: 0,
        ease: Elastic.easeOut.config(1 , 0.3),
    })
})

hoveritem.addEventListener('mousemove', ()=> {
    gsap.to(hand, 0.5, {
        x: mouseX,
        y: mouseY,
    })
})

hoveritem.addEventListener('mouseleave', ()=> {
    gsap.to(hand, 0.5, {
        scale: 0,
        opacity: 0,
    })
});



const toggleBtn = {
    selector: '.toggle-btn', // Your class or id selector for wrapper.
        children: [
                {
                    className: '.btn-toggle',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
        ]
  };
  GHover(toggleBtn);

  const workBtn = {
    selector: '.work-btn', // Your class or id selector for wrapper.
        children: [
                {
                    className: '.btn-work',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
        ]
  };
  GHover(workBtn);

  const emailBtn = {
    selector: '.email-btn', // Your class or id selector for wrapper.
        children: [
                {
                    className: '.btn-email',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
        ]
  };
  GHover(emailBtn);

  const phoneBtn = {
    selector: '.phone-btn', // Your class or id selector for wrapper.
        children: [
                {
                    className: '.btn-phone',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
        ]
  };
  GHover(phoneBtn);


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

var today = new Date();

document.getElementById("displayTime").innerHTML = Date() ;

