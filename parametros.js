function soma(numero1,numero2){
    return numero1 + numero2;
}

console.log(soma(5,7))
console.log(soma(-1280,1663))
console.log(soma(10346085,340582))

function nomeIdade(nome,idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Gabriel",28))

function multiplicao(numero1 = 1 ,numero2 = 1){
    return numero1 * numero2;
}
console.log(multiplicao(soma(4,5),soma(3,3)))
console.log(multiplicao(8))
