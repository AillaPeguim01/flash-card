criaCartao(
    'História',
    'Em que ano a Segunda Guerra Mundial começou??',
    'No ano de 1939'
)

criaCartao(
    'Português',
    'Quem escreveu Dom Casmurro??',
    'Foi o Machado de Assis'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'Paris'
)

criaCartao(
    'Quimica',
    'Atualemte, quantos elementos químicos a tabela peroódica possui?',
    '118 Elementos'
)







function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `
    container.appendChild(cartao)

}