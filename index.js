
let normalPerson={
    firstName:"Monir",
    LastName:"Uzzaman",
    salary:15000,
    getFullName: function (){
        this.fullName=this.firstName+this.LastName;
        return this.fullName;
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary=this.salary-amount;
        return this.salary;
    } 
}

const heroPerson={   
    firstName:"hero",
    LastName:'Balam',
    salary:25000
}
const friendlyPerson={
    firstName:"hero",
    LastName:'Golam',
    salary:25000
}

// Objects.chargeBill();
// const heroChargeBill=normalPerson.chargeBill.bind(friendlyPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(normalPerson.salary);
// console.log(friendlyPerson.salary);

//console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson,5000);
normalPerson.chargeBill.apply(heroPerson,[5100]);
console.log(heroPerson.salary);
