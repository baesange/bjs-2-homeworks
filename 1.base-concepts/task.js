"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        arr.push(root);
        return arr;
    } else {
        let sqrtDiscriminant = Math.sqrt(discriminant);
        let root1 = (-b + sqrtDiscriminant) / (2 * a);
        let root2 = (-b - sqrtDiscriminant) / (2 * a);
        arr.push(root1, root2);
        return arr;
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyRate = (percent / 100) / 12;
    let creditBody = amount - contribution;
    if (creditBody <= 0) {
        return 0;
    }

    let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
    let totalPayment = monthlyPayment * countMonths;
    totalPayment = Math.round(totalPayment * 100) / 100;
    return totalPayment;
}
