// Check if a word is a Palindrome or not.

let chkPal=function (){
    let word='abaa';
    let rword = '';
  let arr = [];
    for (let i = 0; i < word.length; i++) {
    arr.push(word[i])
  }
  //console.log(arr);
  
  for (let i = 0; i < word.length; i++) {
    rword += arr.pop()
    //console.log(rword)
  }
 if(word==rword){
    document.getElementById('show').innerHTML=`${word} is a Palindrome`;
 } else{
    document.getElementById('show').innerHTML=`${word} is not a Palindrome`;
 }
 

 
  }
  chkPal();