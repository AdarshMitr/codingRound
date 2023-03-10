// Find the factorial of a number.

function factorial(x){
    if(x==0){
        return 1;
    } else if(x>0){
        //recursive function
        return x*factorial(x-1)
        
    }else{
        return 'Type a positive number'
    }
}
let result=factorial(6);
console.log(result)

document.getElementById('show').innerHTML=result;