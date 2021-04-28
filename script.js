const toDo =(tarea,duracion,callBack)=>{
    setTimeout(()=>{
        callBack(tarea);
    },duracion);   
}
/*

    Actividad 1: Levantarse. Duración: 5 segundos
    Actividad 2: tender la cama. Duración: 3 segundos
    Actividad 3: Bañarse. Duración: 3 segundos
    Actividad 5: Tomar clase de paradigmas. Duración: 5 segundos
    Actividad 6: Desayunar: Duración: 8 segundos
    Actividad 6: Jugar videojuegos: Duración: 10 segundos

 */

toDo("Levantarse",5000,(tarea)=>{
    console.log(`Realizando la tarea: ${tarea}`);
    toDo("Tender la cama",3000,(tarea)=>{
        console.log(`Realizando la tarea: ${tarea}`);
        toDo("Bañarse",3000,(tarea)=>{
            console.log(`Realizando la tarea: ${tarea}`);
            toDo("Tomar la clase de Paradigmas",5000,(tarea)=>{
                console.log(`Realizando la tarea: ${tarea}`);
                toDo("Desayunar",8000,(tarea)=>{
                    console.log(`Realizando la tarea: ${tarea}`);
                    toDo("jugar videojuegos",10000,(tarea)=>{
                        console.log(`Realizando la tarea: ${tarea}`);
                    });
                });
            });
        });
    });
});
