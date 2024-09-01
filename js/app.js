function adicionar() {
    let produto = document.getElementById('produto').value.split(' - ')[0];
    let precoUnitario = document.getElementById('produto').value.split(' - ')[1].replace('R$', '');
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade==='') {
        quantidade = 1;
    }

    let precoFinal = parseFloat(precoUnitario) * parseInt(quantidade);

    let quebraDeLinha = document.createElement('br');

    let carrinho = document.querySelector('.carrinho__produtos__produto');
    let item = document.createElement('span');
    
    item.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${precoFinal}</span>`;
    if (carrinho.children.length >0) {
        carrinho.appendChild(quebraDeLinha);
    }
    carrinho.appendChild(item);
    document.getElementById('quantidade').value = '';

    let total = document.getElementById('valor-total').innerHTML.replace('R$', '');
    if (total==='') {
        total = 0;
    }
    let calcTotal = parseFloat(total) + parseFloat(precoFinal);
    let campoTotal = document.getElementById('valor-total');
    // campoTotal.innerHTML = `R$${calcTotal.toFixed(2).replace('.', ',')}`;
    campoTotal.innerHTML = `R$${calcTotal}`;
    
}

function limpar() {
    let carrinho = document.querySelector('.carrinho__produtos__produto');
    carrinho.innerHTML = '';
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = '';
    
}

let x = document.getElementById('valor-total').innerHTML;