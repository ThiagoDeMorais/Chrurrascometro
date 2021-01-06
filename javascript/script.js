let inputAdultdos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let carne = document.getElementById("carne");
let cerveja = document.getElementById("cerveja");
let refrigerante = document.getElementById("refrigerante");


function calcular(){
    let criancas = inputCriancas.value;
    let adultos = inputAdultdos.value;
    let duracao = inputDuracao.value
    console.log("Calculado . . .")

    let qtdTotalCarne;
    let qtdTotalCerveja;
    let qtdTotalRefrigerante;
    if(duracao.value>=6){
        qtdTotalCarne = (adultos * 650 ) + (criancas * 0.5 *650); 
        qtdTotalCerveja = adultos * 2000; 
        qtdTotalRefrigerante = criancas * 0.5 * 1500;
    }else{
        qtdTotalCarne = (adultos * 400 ) + (criancas * 0.5 *650); 
        qtdTotalCerveja = adultos * 1200; 
        qtdTotalRefrigerante = criancas * 0.5 * 1000;
    }
    
    carne.innerHTML = `<p>${qtdTotalCarne/1000} kg de carne</p>`
    cerveja.innerHTML = `<p>${qtdTotalCerveja} ml de cerveja(Equivalente a ${Math.ceil(qtdTotalCerveja/350)} Latas de 350 ml)</p>`
    refrigerante.innerHTML = `<p>${qtdTotalRefrigerante} ml de refrigerante(Equivalente a ${Math.ceil(qtdTotalRefrigerante/350)} Latas de 350 ml)</p>`


    console.log("Total de carne: " +qtdTotalCarne +" Total de cerveja: " + qtdTotalCerveja + " Total de refrigerante: " + qtdTotalRefrigerante )
}
