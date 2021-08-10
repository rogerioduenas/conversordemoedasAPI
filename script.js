const select = document.getElementById("moedas")


let url = "https://economia.awesomeapi.com.br/json/all"

function converter() {
    let input = document.getElementById("valor")
    let valor = input.value;
   

    fetch(url).then((res) => {
        return res.json()
    })
    .then((data) => {
        
            const dolar = data.USD.high;
            let USD = (valor / dolar)
            let BRLUSD = `${valor} reais é equivalente há \u{1F4B5} ${USD.toFixed(2)} dolares`
            document.getElementById("real/dolar").innerHTML= BRLUSD

            const euro = data.EUR.high;
            let EUR = (valor / euro)
            let BRLEUR = `${valor} reais é equivalente há \u{1F4B6} ${EUR.toFixed(2)} euros`
            document.getElementById("real/euro").innerHTML= BRLEUR

            const libra = data.GBP.high;
            let GBP = (valor / libra)
            let BRLGBP = `${valor} reais é equivalente há \u{1F4B7} ${GBP.toFixed(2)} libras`
            document.getElementById("real/libra").innerHTML= BRLGBP

            let BRdolar = (dolar * valor)
            let USDBRL = `${valor} dolares é equivalente há \u{1F4B8} ${BRdolar.toFixed(2)} reais`
            document.getElementById("dolar/real").innerHTML= USDBRL

            let BReuro = (euro * valor)
            let EURBRL = `${valor} euro é equivalente há \u{1F4B8} ${BReuro.toFixed(2)} reais`
            document.getElementById("euro/real").innerHTML= EURBRL

            let BRlibra = (libra * valor)
            let GBPBRL = `${valor} libras é equivalente há \u{1F4B8} ${BRlibra.toFixed(2)} reais`
            document.getElementById("libra/real").innerHTML= GBPBRL
    })
}

