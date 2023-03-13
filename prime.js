//Find all prime numbers in the list
const list = [-23,-3,-5,0,45,21,2,5,7,19,27,29] ;

let PrimeList=list.filter(isPrime);
function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
}return n>1;
}

document.getElementById('show').innerHTML=PrimeList;
console.log(PrimeList)
