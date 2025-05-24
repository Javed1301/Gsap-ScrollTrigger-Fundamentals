function page1Animation(){
    var tl = gsap.timeline()

    tl.from("nav h1",{
        y:-30,
        opacity:0,
        delay:0.6,
        duration:0.5
    })

    tl.from("nav h4 ,nav button",{
        y:-30,
        opacity:0,
        delay:0.2,
        duration:0.5,
        stagger:0.2
    })

    tl.from(".center .part1 h1",{
        x:-200,
        opacity:0,
        duration:0.5
    })

    tl.from(".center .part1 p",{
        x:-100,
        opacity:0,
        duration:0.4
    })

    tl.from(".center .part1 button",{
        opacity:0,
        duration:0.5
    })

    tl.from(".center .part2  img",{
        x:200,
        opacity:0,
        duration:1
    },"-=1") 
    //  my element is running under timeline but starts 1 sec ahead

    tl.from(".section1 .bottom img",{
        opacity:0,
        y:30,
        stagger:0.3,
        duration:0.5
    },"-=3.9")


}

page1Animation()

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 0%",
            scrub:2,
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5,
    
    })
    
    tl2.from("#left1",{
        x:-200,
        opacity:0,
        duration:1
    },"togather1")
    
    tl2.from("#right1",{
        x:200,
        opacity:0,
        duration:1
    },"togather1")
    
    tl2.from("#left2",{
        x:-200,
        opacity:0,
        duration:1
    },"togather2")
    
    tl2.from("#right2",{
        x:200,
        opacity:0,
        duration:1
    },"togather2")
}

page2Animation()