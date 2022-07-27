let numero=prompt("Ingresa un numero (ESC para salir)");
let sumaNumeros=0;
while(numero.toLowerCase() != "esc"){
    sumaNumeros=sumaNumeros+ parseInt(numero);
    console.log("la suma de numeros es de:" + Number(sumaNumeros))
    numero=prompt("Ingresa un numero (ESC para salir)");
}