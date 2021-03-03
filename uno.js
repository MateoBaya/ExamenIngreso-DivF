
function mostrar()
{
	let nombreP;
	let precioP; 
	let cantidadP;
	let tipoP;
	let marcaP;
	let flagA = 1;
	let acumPromedioA;
	let contadorPromedioA;
	let promedioA;
	let flagI = 1;
	let acumPromedioI;
	let contadorPromedioI;
	let promedioI;
	let flagQ = 1;
	let acumPromedioQ;
	let contadorPromedioQ;
	let promedioQ;
	let contadorTipoLimpiezaAlcohol;
	let contadorTipoLimpiezaDesinfectante;
	let contadorTipoLimpiezaDetergente;
	let TipoLimpieza;
	let acumDetergenteMenos200 ;
	let flagMax = 1;
	let precioMax;
	let marcaMax;
	let tipoMax;
	acumDetergenteMenos200  = 0;
	contadorPromedioA = 0;
	contadorPromedioI = 0;
	contadorPromedioQ = 0;
	contadorTipoLimpiezaAlcohol = 0;
	contadorTipoLimpiezaDesinfectante = 0;
	contadorTipoLimpiezaDetergente = 0;
	for (let contadorVeces = 0; contadorVeces < 5; contadorVeces++) {
		nombreP = prompt("Ingrese tipo, ALCOHOL/IAC/QUAT");
		while (nombreP != "ALCOHOL" && nombreP != "IAC" && nombreP != "QUAT") {
			nombreP = prompt("Error, ingrese ALCOHOL/IAC/QUAT");
		};
		precioP = parseInt(prompt("Precio del producto"));
		while (precioP > 300 || precioP < 100) {
			precioP = parseInt(prompt("ERROR. Precio del producto"));
		};
		cantidadP = parseInt(prompt("Cantidad del producto"));
		while (cantidadP > 1000 || cantidadP <= 0) {
			cantidadP = parseInt(prompt("ERROR. Cantidad del producto"));
		};
		tipoP = prompt("Ingrese tipo, Bactericida/Desinfectante/Detergente");
		while (tipoP != "bactericida" && tipoP != "desinfectante" && tipoP != "detergente") {
			tipoP = prompt("Error, ingrese tipo, Bactericida/Desinfectante/Detergente");
		};
		marcaP = prompt("Ingrse nombre de la marca");
	//a)
		switch (nombreP) {
			case "ALCOHOL":
				contadorPromedioA++;
				if(flagA){
					acumPromedioA = cantidadP;
				}else{
					acumPromedioA += cantidadP;
				}
				break;
			case "IAC":
				contadorPromedioI++;
				if(flagI){
					acumPromedioI = cantidadP;
				}else{
					acumPromedioI += cantidadP;
				}
				break;
			case "QUAT":
				contadorPromedioQ++;
				if(flagQ){
					acumPromedioQ = cantidadP;
				}else{
					acumPromedioQ += cantidadP;
				}            
				break;
			}
	//b)
			switch (tipoP) {
				case "Bactericida":
					contadorTipoLimpiezaAlcohol++;
					break;
				case "Detergente":
					contadorTipoLimpiezaDetergente++;
					//c)
				if(precioP <= 200){
					acumDetergenteMenos200+=precioP;
				}
					break;
				case "Desinfectante":
					contadorTipoLimpiezaDesinfectante++;   
					break;
				}
				if(flagMax){
					precioMax = precioP;
					marcaMax = marcaP;
					tipoMax = tipoP;
				}else if(precioP > precioMax){
					precioMax = precio;
					marcaMax = marcaP;
					tipoMax = tipoP;
				}
			}
	//fuera del for

	//a
			promedioA = acumPromedioA / contadorPromedioA;
			promedioI = acumPromedioI / contadorPromedioI;
			promedioQ = acumPromedioQ / contadorPromedioQ;
	
	//b
			if (contadorTipoLimpiezaAlcohol > contadorTipoLimpiezaDetergente && contadorTipoLimpiezaAlcohol > contadorTipoLimpiezaDesinfectante) {
				TipoLimpieza = "Bactericida"
			}else if(contadorTipoLimpiezaDetergente >= contadorTipoLimpiezaAlcohol && contadorTipoLimpiezaDetergente > contadorTipoLimpiezaDesinfectante){
				TipoLimpieza = "Desinfectante"
			}else {
				TipoLimpieza = "Detergente"
			}

			console.log(`El promedio de ALCOHOL es ${promedioA}, el de IAC ${promedioI} y el de QUAT ${promedioQ}`);
			console.log(`El que más cantidad tenía era ${TipoLimpieza}`);
			console.log(`Eran ${acumDetergenteMenos200 } unidades`);
			console.log(`La marca más cara es ${marcaMax} y su categoría es  ${tipoMax}`);
}

/*
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/