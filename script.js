// Website link-  https://sidcupfamilygolf.com/



var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-9+"px"
    crsr.style.top = dets.y-9+"px"
    blur.style.left = dets.x-130+ "px"
    blur.style.top = dets.y-130+"px"
})

var h4all = document.querySelectorAll("#nav h4,#f2,#f3,#f4,#f5,.elem,.card,#arrow")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #B1E032"
        crsr.style.backgroundColor = "#B1E032"
    })
})


gsap.to("#nav",{
    backgroundColor : "#000",
    height:"5.5vw",
    zIndex: 106,
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
       trigger:"#main",
       scroller:"body",
       start:"top -25%",
       end:"top -70%",
       scrub:2
    }
})


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"65%",
        scrub:1
    }
})

gsap.from("#card-container",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 54%",
        end:"top 24%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 120%",
        end:"top 90%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})