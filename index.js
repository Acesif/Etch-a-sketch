let container = document.querySelector(".sketchboard");
let clear = document.getElementById("clear");
let childdiv = "";
let h1 = document.getElementsByTagName("h1");
let activeColor = 'yellow';
let inactiveColor = 'white';

for (let index = 0; index < 64*5; index++) {
    childdiv += `<div id = 'box-${index}'class='color prevent-select'></div>`
}
container.innerHTML = childdiv;
let color = container.querySelectorAll(".color");

let arr = [];

color.forEach(e=>{
    let x = e.attributes.item(0).nodeValue;
    e.addEventListener('mouseover',function(){
        arr.push(x);
        e.style['background-color'] = `${activeColor}`;
    });
})
clear.addEventListener("click",function(){
    for (let index = 0; index < arr.length; index++) {
        arr.pop();
    }
    color.forEach(e=>{
        e.style['background-color'] = `${inactiveColor}`;
    })
});
