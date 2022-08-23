let clicar = document.querySelector('button#enviar')
clicar.addEventListener('click', clicou)

function clicou() {
    let numero = document.querySelector('input#num')
    let num = Number(numero.value)
    let divisao01 = document.querySelector('div.res01')
    let divisao02 = document.querySelector('div.res02')
    divisao01.innerHTML = ``
    divisao02.innerHTML = ``
    if (num === 0) {
        window.alert('[Erro] Por favor, digite um número!')
    } else {
        for (let um = 1; um <= 5; um++) {
            divisao01.innerHTML += `<p>${num} x ${um} = ${num*um} </p>`
        }

        for (let dois = 6; dois <= 10; dois++) {
            divisao02.innerHTML += `<p>${num} x ${dois} = ${num*dois} </p>`
        }

    }
}