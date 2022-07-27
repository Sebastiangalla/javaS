let numero=parseInt(prompt("Ingresa un numero (-1 para salir)"));
let sumaNumeros=0;
while(numero!= -1){
    sumaNumeros=sumaNumeros+numero;
    console.log("la suma de numeros es de:" + Number(sumaNumeros))
    numero=parseInt(prompt("Ingresa un numero (-1 para salir)"));
}