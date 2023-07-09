function hasEven(myNums: number[]):void{
    
    let contador = 0;
    while (contador < myNums.length){
          
        if(myNums[contador] % 2 == 0){
            console.log(myNums[contador]);
        }

        contador++;
    }   
}

let numVariados = [1,2,3,4,5,6,7,8,9,10,11];
hasEven(numVariados);


function starWithM(myNames: string[]):void{

    let finArray = 0;
    let cumpleCondicion = true;
    while (finArray < myNames.length && cumpleCondicion){
        
        if(!myNames[finArray].startsWith('M')){
            cumpleCondicion = false;
        }
        finArray++;
    }

    if(cumpleCondicion){
        console.log("Todos cumplen");
    }
}

let nombres = ["Mara", "Maria", "Juana", "Mariano"];
starWithM(nombres);