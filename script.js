function loader() {
    var tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader h3", {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader", {
        opacity: 0
    })

    tl.from("#hero h3 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5
    })

    tl.to("#loader", {
        display: "none"
    })
}

loader();

function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locoscroll();

function textAnimation() {
    gsap.from("#an, .ac span h4 p", {
        y: 120,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".feature-box",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            markers: true,
            scrub: 3
        }
    })
}

textAnimation();

function text2Animation() {
    gsap.from("#an2, .ac2 span h4 p", {
        y: 120,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".feature-box2",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            markers: true,
            scrub: 3
        }
    })
}

text2Animation();

function text3Animation() {
    gsap.from("#an3, .ac3 span h4 p", {
        y: 120,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".feature-box3",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            markers: true,
            scrub: 3
        }
    })
}

text3Animation();

function imgAnimation() {
    gsap.from(".feature-img img", {
        y: 120,
        opacity: 0,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".feature-box",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            markers: true,
            scrub: 3
        }
    })
}

imgAnimation();
