document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessebilidade = document.getElementById('botao-acessibilidade')
    const opcoesAcessebilidade = document.getElementById('opcoes-acessibilidade')

    botaoAcessebilidade.addEventListener('click', function () {
        botaoAcessebilidade.classList.toggle('rotacao-botao')
        opcoesAcessebilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoAcessebilidade.getAttribute('aria-expanded') === 'true'
        botaoAcessebilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })


    const aumentaFonteBotao = document.getElementById('aumentar-fonte')
    const diminuiFonteBotao = document.getElementById('diminuir-fonte')

    const alternaConstrate = document.getElementById('alternar-contraste')

    let tamanhoAtual = 1

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtual += 0.1
        document.body.style.fontSize = `${tamanhoAtual}rem`
    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtual -= 0.1
        document.body.style.fontSize = `${tamanhoAtual}rem`
    })

    alternaConstrate.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})

ScrollReveal().reveal('#inicio', { delay: 250, reset: true })
ScrollReveal().reveal('#img-cabecalho', { delay: 250, reset: true })
ScrollReveal().reveal('#tropicalia', { delay: 250 })
ScrollReveal().reveal('#contato', { delay: 250, reset: true })
ScrollReveal().reveal('#galeria', { delay: 250, reset: true })

