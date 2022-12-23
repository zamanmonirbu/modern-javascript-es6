//  Apply map, filter, find on an array of objects
const student=[
    { roll:21,name:"monir"},
    { roll:31,name:"Jahir"},
    { roll:41,name:"Halim"},
    { roll:51,name:"Galim"}

],another=[];


// for(let i=0;i<student.length;i++){
//     let content=student[i].name;
//     another[i]=content;

// }

const name=student.map( s => s.name);

console.log(name);
