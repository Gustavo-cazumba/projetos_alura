
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // validação dos campos
    const validacao = function validacaoNumero(mensagem){   
        if (isNaN(quantidade) ||isNaN(de)|| isNaN(ate)){
            mensagem = alert("Por favor, preencha todos os campos com números válidos.");
            reiniciar();
            mensagem = false;
            console.log("Valores inválidos preenchidos.");
        }else if(quantidade < 0 || ate < 0){
            mensagem = alert("Por favor, preencha os campos com números positivos.");
            reiniciar();
            mensagem = false;
            console.log("Valores negativos preenchidos.");
        }else if(de > ate){
            mensagem = alert("O campo 'de numero' deve ser menor ou igual ao campo 'até numero'.");
            reiniciar();
            mensagem = false;
            console.log("Valores em ordem incorreta preenchidos.");
        }else{
            mensagem = true;
        }
        return mensagem;
    }

    let listaDeNumeros = []; 
    
    if (validacao() === true){
        for(let i = 0;i < quantidade;i++){
            let numero = obterNumeroAleatorio(de,ate);
        
            while(listaDeNumeros.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
            }
            listaDeNumeros.push(numero);
        }
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumeros}</label>`

    }else if (validacao() === false){
        document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">preencha os campos corretamente</label>`
    }

    alterarStatusBotao();
}


function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}


function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(resetQuantidade,resetDe,resetAte,resetResultado){
    resetQuantidade = document.getElementById('quantidade').value = '';
    resetDe = document.getElementById('de').value = '';
    resetAte = document.getElementById('ate').value = '';
    resetResultado = document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}






