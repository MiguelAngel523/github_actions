const $ = (e) => document.getElementById(e);
const DRETA_ESQUERRA = 0;

function Chiva(posx, posy, element, alcada, 
    direccio = DRETA_ESQUERRA){

    this.posx = posx
    this.posy = posy
    this.element = element
    this.alcada = alcada
    this.direccio = direccio
}

Chiva.prototype.mou = function(){
    let novaPosicio = this.posx
    if (this.direccio == DRETA_ESQUERRA){
        novaPosicio -= 1
    }
        
    this.posx = novaPosicio;

    if (novaPosicio < -150){
        this.posx = window.innerWidth+100;
    }

    this.element.style.left = this.posx + "px"
    console.log("Posicion: " + novaPosicio + "Ventana size: " + window.innerWidth)
}

window.addEventListener("load", function () {
    let elementChiva = $("chiva");

    let chiva = new Chiva(window.innerWidth+100,100,
        elementChiva, "10vw")

    let milisAnteriors = 0

    function anima(timestamp)
    {
        let milisEntreFrames = timestamp - milisAnteriors
        let segonsEntreFrames = milisEntreFrames / 60
        milisAnteriors = timestamp

        chiva.mou(segonsEntreFrames)
        requestAnimationFrame(anima)
    }
    requestAnimationFrame(anima)
})