// Preços dos produtos
const precos = {
    'parafuso': 0.5,     // Preço do parafuso
    'martelo': 25,       // Preço do martelo
    'chave de fenda': 10 // Preço da chave de fenda
};


const estoque = {
    "parafuso": 100,
    "martelo": 100,
    "chave de fenda": 100,

}

function calcularPreco() {
    // Obter o produto selecionado
    const produto = document.getElementById('produto').value;
    // Obter a quantidade inserida
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Verificar se o produto foi selecionado e se a quantidade é válida
    if (!produto || quantidade <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, selecione um produto e insira uma quantidade válida.';
        return;
    }

    // Calcular o preço total
    const precoTotal = precos[produto] * quantidade;
    
    // Mostrar o resultado

    document.getElementById('resultado').innerText = `Total: R$ ${precoTotal.toFixed(2)}`;
    if(
        
    )



}
