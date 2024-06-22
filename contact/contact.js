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

// const toggleBtn = {
//     selector: '.toggle-btn', // Your class or id selector for wrapper.
//         children: [
//                 {
//                     className: '.btn-toggle',
//                     rotate: { x: 0, y: 0, z: 0 },    // Rotate
//                     translate: { x: 20, y: 20, z: 0 }, // Translate
//                     transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
//                 },
//         ]
//   };
// GHover(toggleBtn);

var today = new Date();

document.getElementById("displayTime").innerHTML = Date() ;




// sending email section

// let submit = document.querySelector('.send-btn');


// submit.addEventListener('click', ()=>{
//     let name = document.getElementById("one").value;
//     let email = document.getElementById("two").value;
//     let organization = document.getElementById("three").value;
//     let service = document.getElementById("four").value;
//     let message = document.getElementById("five").value;

//     if(name && email &&  organization && service && message !== null){
//         alert("Thank you for your time! Your details have been submitted!");

//         // sessionStorage.setItem("name", name);
//         // sessionStorage.setItem("email", email);
//         // sessionStorage.setItem("orgName", organization);
//         // sessionStorage.setItem("service", service);
//         // sessionStorage.setItem("message", message);

//         // let userName = sessionStorage.getItem("name");
//         // let userEmail = sessionStorage.getItem("email");
//         // let userOrgName = sessionStorage.getItem("orgName");
//         // let userService = sessionStorage.getItem("service");
//         // let userMessage = sessionStorage.getItem("message");


//         // document.getElementById("name").innerHTML = userName;
//         // document.getElementById("email").innerHTML = userEmail;
//         // document.getElementById("orgName").innerHTML = userOrgName;
//         // document.getElementById("service").innerHTML = userService;
//         // document.getElementById("message").innerHTML = userMessage;
//         // document.getElementById("name").innerHTML = name;
//         // document.getElementById("email").innerHTML = email;
//         // document.getElementById("orgName").innerHTML = organization;
//         // document.getElementById("service").innerHTML = service;
//         // document.getElementById("message").innerHTML = message;

//     }else{
//         alert("Need to fill...");
//     }
// });

// let serve = document.getElementById('right-serve');

// serve.addEventListener('dblclick', function(){
//     const patch = document.querySelector('.patch');
//     patch.style.display = 'block';
// });