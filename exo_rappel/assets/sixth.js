// 6) Fonction qui verifie si pair ou impair

function isEven(n) {

    let pair = "pair";
    let impair = "impair";

    if (n % 2 == 0) {
        return pair
    } else {
        return impair
    }
}

console.log(isEven(6));
console.log(isEven(3));