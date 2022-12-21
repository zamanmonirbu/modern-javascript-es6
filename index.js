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
}

let information=new child();
console.log(information);