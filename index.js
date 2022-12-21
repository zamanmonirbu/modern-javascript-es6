//inheritance;
class parent{
    constructor(){
        this.fatherName="Mintu";
    }
}
class child extends parent{
    constructor(){
        super();
        this.sonName="monir";
        this.doughterName="Monira";
    }
    createFunction(){
       return this.fatherName+" "+this.sonName+" "+this.doughterName;
    }
}

let information=new child();
console.log(information.createFunction());