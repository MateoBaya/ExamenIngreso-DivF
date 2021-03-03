function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;
    let seguir;
    const PRECIO = 600;
    let contadorOSDEsViejos;
    let contadorPasajeros;
    let contadorpasajerosPAMI;
	let MujerJovenPami;
	let NombreMujerJovenPami;
	let TemperaturaMujerJovenPami;
	let flagMujerJovenPami = 1;
    let precioSubtotal;
    let porcentajes;
    let precioFinal;
	contadorOSDEsViejos = 0;
    contadorPasajeros = 0;
    contadorpasajerosPAMI = 0;

    do{
        nombre = prompt("¿Cuál es tu nombre?");
		edad = parseInt(prompt("¿Cuál es tu edad?"));
        while (isNaN(edad) || edad < 18) {
            edad = parseInt(prompt("ERROR. Los menores de edad no viajan ¿Cuál es su edad?"));
        };
		sexo = prompt("¿Cuál es tu sexo? m/f");
        while (sexo != "m" && sexo != "f") {
        	sexo = prompt("Error, ingrese sexo, m/f");
		}
		obraSocial = prompt("¿Cuál es tu obra social? OSDE/PAMI/otras");
        while (obraSocial != "OSDE" && obraSocial != "otras" && obraSocial != "PAMI") {
            obraSocial = prompt("Error, ingrese estado civil correcto, OSDE/PAMI/otras");
		}
		temperatura = parseInt(prompt("¿Cuál es tu temperatura corporal?"));
		while (isNaN(temperatura) || temperatura < 0) {
            temperatura = parseInt(prompt("ERROR. Su temperatura no es número o es menor a 0 ¿Cuál es su temperatura?"));
        };


		switch (obraSocial) {
			case "OSDE":

				if(edad > 60){
					contadorOSDEsViejos++;
				}
				break;
			case "PAMI":
				if(sexo == "f"){
					if(flagMujerJovenPami){
						MujerJovenPami = edad;
						NombreMujerJovenPami = nombre;
						TemperaturaMujerJovenPami = temperatura;
					}else if(MujerJovenPami > edad){
						MujerJovenPami = edad;
						NombreMujerJovenPami = nombre;
						TemperaturaMujerJovenPami = temperatura;
					}
				}
				contadorpasajerosPAMI++;
				break;
		}
        
        contadorPasajeros++;
        seguir = prompt("¿Quiere agregar más pasajeros? s/n");
    }while(seguir == "s");

    precioSubtotal = contadorPasajeros * PRECIO;
    porcentajes = contadorpasajerosPAMI*100 / contadorPasajeros;
    precioFinal = precioSubtotal - precioSubtotal*0.25
    if(isNaN(contadorOSDEsViejos)){
        contadorOSDEsViejos = 0
    }
    console.log(`Hay ${contadorOSDEsViejos} mayores de 60 años con OSDE`);
    console.log(`La mujer más joven con PAMI es ${NombreMujerJovenPami} con ${TemperaturaMujerJovenPami} de temperatura`);
    console.log(`El viaje sin descuento cuesta ${precioSubtotal}$`);
    if(porcentajes > 50){
        console.log(`El precio final con descuento, por tener más de un 50% de mayores de 60 es: ${precioFinal}`)
    }
}
/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con PAMI mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
