// 7) Fonction qui retourne le plus grand des deux nombres a et b

function max2(a, b) {
    let errorNumber = "Mettez des nombres"; 

    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return errorNumber
    }
}

console.log(max2(5, 10));
console.log(max2(12, 5));
console.log(max2());