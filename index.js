//concate multiple arry

let arry1=[1,5,3,6,7];
let arry2=[13,556,356,656,76];
let arry3=[543,546,356,656,76];

let first_cocate=arry1.concat(arry2).concat(arry3);
console.log(first_cocate);

let second_arry=[...arry1,...arry2,...arry3];
console.log(second_arry);