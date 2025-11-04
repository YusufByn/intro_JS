// 11) countVowels(str)   Compte et retourne le nombre de voyelles dans la chaîne.

function countVowels(str) {


let count = 0;
const voyelles = ["a","e","i","o","u"]
  
  for (let i = 0; i < str.length; i++){
    if (voyelles.includes(str[i])){
        count++;
        }      
    }
        return count
}

console.log(countVowels("yusuf"));
console.log(countVowels("Crypt"));
console.log(countVowels("william"));
