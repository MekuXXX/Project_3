let allSpans = document.querySelectorAll(".stats .container .box [data-goal]");
let allSpans1 = document.querySelectorAll(".our-skills .skills .skill .the-progress span");
let section = document.querySelector(".stats");
let section1 = document.querySelector(".our-skills");
let start = false;
let textArea = document.querySelector("textarea.input");
window.addEventListener("scroll" , () => {
    if (window.scrollY >= section.offsetTop - 450) {
        if(!start) {
            allSpans[3].nextElementSibling.classList.add("money");
            allSpans[3].nextElementSibling.innerHTML = "K";
            allSpans.forEach(el => counter(el));
        }
        start = true;
    }
    if (window.scrollY >= (section1.offsetTop - 350)) {
        allSpans1.forEach(el => el.style.width = el.dataset.width);
    }
})
function counter(ele) {
    let goal = ele.getAttribute("data-goal");
    let counter1 = setInterval(() => {
    ele.innerHTML++;
    if (ele.textContent === goal){
        clearInterval(counter1);
    }
}, 3000 / goal);
}
let endDate = new Date("Dec 30 2025").getTime();
let timer = setInterval(() => {
    let dateNow = new Date().getTime();
    let difDate = endDate - dateNow;
    let days = Math.floor(difDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minusts = Math.floor((difDate % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(((difDate % (1000 * 60 * 60 * 24) % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
    document.querySelector(".unit .days").innerHTML = days > 100 ? days : days < 10 ? `00${days}` : `0${days}` ;
    document.querySelector(".unit .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".unit .minutes").innerHTML = minusts < 10 ? `0${minusts}` : minusts;
    document.querySelector(".unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
},1000);
textArea.innerHTML = "";
textArea.nextElementSibling.nextElementSibling.innerHTML = textArea.getAttribute("maxlength");
textArea.addEventListener("input" , () => {
    textArea.nextElementSibling.nextElementSibling.innerHTML = textArea.getAttribute("maxlength") - event.target.value.length;
    console.log(textArea.nextElementSibling.nextElementSibling.innerHTML)
    textArea.nextElementSibling.style.cssText = `width: ${(event.target.value.length * 100) / textArea.getAttribute("maxlength")}%`;
});

