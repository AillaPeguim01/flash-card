let totalAcertos = 0;
let totalErros = 0;

// Função responsável por virar e desvirar o cartão no clique
function virarCartao(cartaoElemento) {
  cartaoElemento.classList.toggle('virado');
}

// Função para contabilizar os pontos no placar
function marcarResposta(event, acertou) {

  // Impede que o clique no botão desvire o cartão ao mesmo tempo
  event.stopPropagation();

  const cartao = event.target.closest('.cartao');

  // Verifica se este cartão já foi respondido
  if (cartao.classList.contains('respondido')) {
    return;
  }

  // Marca o cartão como respondido
  cartao.classList.add('respondido');

  if (acertou) {

    totalAcertos++;

    document.getElementById('acertos').textContent = totalAcertos;

  } else {

    totalErros++;

    document.getElementById('erros').textContent = totalErros;
  }

  // Desvira o cartão após clicar no botão de resposta
  cartao.classList.remove('virado');

}