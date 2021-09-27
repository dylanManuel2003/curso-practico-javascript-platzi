//Utilidades
const lista = [];

function cleanError (id) {
    const errors = document.getElementById(id).querySelectorAll('.error');
    for (e of errors) {
        e.innerHTML = '';
    }
}

function renderList(list) {
    const l = document.getElementById('listaElementos');
    l.innerHTML = '';

    list.forEach((element, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<strong>${index + 1} -</strong> ${element}`;

        l.appendChild(listElement);
    });
}

function addListNumber() {
    cleanError('secciones');
    const element = document.getElementById('inputPromedio');
    const value = parseInt(element.value);
    element.value = '';

    if (Number.isNaN(value) || value < 0) {
        e = document.getElementById('errorAddValue');
        e.innerHTML = 'Ingrese un valor válido para la lista de números';
        return false;
    }
    
    lista.push(value);
    renderList(lista);
}

function switchFormula() {
    const f = document.getElementById('formulaSelect').value;
    const btn = document.getElementById('btn-render');
    cleanError('secciones');
    switch (f) {
        case '1':
            btn.setAttribute('onclick', 'renderMediaAritmetica();');
            btn.innerText = 'Calcular Media Aritmetica'
            break;
        case '2':
            btn.setAttribute('onclick', 'renderMediaArmonica();');
            btn.innerText = 'Calcular Media Armonica'
            break;
        case '3':
            btn.setAttribute('onclick', 'renderMediaGeometrica();');
            btn.innerText = 'Calcular Media Geometrica'
            break;
        case '4':
            btn.setAttribute('onclick', 'renderModa();');
            btn.innerText = 'Calcular Moda'
            break;
        case '5':
            btn.setAttribute('onclick', 'renderMediana();');
            btn.innerText = 'Calcular Mediana'
            break;
    }
}

function checkList() {
    if (lista.length == 0) {
        e = document.getElementById('errorList');
        e.innerHTML = '<strong>Ingrese valores en la Lista.</strong>';
        return false;
    }
    return true;
}


//Funciones del promedio
function calcularMediaAritmetica(lista) {
    const sumaList = lista.reduce(
        (valorAcumulado, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }, 0
    );

    const mediaAritmetica = sumaList / lista.length;
    return parseFloat(mediaAritmetica.toFixed(2))
}

function renderMediaAritmetica() {
    if (checkList(lista)){
        const r = calcularMediaAritmetica(lista);
       
        const resultP = document.getElementById('ResultP');
        resultP.innerHTML = `La Media Aritmetica es: <strong class="unit"> ${r}</strong>`;
    }
}
//Funciones de media armonica
function calcularMediaArmonica (lista) {
    const sumaList = lista.reduce(
        (valorAcumulado, nuevoElemento) => valorAcumulado + (1 / nuevoElemento), 0
    );

    console.log(sumaList);

    const mediaArmonica = lista.length / sumaList;
    return parseFloat(mediaArmonica.toFixed(3));
}

function renderMediaArmonica() {
    if (checkList(lista)){
        const r = calcularMediaArmonica(lista);
       
        const resultP = document.getElementById('ResultP');
        resultP.innerHTML = `La Media Armonica es: <strong class="unit"> ${r}</strong>`;
    }
}


//funciones de media geometrica
function calcularMediaGeometrica (lista) {
    const multiplicacionList = lista.reduce(
        (valorAcumulado, nuevoElemento) => {
            return valorAcumulado * nuevoElemento;
        }
    );

    const mediaGeometrica = multiplicacionList ** (1/lista.length);
    return parseFloat(mediaGeometrica.toFixed(3));
}

function renderMediaGeometrica() {
    if (checkList(lista)){
        const r = calcularMediaGeometrica(lista);
       
        const resultP = document.getElementById('ResultP');

        resultP.innerHTML = `La Media Geometrica es: <strong class="unit"> ${r}</strong>`;
    }
}


//Funciones de la mediana
function esPar(value) {
    return value % 2 === 0 ? true : false; 
}

function calcularMediana (lista) {
    // Ordenamos la lista
    const listaOrdenada = lista.sort( 
        function(a, b) {
            return a - b;
        }
    )
    
    // Ubicamos elementos y calculamos
    const mitadLista = parseInt(listaOrdenada.length / 2);

    if (esPar(listaOrdenada.length)) {
        // dos elementos
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];

        const mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;

    } else {
        // un elemento
        const mediana = lista[mitadLista];
        return mediana;

    }
}

function renderMediana() {
    if (checkList(lista)){
        r = calcularMediana(lista);


        const resultP= document.getElementById('ResultP');
        resultP.innerHTML = `La Mediana es: <strong class="unit"> ${r}</strong>`;
    }
}

//moda
function calcularModa() {
    const listaCount = {};

    lista.map(
        function (e) {
            if (listaCount[e]) {
                listaCount[e] += 1;
            } else {
                listaCount[e] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1][0];
    return moda;
}

function renderModa() {
    if (checkList(lista)){
        const r = calcularModa();
       
        const resultP = document.getElementById('ResultP');
        resultP.innerHTML = `La Moda es: <strong class="unit"> ${r}</strong>`;
    }
}








