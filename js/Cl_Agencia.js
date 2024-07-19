export default class Cl_Agencia {
    constructor() {
    this.cont_subs=0;
    this.cont_no_paga=0;
    this.cont_A=0;
    this.cont_B=0;
    this.cont_C=0;
}
    procesarSubs(subs) {
    this.cont_subs++;
    switch (subs.plan) {
        case 'A':
            this.cont_A++;
            break;
        case 'B':
            this.cont_B++;
            break;
        case 'C':
            this.cont_C++;
            this.cont_no_paga++;
            break;
    }
}
    favorito() {
    if (this.cont_A === this.cont_B && this.cont_A === this.cont_C) {
        return 'Todos por igual';
    } 
        else if (this.cont_B === this.cont_A && this.cont_A > this.cont_C) {
            return 'Por igual Plan A y Plan B';
    } 
        else if (this.cont_C === this.cont_A && this.cont_A > this.cont_B) {
            return 'Por igual Plan A y Plan C';
    } 
        else if (this.cont_C === this.cont_B && this.cont_B > this.cont_A) {
            return 'Por igual Plan B y Plan C';
    } 
        else if (this.cont_B > this.cont_A && this.cont_B > this.cont_C) {
            return 'Plan B';
    } 
        else if (this.cont_A > this.cont_B && this.cont_A > this.contC) {
            return 'Plan A';
    } 
        else {
            return 'Plan C';
    }
}
    porcentaje() {
        return (this.cont_no_paga / this.cont_subs) * 100;
}
}