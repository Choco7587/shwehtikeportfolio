"use strict";function GHover(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)initGHover(t[e]);else initGHover(t)}function initGHover(t){function e(t){for(var e=0;e<t.length;e++)if("undefined"!=typeof document.body.style[t[e]])return t[e];return null}function n(){u.style.perspective=d,u.style[p]="rotateZ(0deg) translateZ(0)"}function r(t){var e=u.getBoundingClientRect(),n={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop},r={x:t.clientX+n.left,y:t.clientY+n.top},o={x:r.x-e.left-n.left,y:r.y-e.top-n.top};return o}function o(t){for(var e=r(t),n=0;n<y.length;n++){var o=y[n].rotate?y[n].rotate:m,a=y[n].translate?y[n].translate:m;a=i(a),o=i(o);var s={translate:{x:(a.x[1]-a.x[0])/u.offsetWidth*e.x+a.x[0],y:(a.y[1]-a.y[0])/u.offsetHeight*e.y+a.y[0],z:(a.z[1]-a.z[0])/u.offsetHeight*e.y+a.z[0]},rotate:{x:(o.x[1]-o.x[0])/u.offsetHeight*e.y+o.x[0],y:(o.y[1]-o.y[0])/u.offsetWidth*e.x+o.y[0],z:(o.z[1]-o.z[0])/u.offsetWidth*e.x+o.z[0]}},d=u.querySelectorAll(y[n].className),v=y[n].transition?y[n].transition:h,x=f(s);l(x,d),c(v,d)}}function a(){var e=function(t){return requestAnimationFrame(function(){return o(t)})},n=function(){return requestAnimationFrame(function(){return s(u,t)})};u.addEventListener("mouseleave",n),u.addEventListener("mousemove",e)}function i(t){var e={};for(var n in t)t[n]?"number"==typeof t[n]&&(e[n]=[-1*t[n],t[n]]):e[n]=[0,0];return e}function s(t,e){for(var n={translate:m,rotate:m},r=0;r<y.length;r++){var o=t.querySelectorAll(y[r].className),a=y[r].transition?y[r].transition:h,i=f(n);l(i,o),c(a,o)}}function f(t){var e=t.rotate,n=t.translate,r=1,o=1,a=0,i=0,s=Math.cos(e.y*(Math.PI/180)),f=Math.sin(e.y*(Math.PI/180)),l=Math.cos(e.x*(Math.PI/180)),c=Math.sin(e.x*(Math.PI/180)),u=Math.cos(e.z*(Math.PI/180)),y=Math.sin(e.z*(Math.PI/180)),m=new Array(16);m[0]=s*u*r,m[1]=-1*y,m[2]=f,m[3]=a,m[4]=y,m[5]=l*u*o,m[6]=c,m[7]=i,m[8]=-1*f,m[9]=-1*c,m[10]=s*l,m[11]=0,m[12]=n.x,m[13]=n.y,m[14]=n.z,m[15]=1;for(var h="",d=0;d<m.length;d++){var v=0==d?"":",";h=h.concat(v+m[d])}return h}function l(t,e){Array.prototype.forEach.call(e,function(e,n){e.style[p]="matrix3d("+t+")"})}function c(t,e){Array.prototype.forEach.call(e,function(e,n){e.style[z]=t})}var u=document.querySelector(t.selector),y=t.children,m={x:0,y:0,z:0},h="all 0.2s ease",d="1000px",v=["transform","msTransform","webkitTransform","mozTransform","oTransform"],x=["transition","msTransition","webkitTransition","mozTransition","oTransition"],p=e(v),z=e(x);n(),a()}

//3D hover animate

const dataHover = [
    {
      selector: '.box-hover',
      children: [
        {
          className: '.box',
          rotate: { x: -5, y: -5, z: 0 },
          transition: 'all 0.2s ease',
        },
        {
          className: '.border',
          translate: { x: 20, y: 20, z: 0 },
          transition: 'all 0.2s ease',
        },
        {
          className: '.title',
          rotate: { x: -30, y: -30, z: 3 },
          translate: { x: 50, y: 20, z: 0 },
          transition: 'all 0.2s ease',
        }
      ]
    },
];

GHover(dataHover);

// about btn
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

//nav bar
const navWork = {
    selector: '.nav-work', // Your class or id selector for wrapper.
		    children: [
		      {
		        className: '.work-nav',                   // Class name for transform
		        rotate: { x: 0, y: 0, z: 0 },    // Rotate
		        translate: { x: 20, y: 20, z: 0 }, // Translate
		        transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
		      },
		    ],
};

GHover(navWork);

const navAbout = {
    selector: '.nav-about', // Your class or id selector for wrapper.
		    children: [
                {
                    className: '.about-nav',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
		    ]
};
GHover(navAbout);
const navContact = {
    selector: '.nav-contact', // Your class or id selector for wrapper.
		    children: [
                {
                    className: '.contact-nav',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
		    ]
};
GHover(navContact);

// about btn
const aboutMeBtn = {
    selector: '.aboutme-btn', // Your class or id selector for wrapper.
		    children: [
                {
                    className: '.btn-aboutme',
                    rotate: { x: 0, y: 0, z: 0 },    // Rotate
                    translate: { x: 20, y: 20, z: 0 }, // Translate
                    transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
                },
		    ]
};
GHover(aboutMeBtn);

// email btn
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

// phone btn
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

// get btn
const getBtn = {
  selector: '.get-btn', // Your class or id selector for wrapper.
      children: [
              {
                  className: '.btn-get',
                  rotate: { x: 0, y: 0, z: 0 },    // Rotate
                  translate: { x: 20, y: 20, z: 0 }, // Translate
                  transition: 'all 0.2s ease',     // Transition default is 'all 0.2s ease'
              },
      ]
};
GHover(getBtn);
