// 4) Fonction qui check l'age/si majeur ou mineur
function isAdult(age) {

    let minor = "mineur";
    let major = "majeur";

    if(age >= 18) {
        return major
    } else {
        return minor
    }
}

console.log(isAdult(19));
console.log(isAdult(17));