// 5) Fonction qui verifie si la valeur est positif, negative ou 0
function check(n) {

    let positive = "positif";
    let negative = "negatif";
    let zero = "zero";

    if (n>=1) {
        return positive
    } else if (n<0) {
        return negative
    } else {
        return zero
    }
}

console.log(check(4));
console.log(check(-1));
console.log(check(0));