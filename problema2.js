let robarPlanos=(idplano,callback)=>
    idplano=11
    if(idplano<=10){
        console.log("houston hemos despegado")
        callback()
    }
    else{
        console.log("houston tenemos un problema")
        
    }
    

robarPlanos()