/*Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: A=
suscripción $3, B= suscripción $5, C= suscripción $10; además el suscriptor debe pagar un 10%
adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye).
En este sentido, se desea conocer: 
a) precio a pagar por cada suscriptor.
b) porcentaje de suscriptores que no pagaron servicio de conexión.
c) cuál es el plan favorito.

La agencia manifiesta que el formato para la salida de los requerimientos solicitados es:
El suscriptor con cedula 15457858 paga 3.3$
El suscriptor con cedula 15457859 paga 5.5$
El suscriptor con cedula 15457667 paga 10$

Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33%
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C.
La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan):
(15457858, A) (15457859, B) (15457667, C)*/

import Cl_Agencia from "./Cl_Agencia.js";
import Cl_Subscriptor from "./Cl_Subscriptor.js";

let sub1=new Cl_Subscriptor(15457858, 'A');
let sub2=new Cl_Subscriptor(15457859, 'B');
let sub3=new Cl_Subscriptor(15457667, 'C');

let agencia = new Cl_Agencia();
agencia.procesarSubs(sub1);
agencia.procesarSubs(sub2); 
agencia.procesarSubs(sub3);

let salida = document.getElementById("salida");

salida.innerHTML = "Reporte";
salida.innerHTML += `<p>El suscriptor con cedula ${sub1.cedula} paga ${sub1.paga()}$</p>`;
salida.innerHTML += `<p>El suscriptor con cedula ${sub2.cedula} paga ${sub2.paga()}$</p>`;
salida.innerHTML += `<p>El suscriptor con cedula ${sub3.cedula} paga ${sub3.paga()}$</p>`;
salida.innerHTML += `<p>Porcentaje de suscriptores que no pagaron servicio de red: ${agencia.porcentaje().toFixed(2)}%</p>`;
salida.innerHTML += `<p>Cual es el plan favorito: ${agencia.favorito()}</p>`