//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Código del circulo
function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}

//PI
const PI = Math.PI;

//Código del rectangulo
function perimetroRectangulo(lado1, lado2) {
    return (lado1 * 2) + (lado2 * 2);
}

function areaRectangulo(lado1, lado2) {
    return lado1 * lado2;
}

//funciones para clacular cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    let perimetro = perimetroCuadrado(value);
    const resultP = document.getElementById("resultado_cuadrado");
    resultP.innerText = perimetro + "cm"; 
}
function calcularAreaCuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    let area = areaCuadrado(value);
    const resultP = document.getElementById("resultado_cuadrado");
    resultP.innerText = area + "cm2";
}

//funciones para clacular triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("input_triangulo--lado1");
    const input2 = document.getElementById("input_triangulo--lado2");
    const input3 = document.getElementById("input_triangulo--base");
    let perimetro = perimetroTriangulo(parseFloat(input1.value), parseFloat(input2.value), parseFloat(input3.value));
    const resultP = document.getElementById("resultado_triangulo");
    resultP.innerText = perimetro + "cm"; 
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("input_triangulo--base");
    const input2 = document.getElementById("input_triangulo--altura");
    let area = areaTriangulo(parseFloat(input1.value), parseFloat(input2.value));
    const resultP = document.getElementById("resultado_triangulo");
    resultP.innerText = area + "cm2"; 
}

//funciones para calcular circulo 
function calcularPerimetroCirculo() {
    const input = document.getElementById("input_circulo");
    value = input.value;
    const diametro = diametroCirculo(value);
    let perimetro = diametro * 2;
    const resultP = document.getElementById("resultado_circulo");
    resultP.innerText = perimetro + "cm"; 
}
function calcularAreaCirculo() {
    const input = document.getElementById("input_circulo");
    value = input.value;
    let area = (value * value) * PI;
    const resultP = document.getElementById("resultado_circulo");
    resultP.innerText = area + "cm2"; 
}

//funcion para calcular rectangulo
function calcularPerimetroRectangulo() {
    const ladoRectangulo1 = document.getElementById("input_rectangulo--lado1");
    const rectanguloValue1 = ladoRectangulo1.value;
    const ladoRectangulo2 = document.getElementById("input_rectangulo--lado2");
    const rectanguloValue2 = ladoRectangulo2.value
    const perRect = perimetroRectangulo(rectanguloValue1, rectanguloValue2);
    const resultP = document.getElementById("resultado_rectangulo");
    resultP.innerText = perRect + "cm";
}

function calcularAreaRectangulo() {
    const ladoRectangulo1 = document.getElementById("input_rectangulo--lado1");
    const rectanguloValue1 = ladoRectangulo1.value;
    const ladoRectangulo2 = document.getElementById("input_rectangulo--lado2");
    const rectanguloValue2 = ladoRectangulo2.value
    const areaRect = areaRectangulo(rectanguloValue1, rectanguloValue2);
    const resultP = document.getElementById("resultado_rectangulo");
    resultP.innerText = areaRect + "cm2";
}