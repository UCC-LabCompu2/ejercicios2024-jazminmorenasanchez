//EJERCICIO 1: CONVERSION DE UNIDADES
/**
 * conversion de unidades, de metros,yardas,pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el id de los imput de metros, yardas, pies y pulgadas
 * @param {number} valor - el valor de los imputs de metros, yardas, pies y pulgadas
 * @return
 */
function cambiarunidades(id,valor){
    var metro, pulgada, pie, yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if (id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if (id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    }else if (id=="yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
    }else if (id=="pie"){
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }
    document.lasunidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasunidades.unid_yarda.value = Math.round(yarda*100)/100;

}

//EJERCICIO 2: GRADOS A RADIANES

function convertirGR(id) {
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


//EJERCICIO 3: MOSTRAR/OCULTAR DIV

function mostarocultar(valormo) {
    if (valormo == "val_mostrar"){
        document.getElementById("divmo").style.display = 'block';
    }else if (valormo =="val_ocultar"){
        document.getElementById("divmo").style.display = 'none';
    }
}


//EJERCICIO 4: FUNCIONES MATEMATICAS

function calcularsuma() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
}
function calcularresta() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}

function calcularmul() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}

function calculardiv() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}


//EJERCICIO 5:
function cargarweb(){
    var cant, unidad, urlcomp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlcomp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}

function cargarresultado() {
    var urlcomp, can, un;

    urlcomp = window.location.href.split("/")[5];

    can = urlcomp.split("#")[1];
    un = urlcomp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}
//local storage

function guardarlocalstorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distancials", distancia);
    localStorage.setItem("unidadls", unidad);
    window.open('2_Web.html');
}

function cargarlocalstorage() {
    let cant, un;
    cant = localStorage.getItem("distancials");
    un = localStorage.getItem("unidadls");
    document.getElementById("dist").value = cant + " " + un;
}

// canvas

function dibujarcircua() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xmax = canvas.width;
    var ymax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#339";
    ctx.fillRect(0+margen, ymax-40-margen, 40, 40);

    ctx.arc(xmax/2, ymax/2, 20, 0 ,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#300";
    ctx.fill()

}

//mini-paint
var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx, posy);

    canvas.onmousedown = function(){bandera = true};
    canvas.onmouseup = function(){bandera = false};

    if(bandera) {
        ctx.fillRect(posx, posy, 5, 5);
        ctx.fill;
    }
}
function limpiarcanvas() {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}