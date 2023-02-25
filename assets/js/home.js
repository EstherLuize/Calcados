const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgGradient: getStyle(html, "--bg-gradient"),
    colorHeadings: getStyle(html, "--color-headings"),
    text:getStyle(html, "--text"),
    menu:getStyle(html, "--menu"),
    icons:getStyle(html, "--icons"),
}

const darkMode = {
    bg: "#da1484",
    bgGradient: "linear-gradient(90deg, #ff1298 0%, #00b3b6 100%)",
    colorHeadings: "#0077ff",
    text:"#111",
    menu:"#d56000",
    icons:"#111"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


var imgAtual = "../img/head2.png";
var imgAnteriror = "../img/head3.png";

function trocar(){
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnteriror;
    imgAnteriror = aux;
}

function typeWriter(element) {
    const textArray = element.innerHTML.split("")
    element.innerHTML = ""
    textArray.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter
        }, 75 * i)
    }) 
}
const title = document.querySelector(".nome")
typeWriter(title)






