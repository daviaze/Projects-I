const notas = [5, 5.5, 6, 7, 8, 9, 2, 6.9]
const menores = nota => nota < 7
const mostrarnotas = notas.filter(menores)
console.log(mostrarnotas)