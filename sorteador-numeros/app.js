
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    
    let listaDeNumeros = [];
    
    for(let i = 0;i < quantidade;i++){
        let numero = obterNumeroAleatorio(de,ate);
        listaDeNumeros.push(numero);
    }

}


function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}



