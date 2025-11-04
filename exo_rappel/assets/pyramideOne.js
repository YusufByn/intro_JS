//exo7
// 1
// 12
// 123
// 1234
// 12345
// 123456

let current = ""; // chaîne vide. Servira à construire chaque ligne de la pyramide
let result = ""; // servira à stocker toutes les lignes cumulées

for (let i = 1; i <= 6; i++) {  // 123456
    // console.log(i);
    current = current + i; // on ajoute a current + i chaque tour. Donc 1 puis 2 (12) puis 3(123)...
    // console.log(current);
    result = result + current + "\n"; // on ajoute a result la valeur de current a chaque tour avec un \n. donc 1\n, 1\n 12\n 123\n
    // console.log(result);


}
// document.getElementById("pyramide").textContent = current;
document.getElementById("pyramideOne").textContent = result;