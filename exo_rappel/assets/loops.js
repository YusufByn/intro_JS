// for (initialisation, (i = 0)/ condition (i <= 5/ incrémentation (i++)){

    // console.log(i);
    
// }




// sur le navigateur

// 1) 0123456789


let firstElement = document.getElementById('first');


for (i = 0 ; i <= 9; i++) {
    

    firstElement.innerHTML += i;
    
}

// 2) 9876543210

let secondElement = document.getElementById('second');

for (i = 9 ; i >= 0; i--) {

    secondElement.innerHTML += i;
}

// 3) 123456789

let thirdElement = document.getElementById('third');

for (let i = 1; i <= 9 ; i++) {
    
    thirdElement.innerHTML += i;
}


// 4) 0246810

let fourthElement = document.getElementById('fourth');

for (let i = 0; i <= 10 ; i = i + 2) {

    fourthElement.innerHTML += i;
}

// 5) 1086420

let fifthElement = document.getElementById('fifth');

for (let i = 10; i >= 0 ; i = i - 2) {

    fifthElement.innerHTML += i;
}

// 6) 12345678987654321

let sixthElement = document.getElementById('sixth');

for (let i = 1; i <= 9 ; i++) {

    sixthElement.innerHTML += i;

}

for (let i = 8; i >= 1; i--) {
        
    sixthElement.innerHTML += i;
}


// 7)
// 1
// 12
// 123
// 1234
// 12345
// 123456

let seventhElement = document.getElementById('seventh');




// 8)
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

let eighthElement = document.getElementById('eighth');