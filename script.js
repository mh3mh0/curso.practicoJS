//Codigo del cuadrado
console.group("cuadrados");
// const ladoCuadrado = 5;
// console.log("los lados del cuandrado: " + ladoCuadrado + " cms");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cms");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el area del cuadrado es: " + areaCuadrado + " cms^2");

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo mide: " + alturaTriangulo + "cms");
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("perimetro del triangulo es : " + perimetroTriangulo + "cms");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("el area del triangulo es: " + areaTriangulo + " cms^2");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//codigo circulo
console.group("circulo");
//radio
// const radioCirculo = 4;
// console.log("el radio del circulo es: " + radioCirculo + " cms");

//diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("el diametro del circulo es: " + diametroCirculo + " cms");
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log("el PI del circulo es:" + PI);

//circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("el perimetro del circulo es: " + perimetroCirculo + " cms");
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//area
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("el area del circulo es: " + areaCirculo + " cms^2");
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();
