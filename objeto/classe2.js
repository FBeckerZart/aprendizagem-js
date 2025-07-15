class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {             // extends faz com que aqui por exemplo Avo seja o Prototype, ou seja, a classe pai de Pai
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva")
    }
}

const filho = new Filho
console.log(filho)