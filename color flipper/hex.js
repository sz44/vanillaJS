const hex = [1,2,3,4,5,6,7,8,9, "A", "B", "c", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const styleRef = document.body.style;

btn.addEventListener('click', () => { 
    let colorStr = buildColorStr();
    styleRef.backgroundColor = colorStr;
    color.textContent = colorStr;
})

let getRand = () => Math.floor(Math.random()*hex.length);

let buildColorStr = () => {
    let str = '#'
    for(let i=0;i<6;i++) {
        str += hex[getRand()]
    }
    return str
}
