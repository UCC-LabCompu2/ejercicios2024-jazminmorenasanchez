//EJERCICIO 1: CONVERSION DE UNIDADES
/**
 * conversion de unidades, de metros,yardas,pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - el id de los imput de metros, yardas, pies y pulgadas
 * @param {number} valor - el valor de los imputs de metros, yardas, pies y pulgadas
 * @return
 */
function cambiarunidades(id,valor){
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    }else if (id=="metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    }else if (id=="pulgada"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    }else if (id=="yarda"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    }else if (id=="pie"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda.value = 1.09361*valor;
    }
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
    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}
function calcularresta() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
}

function calcularmul() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
}

function calculardiv() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
}