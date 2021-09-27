//Helpers
function esPar(numero) {
    return (numero % 2 === 0); 
}

function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(
    spliceStar,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaTop10Col,
    medianaGeneralCol,
);