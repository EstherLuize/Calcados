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