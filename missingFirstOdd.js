// Find the first missing Odd number in the array.

//for finding first missing number in an Arithmetic Progression

const input=[5,7,9,11,13,15,17,21];
let n=2;
const input1=[2,5,8,14,17]
//let n=3;

const output=13;
function findMissingOdd(input){
    let missingFirstOdd=input[0];
    for(let i=0;i<input.length;i++){
        let temp=input[i]+n;
        if(temp!=input[i+1]){
            missingFirstOdd=temp;
            break;
        }
    }
    return missingFirstOdd;
    
}



document.getElementById('show').innerHTML=findMissingOdd(input);
