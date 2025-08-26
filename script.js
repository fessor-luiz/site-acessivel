document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessebilidade = document.getElementById('botao-acessibilidade')
    const opcoesAcessebilidade = document.getElementById('opcoes-acessibilidade')

    botaoAcessebilidade.addEventListener('click', function () {
        botaoAcessebilidade.classList.toggle('rotacao-botao')
        opcoesAcessebilidade.classList.toggle('apresenta-lista')
    })


    const aumentaFonteBotao = document.getElementById('aumentar-fonte')
    const diminuiFonteBotao = document.getElementById('diminuir-fonte')

    let tamanhoAtual = 1

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtual += 0.1
        document.body.style.fontSize = `${tamanhoAtual}rem`
    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtual -= 0.1
        document.body.style.fontSize = `${tamanhoAtual}rem`
    })
})