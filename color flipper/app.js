//note: chrome converts #f15025 to rgb(241, 80, 37), and rgba(133,122,200) to rgb(133, 122, 200).
// even did rgb(133,122,200) to rgb(133, 122, 200)
const colors = ["green", "red", "rgb(133, 122, 200)", "rgb(241, 80, 37)", "rgb(241, 245, 248)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const styleRef = document.body.style;
styleRef.backgroundColor = colors[4];
console.log(styleRef.backgroundColor)

btn.addEventListener('click', () => {
    colorsCopy = colors.filter(value => value !== styleRef.backgroundColor);
    console.log(colorsCopy);
    let newColor = colorsCopy[Math.floor(Math.random()*colorsCopy.length)];
    styleRef.backgroundColor = newColor;
    color.textContent = newColor;
    console.log(newColor);

    /*
    let randColor;
    do {
        randColor = colors[Math.floor(Math.random()*colors.length)];
    }while(styleRef.backgroundColor === randColor)
    styleRef.backgroundColor = randColor;
    color.textContent = randColor;
    */
    /*
    const randColor = colors[Math.floor(Math.random()*colors.length)];
    if(styleRef.backgroundColor !== randColor) {
        styleRef.backgroundColor = randColor
    }else if(styleRef.backgroundColor !== colors[0]){
        styleRef.backgroundColor = colors[0]
    } else {
        styleRef.backgroundColor = colors[1]
    }
    */
    //bgColor !== randColor? randColor : bgColor !== colors[0]? colors[0]: colors[1]; 
});