const entrada5 =require("readline-sync");
let numero: number=parseFloat(entrada5.question("digite o numero escolhido"));

console.log("teste")

if(numero % 2 == 0){
    console.log("par");
}
else{
    console.log("impar")
}

}