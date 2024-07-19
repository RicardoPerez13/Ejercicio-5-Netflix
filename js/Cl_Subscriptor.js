export default class Cl_Subscriptor {
    constructor(ced, plan) {
        this.cedula = ced;
        this.plan = plan;
    }
    paga(){
        switch(this.plan){
            case 'A':
                return 3.3;
            case 'B':
                return 5.5;
            case 'C':
                return 10.0;
        }
    }
    }
