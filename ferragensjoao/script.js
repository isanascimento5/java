 // Preços dos produtos
 const precos = {
    'parafuso': 0.5,
    'martelo': 25,
    'chave de fenda': 10

}
 // Estoques atualizados
 const estoque = {
    "parafuso": 90,
    "martelo": 5,
    "chave de fenda": 12
};

function calcularPreco(){ //funçao que clacula o valor da compra e retira a quantidade comprada do estoque
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if (!produto || isNaN(quantidade) || quantidade <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, selecione um produto e insira uma quantidade válida.';
        return; //encerrando execução
    }

    if (quantidade > estoque[produto]) {
        document.getElementById('resultado').innerText = `Quantidade disponivel em estoque. Disponível: ${estoque[produto]}`;
        return; //encerrar a execução
    }


    const precoTotal = precos[produto] * quantidade; //acessando a posção e calculando preço

    document.getElementById('resultado').innerText = `Total: R$ ${precoTotal.toFixed(2)}`; //acessando h4 e alterando valor

    


estoque[produto] -= quantidade; //retira a qtd do estoque


    document.getElementById("estoque").value = estoque[produto];//acessae o campo de texto e alterar seu valor 
    


}
function adicionaraoestoque(){//add ao estoque 

    function calcularPreco() {
        const produto = document.getElementById("sessao-estoque").value;//acessar o campo produti e guardar esse valor
        const quantidade = parseInt(document.getElementById("quantidade").value);
        const estoqueInput = document.getElementById("estoque");
        const resultado = document.getElementById("resultado");
    
        if (!produto) {
          resultado.textContent = "Por favor, selecione um produto.";
          return;
        }
    
        if (quantidade <= 0 || isNaN(quantidade)) {
          resultado.textContent = "Quantidade inválida.";
          return;
        }
    
        let estoqueAtual = parseInt(estoqueInput.value);
        let novoEstoque = estoqueAtual + quantidade;
    
        estoqueInput.value = novoEstoque;
        resultado.textContent = `Foram adicionados ${quantidade} unidades de "${produto}". Novo estoque: ${novoEstoque}.`;
      }//acessar o campo qtd e guardar esse valor

    //acessar a lista estoque na posicao escolhida pelo usuario e vai somar com a qtd
}