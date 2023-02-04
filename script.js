const submit = document.getElementById ('submitt')

function contar() {
    let inicio = document.getElementById ('inicio')
    let contador = document.getElementById ('contador')
    let fim = document.getElementById ('fim')
    let resp = document.getElementById ('resp')

    if (inicio.value.lenght == 0 || contador.value.lenght == 0 || fim.value.lenght == 0) {
        alert('Preencha todos os campos')
    } 
    
    else {
        resp.innerHTML = 'Contando'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let c = Number(contador.value)

        for (let cont = i; cont <= f; cont += c) {
            resp.innerHTML += ` ${cont} `
        }

    }
}

submit.addEventListener('click', contar)
