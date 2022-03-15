

let  asignarTrabajo =(nombre,planeta,estatura,edad, callback)=>
    
    setTimeout(function(){
    let estudiante={
        nombre:"",
        edad:0,
        planeta:"oriom",
        estatura:"1.80"
    } 
    nombre="sharyt"
    edad=18
    console.log(`el padawan ${nombre}, del planeta ${planeta}, estatura de ${estatura} y ${edad} de edad`)
    if(edad<=15){
        console.log(`el padawan tiene asignado el manejo de la fuerza`) 
        callback() 
    }
    else{
        console.log(`tiene asignado el mandejo del sable de luz`)
        
    } 
    
    },10000)

asignarTrabajo()