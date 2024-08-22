
//(max numero mayor- min numero menor + 1 para que se incluyan el total de decimales) ) + min se suma en valor mas bajo para garantizar estar en el rango; 
const adivinaNumero= Math.floor(Math.random()*(10 -0 +1)+0);
let chance ="";
let acerto = false;


//for (inicialización; condición; incremento)
for(let contador= 0; contador< 3; contador++){
    chance = prompt ("adivina un numero del 1 al 10 y tienes 3 intentos disponibles");
    if(chance  ==  adivinaNumero){
        alert(`¡felicidads, acertaste el numero era ${adivinaNumero} !.`);
        acerto= true;
        break;
    }
    alert ("¡incorrecto!");
}
//! es el operador lógico de negación. Si acerto es false, 
 if(!acerto){
    alert (`no acertaste, el numero era ${adivinaNumero}`);
 }