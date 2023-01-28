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