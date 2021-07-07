// Your code here
function saturdayFun (something="roller-skate") {
   return `This Saturday, I want to ${something}!`
};

function wrapAdjective (flair="*") {
    return function (string="special") {
        return `You are ${flair}${string}${flair}!`
    }
};

function mondayWork (string="go to the office") {
    return `This Monday, I will ${string}.`
};

const Calculator = {
    add: function () {
        return 1 + 3
    },
    subtract: function () {
       return  1 - 3
    },
    multiply: function () {
        return 1 * 3
    },
    divide: function () {
        return 10 / 5
    }
};

function actionApplyer (integer, arrayOfFunctions) {
    for ( const e of arrayOfFunctions) {
        integer = e(integer)
    }
        return integer;
}