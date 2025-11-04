// 15) findIndex(arr, value)   
//  Retourne l’index de value dans le tableau (ou -1 si absent), sans .indexOf().

//  en gros trouver la position d’une valeur dans un tableau


// on déclare une fonction findIndex qui acceptent 2 paramètres 
// arr (tableau) et value qui est bah la valeur 


function findIndex(arr, value) {

    let errorMsg = "j'ai pas trouvé, je crois que y'a pas";

    // boucle for ou on initialise index à 0, on incrémente i de 1 par 
    // rapport a la longueur du tableau genre le nombre d'élèments
    for (let i = 0; i < arr.length; i++) {

        // si un élèment du tableau est strictement égal à la valeur qu'on tape/recherche
        if (arr[i] === value) {

        // on return l'index
        return i;

        }
    }

    // si on a fini la boucle sans trouver la valeur, on retourne -1 (ici errormsg)
    return errorMsg
}


console.log(findIndex([1, 2, 3]));

console.log(findIndex([1, 2, 3], 5));

console.log(findIndex([1, 2, 3], 3));

console.log(findIndex([1, 2, 3, 4, 23], 23));

console.log(findIndex(["salut", "toto", "tata", "titi", "tutu"], "tutu"));