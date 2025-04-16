let martelo = 19.99;

//pegar o valor do campo produto

//pegar o valor do campo qtd
const precos={//dicionrio
    "parafuso": 10,
    "martelo": 20,
    "chave de fenda": 30
};


function p(){
    let escolhaproduto = document.getElementById("produto").value;
    let quantidadedeproduto = document.getElementById("Quantidade").value;
    console.log(precos[escolhaproduto]*quantidadedeproduto);
    
    
}
