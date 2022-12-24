//24-4 JSON, JSON Structure, parse, stringify, JSON properties
let information={
    name:"Monir",vill:"Kaute Nogor",Pn:0172727727
};

let AtJ=JSON.stringify(information);
let JtA=JSON.parse(AtJ);

console.log(AtJ);
console.log(JtA);