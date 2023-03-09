// Rotating the array in left by two places.

const input=[2,7,11,4,-2,];
const output=[11,4,-2,2,7];



function rotateArr(input){
    let result=[];
    for(let i=2;i<input.length;i++){
        
        result.push(input[i]);
        console.log(result)
    }
    for(let i=0;i<2;i++){
        
        result.push(input[i]);
        console.log(result)
    }
    
    return result;
}

console.log(rotateArr(input));


document.getElementById('show').innerHTML=rotateArr(input);