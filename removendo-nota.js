const notas = [10, 5, 7.5, 10];
//vamos usar a função pop(), para remover a última nota
notas.pop();
console.log(notas);

const media = (notas[0]+notas[1]+notas[2]) / notas.length;
console.log(`A media é ${media}`)