function converter() {
    let input = document.getElementById("valor")
    let valor = input.value;


    fetch("https://economia.awesomeapi.com.br/json/all").then((res) => {
        return res.json()
    })
        .then((data) => {

            const dolar = data.USD.high;
            let USD = (valor / dolar)
            if (valor == 1) {
                let BRLUSD = `${valor} real é equivalente há \u{1F4B5} ${USD.toFixed(2)} dólares`
                document.getElementById("real/dolar").innerHTML = BRLUSD
            } else {
                let BRLUSD = `${valor} reais é equivalente há \u{1F4B5} ${USD.toFixed(2)} dólares`
                document.getElementById("real/dolar").innerHTML = BRLUSD
            }

            const euro = data.EUR.high;
            let EUR = (valor / euro)
            if (valor == 1) {
                let BRLEUR = `${valor} real é equivalente há \u{1F4B6} ${EUR.toFixed(2)} euros`
                document.getElementById("real/euro").innerHTML = BRLEUR
            } else {
                let BRLEUR = `${valor} reais é equivalente há \u{1F4B6} ${EUR.toFixed(2)} euros`
                document.getElementById("real/euro").innerHTML = BRLEUR
            }

            const libra = data.GBP.high;
            let GBP = (valor / libra)
            if (valor == 1) {
                let BRLGBP = `${valor} real é equivalente há \u{1F4B7} ${GBP.toFixed(2)} libras`
                document.getElementById("real/libra").innerHTML = BRLGBP
            } else {
                let BRLGBP = `${valor} reais é equivalente há \u{1F4B7} ${GBP.toFixed(2)} libras`
                document.getElementById("real/libra").innerHTML = BRLGBP
            }

            let BRdolar = (dolar * valor)
            if (valor == 1) {
                let USDBRL = `${valor} dólar é equivalente há \u{1F4B8} ${BRdolar.toFixed(2)} reais`
                document.getElementById("dolar/real").innerHTML = USDBRL
            } else {
                let USDBRL = `${valor} dólares é equivalente há \u{1F4B8} ${BRdolar.toFixed(2)} reais`
                document.getElementById("dolar/real").innerHTML = USDBRL
            }

            let BReuro = (euro * valor)
            if (valor == 1) {
                let EURBRL = `${valor} euro é equivalente há \u{1F4B8} ${BReuro.toFixed(2)} reais`
                document.getElementById("euro/real").innerHTML = EURBRL
            } else {
                let EURBRL = `${valor} euros é equivalente há \u{1F4B8} ${BReuro.toFixed(2)} reais`
                document.getElementById("euro/real").innerHTML = EURBRL
            }

            let BRlibra = (libra * valor)
            if (valor == 1) {
                let GBPBRL = `${valor} libra é equivalente há \u{1F4B8} ${BRlibra.toFixed(2)} reais`
                document.getElementById("libra/real").innerHTML = GBPBRL
            } else {
                let GBPBRL = `${valor} libras é equivalente há \u{1F4B8} ${BRlibra.toFixed(2)} reais`
                document.getElementById("libra/real").innerHTML = GBPBRL
            }

        })
}

