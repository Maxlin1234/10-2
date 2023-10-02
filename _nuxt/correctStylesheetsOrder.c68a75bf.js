import{a as p,o as f,b as m,f as r}from"./entry.eed083ea.js";const v={class:"loader-wrap"},_=r("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[r("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})],-1),S=r("div",{class:"loader-wrap-heading"},[r("span",null,[r("h2",{class:"load-text"},[r("span",null,"L"),r("span",null,"o"),r("span",null,"a"),r("span",null,"d"),r("span",null,"i"),r("span",null,"n"),r("span",null,"g")])])],-1),w=[_,S],A={__name:"Loader",setup(n){return p(()=>{const t=document.getElementById("svg"),e=gsap.timeline(),o="M0 502S175 272 500 272s500 230 500 230V0H0Z",a="M0 2S175 1 500 1s500 1 500 1V0H0Z";e.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),e.to(t,{duration:.5,attr:{d:o},ease:"power2.easeIn"}).to(t,{duration:.5,attr:{d:a},ease:"power2.easeOut"}),e.to(".loader-wrap",{y:-1500}),e.to(".loader-wrap",{zIndex:-1,display:"none"}),e.from("header",{y:200},"-=1.5"),e.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),(t,e)=>(f(),m("div",v,w))}},k={class:"cursor"},$={__name:"Cursor",setup(n){return p(()=>{const t=document.querySelectorAll(".hover-this"),e=document.querySelector(".cursor"),o=function(s){const c=this.querySelector(".hover-anim"),{offsetX:l,offsetY:i}=s,{offsetWidth:d,offsetHeight:h}=this,u=25,y=l/d*(u*2)-u,g=i/h*(u*2)-u;c.style.transform=`translate(${y}px, ${g}px)`,s.type==="mouseleave"&&(c.style.transform="")},a=s=>{const{clientX:c,clientY:l}=s;e.style.left=c+"px",e.style.top=l+"px"};t.forEach(s=>s.addEventListener("mousemove",o)),t.forEach(s=>s.addEventListener("mouseleave",o)),window.addEventListener("mousemove",a),document.querySelectorAll("a, .cursor-pointer").forEach(s=>{s.addEventListener("mousemove",()=>{e.classList.add("cursor-active")}),s.addEventListener("mouseleave",()=>{e.classList.remove("cursor-active")})})}),(t,e)=>(f(),m("div",k))}},q=()=>{let n=150,t=document.querySelector(".progress-wrap"),e=document.querySelector(".progress-wrap path"),o=e.getTotalLength();const a=()=>{let s=window.pageYOffset,c=document.documentElement.scrollHeight-window.innerHeight,l=o-s*o/c;e.style.strokeDashoffset=l};t&&(e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=o+" "+o,e.style.strokeDashoffset=o,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear",a(),window.addEventListener("scroll",a),window.addEventListener("scroll",function(){var s;window.pageYOffset>n?t==null||t.classList.add("active-progress"):(s=document.querySelector(".progress-wrap"))==null||s.classList.remove("active-progress")}),t.addEventListener("click",function(s){return s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},L={class:"progress-wrap cursor-pointer"},x=r("svg",{class:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102"},[r("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})],-1),E=[x],B={__name:"ProgressScroll",setup(n){return p(()=>{q()}),(t,e)=>(f(),m("div",L,E))}};function D({preview:n,lightMode:t,showcases:e}){let o=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),a=document.querySelector('link[href="/dark/assets/css/style.css"]'),s=document.querySelector('link[href="/light/assets/css/style.css"]'),c=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),l=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(t&&!n){document.head.append(l),document.head.append(s);let i=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');i.length>1&&i[0].remove();let d=document.querySelectorAll('link[href="/light/assets/css/style.css"]');if(d.length>1&&d[0].remove(),e){let h=document.querySelector('link[href="/dark/assets/css/plugins.css"]');h&&h.remove();let u=document.querySelector('link[href="/dark/assets/css/style.css"]');u&&u.remove()}}if(!t&&!n){document.head.append(c),document.head.append(a);let i=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');i.length>1&&i[0].remove();let d=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');d.length>1&&d[0].remove()}n&&o?(document.head.append(o),s&&s.remove(),l&&l.remove()):!n&&o&&o.remove()}export{A as _,$ as a,B as b,D as c};
