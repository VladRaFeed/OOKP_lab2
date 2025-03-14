import * as math from 'mathjs';

class solveRealNums {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    solveDiffRealNums() {
        const result = math.divide(this.a, this.b);
        return result;
    }
}

class solveFractionsNums {
    constructor(a,b,c,d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    solveDiffFractionsNums() {
        const firstFraction = math.divide(this.a, this.b);
        const secondFraction = math.divide(this.c, this.d);
        const result = math.divide(firstFraction, secondFraction);
        return result;
    }
}

class solveComplexNums {
    constructor(a,b,c,d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    solveDiffComplexNums() {
        const firstComplex = math.complex(this.a, this.b);
        const secondComplex = math.complex(this.c, this.d);
        const result = math.divide(firstComplex, secondComplex);
        return result;
    }
}

class solveStrategys {
    constructor() {
        
    }

    solveRealNums(a,b) {
        const solver = new solveRealNums(a,b);
        const result = solver.solveDiffRealNums();
        return result
    }

    solveDiffFractionsNums(a,b,c,d) {
        const solver = new solveFractionsNums(a,b,c,d);
        const result = solver.solveDiffFractionsNums();
        return result;
    }

    solveDiffComplexNums(a,b,c,d) {
        const solver = new solveComplexNums(a,b,c,d);
        const result = solver.solveDiffComplexNums();
        return result;
    }
}

const test = new solveRealNums(4, 2);
console.log(test.solveDiffRealNums());

const test2 = new solveFractionsNums(1, 2, 1, 3);
console.log(test2.solveDiffFractionsNums());

const test3 = new solveComplexNums(3, 2, 1, -1);
console.log(test3.solveDiffComplexNums());