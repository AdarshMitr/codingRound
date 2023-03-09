// Find the first missing Odd number in the array.

const input=[5,7,9,11,15,17];
const output=13;
function findMissingOdd(input){
    let missingFirstOdd=input[0];
    for(let i=0;i<input.length;i++){
        let temp=input[i]+2;
        if(temp!=input[i+1]){
            missingFirstOdd=temp;
            break;
        }
    }
    return missingFirstOdd;
    
}
console.log(findMissingOdd(input));


document.getElementById('show').innerHTML=findMissingOdd(input);