import * as math from 'mathjs';
import $ from "jquery";

const formWrapper = document.querySelector(".form-wrapper");

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

class solver {
    constructor(method, a, b, c, d) {
        this.method = method;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    solve() {
        switch(this.method) {
            case "realnums": 
                const realnums = new solveRealNums(this.a, this.b);
                const result = realnums.solveDiffRealNums();
                return result;
            
            case "fractionsnums": 
                const fractionsnums = new solveFractionsNums(this.a, this.b, this.c, this.d);
                const result2 = fractionsnums.solveDiffFractionsNums();
                return result2;
            
            case "complexnums":
                const complex = new solveComplexNums(this.a, this.b, this.c, this.d);
                const result3 = complex.solveDiffComplexNums()
                return result3; 
            
        }
    }
}

const realNumsSolve = () => {
    const resultText = document.querySelector('.taskResult');
    const firstNum = document.getElementById('firstnum').value;
    const secondNum = document.getElementById('secondnum').value;

    const realNumsSolve = new solver("realnums", firstNum, secondNum);
    const ress = realNumsSolve.solve();
    resultText.innerHTML = ``;
    resultText.innerHTML = `Result is ${ress}`;
}

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    const selectedText = $(this).text();
    const selectedId = $(this).attr('id');
    $(this).parents('.dropdown').find('span').text(selectedText);
    $(this).parents('.dropdown').find('input').attr('value', selectedId);
    const result = selectedId;
    switch (result) {
        case "Task1":
            formWrapper.innerHTML= '';
            solveRealNumsMarkup()
            break;
        case "Task2":
            formWrapper.innerHTML= '';
            console.log("Task2");
            break;
        case "Task3":
            formWrapper.innerHTML= '';
            console.log("Task3");
            break;
        default:
            console.log("No task selected");
    }
});