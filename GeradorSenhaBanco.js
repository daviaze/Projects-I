'use strict'

alert("Bem vindo ao seu gerador de senha de banco!!")

let resp = prompt("Deseja gerar uma senha ?")
if (resp == "sim") {
    function senha({ min = null, max = null }) {   //operador destructuring dentro da função, ele já vai retornar direto os valores
                                                   //ele já pega direto os valores do objeto valor e calcula sem precisar procurar
        const gerar = Math.random() * (max - min) + min
        return Math.floor(gerar)   //vai retornar o valor de gerar arredondado
    }
    const valor = { min: 1000, max: 9999 }   //objeto, cujos atributos estão sendo extraídos direto pela destructuring da function
    alert(`Sua senha é: ${senha(valor)}`)
} else {
    alert("Até mais, volte sempre!")
}