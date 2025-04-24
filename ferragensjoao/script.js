let martelo = 20.90;

//pegar o valor do campo produto

//pegar o valor do campo qtd
const precos={//dicionrio
    "parafuso": 10.99,
    "martelo": 20.90,
    "chave de fenda": 30.80
};


const estoque={
    "parafuso" : 100,
    "martelo" :50,
    "chave de fenda" : 40,
};


function calcularPreco(){

    let qtd = document.getElementById("quantidade").value;
    let escolha = document.getElementById("Quantidade").value;
    let valortotal = qtd * precos[escolha]
    

    if(estoque[escolha] - qtd >=0){
        document.getElementById("resultado").innerHTML = valortotal.toFixed(2);
        estoque(escolha) -=qtd;
        window.alert("compra realizada com sucesso" +  valortotal.toFixed(2))
    }else{
        window.alert("ESTOQUE ESGOTADO")
    }
    console.log(estoque[escolhaproduto]);

    
}
