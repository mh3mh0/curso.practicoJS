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

// function perimetroTriangulo(lado1, lado2, base) {
//   return lado1 + lado2 + base;
// }
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("el area del triangulo es: " + areaTriangulo + " cms^2");

// function areaTriangulo(base, altura) {
//   return (base * altura) / 2;
// }

//codigo circulo

//radio
// const radioCirculo = 4;
// console.log("el radio del circulo es: " + radioCirculo + " cms");

//diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("el diametro del circulo es: " + diametroCirculo + " cms");
// function diametroCirculo(radio) {
//   return radio * 2;
// }

//PI
// const PI = Math.PI;
// console.log("el PI del circulo es:" + PI);

//circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("el perimetro del circulo es: " + perimetroCirculo + " cms");
// function perimetroCirculo(radio) {
//   const diametro = diametroCirculo(radio);
//   return diametro * PI;
// }

//area
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("el area del circulo es: " + areaCirculo + " cms^2");
// function areaCirculo(radio) {
//   return radio * radio * PI;
// }

//interactuando con HTML
//cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreacuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = areaCuadrado(value);
  alert(perimetro);
}
//cuadrado

//triangulo
console.group("triangulo2");

function perimetroTriangulo(lado1, lado2, base) {
  return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("lado1");
  const valueLado1 = input1.value;

  const input2 = document.getElementById("lado2");
  const valueLado2 = input2.value;

  const input3 = document.getElementById("base");
  const valueBase = input3.value;

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert("el perimetro del triangulo es de: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
  const base = document.getElementById("base");
  const valueBase = base.value;

  const altura = document.getElementById("altura");
  const valueAltura = altura.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}
//isosceles
function alturaTrianguloIsosceles(lado1, lado2, base) {
  if (lado1 == lado2 && lado1 != base) {
    alert("es isosceles");
    const cateto = (base / 2) ** 2;
    const hipotenusa = lado1 ** 2;
    const altura = Math.sqrt(hipotenusa - cateto);
    alert("la altura es de " + altura);
  } else {
    alert("no es isos");
  }
}
alturaTrianguloIsosceles(7, 7, 9);
//isosceles
console.groupEnd();
//triangulo

//circulo
console.group("circulo");
function PerimetroCirculo() {
  var radio = document.getElementById("RadioCirculo");
  var pi = Math.PI;
  var diametroC = parseInt(RadioCirculo.value) * 2;
  var perimetroC = diametroC * pi;
  alert(perimetroC);
}
function AreaCirculo() {
  var radio = document.getElementById("RadioCirculo");
  var pi = Math.PI;
  var areaC = parseInt(RadioCirculo.value) * parseInt(RadioCirculo.value) * pi;
  alert(areaC);
}
function DiametroCriculo() {
  var radio = document.getElementById("RadioCirculo");
  var diametroC = parseInt(RadioCirculo.value) * 2;
  alert(" el diametro del circulo es: " + diametroC);
}
console.groupEnd();
//circulo
