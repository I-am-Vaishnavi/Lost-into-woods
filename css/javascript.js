let text  = document.getElementById("text_content");
let brd1  = document.getElementById("brd1");
let brd2  = document.getElementById("brd2");
let frst  = document.getElementById("frst");
let rck   = document.getElementById("rck");
let water = document.getElementById("water");
let exp   = document.getElementById("exp");
let header= document.getElementById("header");

window.addEventListener('scroll',function(){
   
    let value= window.scrollY;

    text.style.top = 50 + value * -0.5+ '%';
    brd1.style.top = value* -1.5 + 'px';
    brd1.style.left = value* 2 + 'px';
    brd2.style.top = value* -1.5 + 'px';
    brd2.style.left = value* -5 + 'px';
    exp.style.marginTop= value *1.5+'px';
    rck.style.top = value * -0.12 + 'px';
    frst.style.top = value * 0.25 + 'px';
    header.style.top = value * -0.5 + 'px';


})
// let contact= document.getElementById("con");
// contact.addEventListener("click",click_fun);

// function click_fun(){
//     document.getElementById("contact").innerHTML("hi");
// }