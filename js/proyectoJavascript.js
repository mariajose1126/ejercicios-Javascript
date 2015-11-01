
//Ejercicio #1 pág 64

var valores = [true, 5, false, "hola", "adios", 2];

var uno=valores[3];
var dos=valores[4];


console.log (uno==dos);
console.log (uno!=dos);
console.log (uno===dos);
console.log (uno>dos);
console.log (uno<dos);

//Ejercicio #2 pág 64


var valores = [true, 5, false, "hola", "adios", 2];

var uno=valores[0];
var dos=valores[2];

console.log(uno&&dos);
console.log(uno||dos);

//Ejercicio #3 pág 64



var valores = [true, 5, false, "hola", "adios", 2];

var uno=valores[1];
var dos=valores[5];

console.log(uno+dos);
console.log(uno-dos);
console.log(uno*dos);
console.log(uno/dos);
console.log(uno%dos);

//Ejercicio #1 pág 72

var numero1=5;
var numero2=8;

if(numero1<numero2){
  alert("numero1 no es mayor que numero2");
}

if(numero2>=0){
  alert("numero2 es positivo");
}

if(numero1!==0){
  alert("numero1 es negativo o distinto de cero");
  
}

if(numero1++){
  alert("incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero 2");
  
}


//Ejercicio# 1 pag. 73

console.log("valor 1");
var valor1=prompt();
console.log("valor 2");
var valor2=prompt();

function maximo(){
  if (valor1 < valor2) {
   console.log ("El valor máximo es" + valor2);
}else if (valor1 > valor2) {
  console.log("El valor máximo es " + valor1);
}else if (valor1 === valor2) {
  console.log("Ambos números son iguales");
}

}

maximo();

//Ejercicio #2 pág 73

console.log("Ingrese un valor 1");
var valor1=prompt();
console.log("Ingrese un valor 2");
var valor2=prompt();
console.log("Ingrese un valor 3");
var valor3=prompt();

function maximo(){
  if (valor1 == valor2 || valor2==valor3) {
   console.log ("No juegues conmigo, ingresa valores distintos");
}
  else if(valor1>valor2 && valor1>valor3){
    if(valor1>valor2)
      console.log("El mayor numero es " + valor1);
  }
  
  else if(valor2>valor1 && valor2>valor3){
    console.log("el mayor numero es " + valor2);
  }
  
  else{
   
    console.log("el mayor numero es " + valor3);
  }
}

maximo();


//Ejercicio #3 pág. 73


alert("Dame una vocal");
var valor1=prompt();

function vocales(){

if(valor1 === "a") {
    console.log("Esta es la " + valor1);
} else if (valor1 === "e") {
    console.log("Esta es la " + valor1);
} else if (valor1 === "i") {
    console.log("Esta es la " + valor1);
} else if (valor1 === "o") {
    console.log("Esta es la " + valor1);
} else if (valor1 === "u") {
    console.log("Esta es la " + valor1);
}else {
    console.log("No has ingresado una vocal");
}
}

vocales();

//Ejercicio #1 pág 74

var valores=[5,5,5];

function producto(){
  var a= valores[0];
  var contador= 1;
  var total=0;
  
  for(var i=0; i< valores; i++);{
    total+=a[i];
  }
  console.log("El valor total del arreglo es " + total);
}

//otra solución

var s=new 
Array(3,7,7);
r=0; 
for(var q=0;q<s.length;q++) {r+=s[q];} 
alert(r); 