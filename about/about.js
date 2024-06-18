import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
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

toggle.addEventListener('click', ()=> {
    sidenav.style.display = "block";
});

// javascript responsive 

var mm = window.matchMedia("(max-width: 391px)")

function myFunction(mm) {
    if (mm) {
       
      console.log ("hello world");

    } else{

        const animatedImages = document.querySelectorAll(".scrollimg");
        animatedImages.forEach(image => {
      const imageOffsetTop = image.offsetTop;
      const imageHeight = image.offsetHeight;
  
      image.animate(
          {
              transform: ["perspective(1000px) rotateY(45deg)" , "perspective(1000px) rotate(0)"],
          },
          {
              easing: "linear",
              timeline: new ScrollTimeline({
                  // scrollOffsets: [
                  //     {target: image, edge: "end", threshold: "0"},
                  //     {target: image, edge: "start", threshold: "1"},
                  // ],
                  scrollOffsets: [
                      CSS.px(imageOffsetTop + imageHeight - window.innerHeight),
                      CSS.px(imageOffsetTop - 500),
                  ]
              }),
          }
      );
  });
  
        console.log("OK");
    }
  }

  myFunction();

  mm.addEventListener("change", function() {
    myFunction(mm);
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

var today = new Date();

document.getElementById("displayTime").innerHTML = Date() ;