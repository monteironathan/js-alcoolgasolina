function calcularMelhorPreco(){

    // validar campos
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if ( precoAlcool != ""){
        if ( precoGasolina != ""){

            let resultado = precoAlcool / precoGasolina
            if( resultado >= 0.7 ){
                //alert("Melhor utilizar Gasolina")
                document.getElementById('resultado').innerHTML = "Melhor utilizar Gasolina"
            }else{
                //alert("Melhor utilizar Álcool")
                document.getElementById('resultado').innerHTML = "Melhor utilizar Álcool"
            }

        }else{
            alert("Preencha o preço da Gasolina")
        }
    }else{
        alert("Preencha o preço do Álcool")
    }
}