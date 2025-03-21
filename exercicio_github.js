//1

let nome = 'joao'
let num = 42
let aluno = true

typeof(nome)
typeof(num)
typeof(aluno)

//2
let nota1 = 4
let nota2 = 7
let nota3 = 9
let situacao = "em_analise"
if(((nota1+nota2+nota3)/3) > 7){
  situacao="aprovado"
}else{
  situacao="reprovado"
}

//3
let chuva = true
if (chuva = true) {
console.log("Precisa de guarda-chuva");
}
else {
  console.log("Não precisa de guarda-chuva");
}

//4
let num= 5
console.log(num*2)




//5
let idade= 23
if(idade>=18){
  console.log("Você é maior de idade")
} else{
  console.log("Você é menor de idade")
}


//6
const saudacao = function(nome){
  console.log(`Olá, ${nome}, como você está hoje?`);
};
saudacao("Ana");
