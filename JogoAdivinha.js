'use strict'
function receber() {
let aleatorio = Math.random() * 10;
let acertou = Math.round(aleatorio);
if (isNaN(numero.value)){
  postar.innerHTML = ('<b> Digita um número debimental !</b>');
}
 else if (numero.value == acertou ){
  postar.innerHTML = (`<b> Acertouuuu ! o número era ${acertou} !</b>`);
}else if (numero.value < acertou){
  postar.innerHTML = (`<b> Passou longeee ! o número que você chutou é menor que o número pensado ${acertou} !</b>`);
}else if(numero.value > acertou){
  postar.innerHTML = (`<b> Passou longeee ! o número que você chutou é maior que o número pensado ${acertou} !</b>`);
}
}
