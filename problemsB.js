// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// function capitalize(str) {
//     let s='';
//     for(let i = 0; i < str.length; i++){
//         if(i == 0 || str[i - 1] == ' '){
//             s=s+str[i].toUpperCase();
//         }
//         else{
//             s=s+str[i];
//         }
//     }
//     return s;
// }
// let st = 'this is javascript';
// let res = capitalize(st);
// console.log(res);

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// function findjavascript(arr){
//     let A=[]
//     for(let i of arr){
//         if(i == 'javascript'){
//             A.push(true);
//         }else{
//             A.push(false);
//         }
//     }
//     return A;
// }
// let arr = ["java","python","c"]
// let res = findjavascript(arr)
// console.log(res)

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// function validemail(str){
   
//     if(str.includes('@') && (str.includes('.org') || str.includes('.com'))){
//         return true
//     }else{
//         return false
//     }
// }
// let st = 'puran@gmail.com'
// let res = validemail(st)
// console.log(res)

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thin
// 	output - false

// input - below, elbow
// 	output - true

// function anagrams(str1,str2){
   
//     for(let i of str1){
//         if(!(str2.includes(i))){
//             return false;
//         }
//     }
//     return true;
// }
// let st1 = 'night'
// let st2 = 'thin'
// let res = anagrams(st1,st2)
// console.log(res)

// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// function Reverse(str){
//     let s='';
//     for(let i=str.length-1; i >= 0; i--){
//         s=s+str[i]
//     }
//     return s;
// }
// let st = 'i am learning javascript'
// let res = Reverse(st)
// console.log(res)

// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

function wordbyword(str){
    let s='';
    k=str.length;
    for(let i=str.length-1; i >= 0; i--){
        if(str[i] == ' '){
            let a=str.slice(i+1,k)
            s=s+a+' ';
            k=i
        }
    }
    s += str.slice(0, k);
    return s;
}
let st = 'Success comes to those who work hard'
let res = wordbyword(st)
console.log(res)