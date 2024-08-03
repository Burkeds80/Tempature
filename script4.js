// for(let i=o;i<=100;i+=10){
 //   console.log(i);
//}


function multiTable(){
    let num = Number(promt("Enter the mult table:"));
    let start = Number(promt("Enter the start num:"));
    let stop = Number(promt("Enter the stop num"));
    for(let i=start;i<==stop;i++){
        console.log(${i} x ${num} = ${i*num});
    }
}

function challenge(){
    let num = Number(promt("Enter the number:"));
    for(let i=0;i<=100;i++){
        if(num==1){
            console.log("I found it");
        }else{
            console.log(i);

        }
    }
}

let ages=[22,35,20,43,37,33,51,27]; 

function practice(){
    let total=0;
    for(let i=0;i<ages.length;i+++){
        total=ages[i];
        
    }
    console.log(total);
    console.log(total/ages.length);
}