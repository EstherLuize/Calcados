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


const lazyLoading = () =>{
    const listaElementos = document.querySelectorAll("[data]");

    listaElementos.forEach((elemento)=>{
        if(elemento.getBoundingClientRect().top < window.innerHeight){
            elemento.src = elemento.getAttribute("data")
            elemento.removeAttribute("data")
        }
    })
}

window.onload=()=>{
    lazyLoading()
}

window.onscroll=()=>{
    lazyLoading()
}

