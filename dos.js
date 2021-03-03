function mostrar()
  {
    let nombre;
    let situaciónLaboral;
    let cantMaterias;
    let sexo;
    let nota;
    let edad;
    let contadorPromedioTrabaja;
    let contadorPromedioBusca;
    let contadorPromedioSoloEstudia;
    let acumPromedioTrabaja;
    let acumPromedioBusca;
    let acumPromedioSoloEstudia;
    let promedioTrabaja;
    let promedioBusca;
    let promedioSoloEstudia;
    let mejorPromedioSoloEstudia;
    let maxViejoNombreSoloEstudia;
    let maxViejoSoloEstudiNombrea;
    let edadminMateria;
    let nombreminMateria;
    let minMateria;
    let flagMejorSoloEstudia = 1;
    let flagEstudianteViejoSoloEstudia = 1;
    let flagAcumSoloEstudia = 1;
    let flagAcumTrabaja = 1;
    let flagAcumBusca = 1;
    let mejorEstudianteSoloEstudia;
    let seguir;
    contadorPromedioTrabaja = 0;
    contadorPromedioBusca = 0;
    contadorPromedioSoloEstudia = 0;

    do{
        nombre = prompt("Ingrese su nombre");
        situaciónLaboral = prompt("Ingrese situación laboral, buscando/trabajando/solo estudiante");
        while (situaciónLaboral != "buscando" && situaciónLaboral != "trabajando" && situaciónLaboral != "solo estudiante") {
            situaciónLaboral = prompt("Error, ingrese tipo, buscando/trabajando/solo estudiante");
        };
        sexo = prompt("Ingrese sexo, masculino/femenino/no binario");
        while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
            sexo = prompt("Error, ingrese sexo, masculino/femenino/no binario");
        };
        cantMaterias = parseInt(prompt("¿Cuántas materias da?"));
        while (cantMaterias >= 8 || cantMaterias <= 0) {
            cantMaterias = parseInt(prompt("ERROR. ¿Cuántas materias da?"));
        };
        nota = parseInt(prompt("¿Cuál es su nota?"));
        while (nota > 10 || nota < 0) {
            nota = parseInt(prompt("ERROR. ¿Cuál es su nota?"));
        };
        edad = parseInt(prompt("¿Cuál es su edad?"));
        while (isNaN(edad) || edad <= 0) {
            edad = parseInt(prompt("ERROR. ¿Cuál es su edad?"));
        };
            switch (situaciónLaboral) {
                case "buscando":                    
                    if(isNaN(minMateria)){
                      minMateria = cantMaterias;
                      nombreminMateria = nombre;
                      edadminMateria = edad;
                  }else if(minMateria < cantMaterias){
                      minMateria = cantMaterias
                      nombreminMateria = nombre;
                      edadminMateria = edad;}

                      if(flagAcumBusca){
                        acumPromedioBusca = nota
                    }else{
                        acumPromedioBusca += nota
                    }
                      contadorPromedioBusca++;

                      break;
                case "trabajando":
                    if(flagAcumTrabaja){
                        acumPromedioTrabaja = nota
                    }else{
                        acumPromedioTrabaja += nota
                    }
                  contadorPromedioTrabaja++;
                    
                    break;
                case "solo estudiante":
            //a)
                if (flagMejorSoloEstudia){
                  mejorPromedioSoloEstudia = nota;
                  mejorEstudianteSoloEstudia = nombre;

              }else if(nota > mejorPromedioSoloEstudia){
                  mejorPromedioSoloEstudia = nota;
                  mejorEstudianteSoloEstudia = nombre;
              }
              if (flagEstudianteViejoSoloEstudia){
                maxViejoSoloEstudiNombrea = edad;
                maxViejoNombreSoloEstudia = nombre;

            }else if(edad > maxViejoSoloEstudiNombrea){
                maxViejoSoloEstudiNombrea = edad;
                maxViejoNombreSoloEstudia = nombre;
            }
            if(flagAcumSoloEstudia){
                acumPromedioSoloEstudia = nota
            }else{
                acumPromedioSoloEstudia += nota
            }
              contadorPromedioSoloEstudia++;
              break;
                }

        seguir = prompt("¿Quiere continuar s/n?")


    }while(seguir == "s")

    promedioBusca = acumPromedioBusca / contadorPromedioBusca;
    promedioTrabaja = acumPromedioTrabaja / contadorPromedioTrabaja;
    promedioSoloEstudia = acumPromedioSoloEstudia / contadorPromedioSoloEstudia;
    if(contadorPromedioSoloEstudia == 0){
        promedioSoloEstudia = "No hubo estudiantes que solo estudien"
    }
    if(contadorPromedioBusca == 0){
        promedioBusca = "No hubo estudiantes que buscaran trabajo"
    }
    if(contadorPromedioTrabaja == 0){
        promedioTrabaja = "No hubo estudiantes que trabajaran"
    }
    
    if(contadorPromedioSoloEstudia != 0){

        console.log(`El nombre del alumno con mejor promedio que no busca trabajo ni trabaja es: ${mejorEstudianteSoloEstudia}`);
        console.log(`El nombre del alumno más viejo que sólo estudia es:${maxViejoNombreSoloEstudia}`);
    }else(console.log("No hubo estudiantes que sólo estudien"))
    console.log(`El promedio de nota de alumnos que buscan trabajo es ${promedioBusca}, para alumnos que trabajan es ${promedioTrabaja} y para solo estudiantes es ${promedioSoloEstudia}`);
    if(contadorPromedioBusca != 0){
        console.log(`El nombre del alumno con menos materias y que busca trabajo es ${nombreminMateria} y su edad es ${edadminMateria}`);
    }else(console.log("No hubo estudiantes que busquen trabajo"))
}

/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
Curso de ingreso UTN FRA
*/