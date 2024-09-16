var calculo = 0

function pegar(v){
    if(v != "="){
        calculo += v
        document.getElementById("tela").innerHTML = calculo
    }else{
        var x = eval(calculo)
        
        var y = parseFloat(x).toString(2)
        calculo+="="+y
        document.getElementById("tela").innerHTML = calculo
    }
}

function limpar(){
    document.getElementById("tela").innerHTML = "0"
    calculo = 0
}
