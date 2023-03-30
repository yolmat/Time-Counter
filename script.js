let data = new Date
const valueData = document.querySelector('#inputData')
const btn = document.querySelector('#btnStart')

let array = []

function datas() {
    const valor = valueData.value
    return valor
}

function datas1() {
    let array = datas().split("-")
    return array
}

// btn.addEventListener('click', testes1)

function testes() {

    let dia = datas()

    console.log(dia[0])

    console.log(datas1()[0])

    var inicio = new Date().getTime()

    var fim = new Date(datas1()[0], datas1()[1], datas()[2]).getTime();

    var decorrido = fim - inicio;

    let days = Math.floor(decorrido / (1000 * 60 * 60 * 24))
    let hours = Math.floor((decorrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((decorrido % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((decorrido % (1000 * 60)) / 1000)

    document.getElementById('time').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    setInterval(testes, 1000)
}

btn.addEventListener('click', testes)