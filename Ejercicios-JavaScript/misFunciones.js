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
