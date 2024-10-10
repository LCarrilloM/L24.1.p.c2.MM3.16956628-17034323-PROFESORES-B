/* 
En la Universidad se le paga a cada profesores un bono, sin embargo 
si es personal fijo tiene un sueldo y si es contratado tiene cantidad 
de horas, donde cada una se paga a $10. Considere que a todos los 
profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado 
heredan de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio 
anterior, lea los datos de un profesor contratado y reporte su ingreso total.

Ejemplos de la corrida:

Nombre del profesor contratado: Rafael
Monto del bono: $30
Cantidad de horas: 15
Ingreso total del profesor Rafael: $180

Nombre del profesor contratado: Felicia
Monto del bono: $30
Cantidad de horas: 20
Ingreso total del profesor Felicia: $230
*/

import Cl_profesor from "./Cl_profesor.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

export default class Cl_main{
    constructor (){
        let profesor = new Cl_profesor ();
        let contratado1 = new Cl_contratado ("Rafael", 30, 15);
        let contratado2 = new Cl_contratado ("Felicia", 30, 20);
        
    }
}

profesor.procesarcontratado(contratado1);
profesor.procesarcontratado(contratado2);

let salida=document.getElementById("salida");

salida.inner+=`<br> Nombre del profesor: ${contratado1.nombre}`;
salida.inner+=`<br> Monto del Bono $: ${contratado1.bono}`;
salida.inner+=`<br> Cantidad de Horas: ${contratado1.cntHoras}`;
salida.innerHTML+=`<br> Ingreso Total del profesor ${contratado1.nombre} : $ ${contratado1.IngesoTotal()}`;

salida.inner+=`<br> Nombre del profesor: ${fijo2.nombre}`;
salida.inner+=`<br> Monto del Bono $: ${fijo2.bono}`;
salida.inner+=`<br> Cantidad de Horas: ${fijo2.cntHoras}`;
salida.innerHTML+=`<br> Ingreso Total del profesor ${fijo2.nombre} : $ ${fijo2.IngesoTotal()}`;