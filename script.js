const button = document.querySelector(".vortex")
const button_text = document.querySelector(".vortex h3")
const thankText = document.querySelector(".vortex p:last-child")

let timeLine = new TimelineMax({
    paused:false
})

button.addEventListener("click",()=>{
    timeLine.to(button_text, 0.6, {
        opacity: 0
    })
    .to(button, 0.8, {
        height: 0.2,
        opacity: 0.5,
        boxShadow: "0px 0px 55px 10px #f6fa28,0px 0px 85px 10px #f6fa28",
        delay: 0.25
    })
    .to(button, 0.1, {
        opacity: 0.5,
        background: "red"
    })
    .to(button, 0, {
        width: 1,
        delay: 0.2
    })
    .to(button, 0.1, {
        boxShadow: "0px 0px 100px 55px rgb(0, 255, 0)",
        y: 90,
        height: 100,
        delay: 0.23
    })
    .to(button, 0.3, {
        height: 1000,
        y: -1000,
        boxShadow: "0px 0px 85px 17px #fa2856",
        delay: 0.2
    })
    .to(".thank-you", 1, {
        y:100,
        opacity: 1,
        delay: 0.3
    });
})