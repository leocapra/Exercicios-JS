let clicar = document.querySelector('button#enviar')
clicar.addEventListener('click', clicou)

function clicou() {
    let numero = document.querySelector('input#num')
    let num = Number(numero.value)
    if (num === 0) {
        window.alert('[Erro] Por favor, digite um número!')
    } else {
        num
    }
}