console.log("Se imprime mensaje en la consola");

function Num_1_al_10(){
    for (i=0;i<=10;i++){
        console.log(i);
    }
}
Num_1_al_10();
//-----------------------------------------------
// modulo, resto
let num1 = 10;
const num2 = 3;
resultado = num1 % num2;
console.log("Modulo ",resultado);

//Mi while
//Cada 3 numeros va a imprimir algo
num1 = 1;
rompe = false;
let contador = 0;
let llave = 0;
let intervalo = 3;
while (rompe == false){
    llave += 1;
    if (llave!=intervalo){
        console.log(num1,"no se cumple");
    }
    if (num1 == 40){
        rompe = true;
        break;
    }
    if (llave==intervalo){
        console.log(num1,"cada ",intervalo)
        llave =0;
        }
    num1=num1+1;
    
    }