document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = 'R$ 0'


function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade');
    let quantidadeInt = parseInt(quantidade.value);
    if (quantidadeInt <= 0){
        alert('Campo "Qtde" tem que ser maior que 0.');
        return;
    } else if(isNaN(quantidadeInt)){
        alert('Campo "Qtde" está vazio.');
        return;
    }
    let carrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total').textContent;
    
    let nomeProduto = produto.split('-')[0];
    let preçoProduto = produto.split('R$')[1];
    preçoProduto = parseInt(preçoProduto);
    let preçoFinalProduto = preçoProduto * quantidadeInt
  
    carrinho.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeInt}x</span> ${nomeProduto} <span class="texto-azul">R$${preçoFinalProduto}</span></section>`;

    valorTotal = parseInt(valorTotal.split('R$')[1]);
    valorTotal += preçoFinalProduto;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${valorTotal}</span>`;
    quantidade.value = ""
    console.log(preçoProduto, nomeProduto)
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').innerHTML = 'R$ 0'
}

