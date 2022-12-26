
let Objects={
    firstName:"Monir",
    LastName:"Uzzaman",
    salary:15000,
    getFullName: function (){
        this.fullName=this.firstName+this.LastName;
        return this.fullName;
    },
    chargeBill: function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    } 
}

Objects.chargeBill(200);
Objects.getFullName();
console.log(Objects.salary);
console.log(Objects.fullName);