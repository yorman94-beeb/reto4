const adivinaNumero=5;
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
