const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const media = document.querySelectorAll('.bulle');

window.addEventListener('load' , () => {
    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, 0.3, '-2=')
    .staggerFrom(media, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
})

$(document).ready(function() {
    $("#b1").on({
        mouseenter:function(){
            $("#b1").css("background", "#f1f1f1")
            $("#b1").css("color", "#333")
        },
        mouseleave:function(){
            $("#b1").css("background", "rgba(255, 0, 0, 0)")
            $("#b1").css("color", "#f1f1f1")
        }
    });
});

$(document).ready(function() {
    $("#b2").on({
        mouseenter:function(){
            $("#b2").css("background", "#f1f1f1")
            $("#b2").css("color", "#333")
        },
        mouseleave:function(){
            $("#b2").css("background", "rgba(255, 0, 0, 0)")
            $("#b2").css("color", "#f1f1f1")
        }
    });
});

$(document).ready(function() {
    $("#b3").on({
        mouseenter:function(){
            $("#b3").css("background", "#f1f1f1")
            $("#b3").css("color", "#333")
        },
        mouseleave:function(){
            $("#b3").css("background", "rgba(255, 0, 0, 0)")
            $("#b3").css("color", "#f1f1f1")
        }
    });
});