const Numero1 = document.getElementById(id="Numero1")
const Operador = document.getElementById(id="Operador")
const Numero2 = document.getElementById(id="Numero2")
const botonCalcular = document.getElementById(id="calcular")
const Resultado = document.getElementById(id="resultado")
botonCalcular.addEventListener("click",calcular)

function calcular(){
    
    const op= Operador.value
    const num1=parseFloat(Numero1.value)
    const num2=parseFloat(Numero2.value)

    if(op == "+"|| op == "-" ||op == "*" || op == "/"  ){
        if(!isNaN(num1) && !isNaN(num2)  ){
            let resultado
            switch(op){
                case"+":
                    resultado=num1+num2
                    break;
                case"-":
                    resultado=num1-num2
                    break;
                case"*":
                    resultado=num1*num2
                    break;
                case"/":
                    resultado=num1/num2
                    break;
            }
            Resultado.innerText= resultado
        }else{
            Resultado.innerText= "Tienes que tener un numero"
        }
    }else{
        Resultado.innerText= "Tienes que tener un operador valido"
    }

}