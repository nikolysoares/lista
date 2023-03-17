var entrada12 = require("readline-sync");
var numero12 = parseFloat(entrada12.question(" debgite seu numero da sua conta:"));
var saldo = parseFloat(entrada12.question("digite seu atual saldo:"));
var debito = parseFloat(entrada12.question("digite seu debito:"));
var credito = parseFloat(entrada12.question("digite seu credito:"));
var total = (saldo + credito + debito);
if (total > 0) {
    console.log("seu saldo positivo e de : ", +total);
}
else {
    console.log("putz, seu saldo e negativo, voce tem :", +total);
}
