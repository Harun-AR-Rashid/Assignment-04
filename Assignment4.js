// #####Problem-01
function calculateTax(income, expenses) {
    const benifit = income - expenses;
    const tax = benifit * 20 / 100;
    if (income >= expenses && income >= 0 && expenses >= 0) {
        return tax;
    }
    else {
        return 'invalid Input';
    }
}
// const result = calculateTax(10000, 3000);
// console.log(result);




// ##Problem-02
function sendNotification(email) {
    if (email.includes(email.split('@')) || email.split('@').length !== 2) {
        return 'Invalid Email'
    }
    const [username, domainName] = email.split('@');
    const notification = username + ' ' + 'sent you an email from' + ' ' + domainName;
    return notification;
}
// let resut1 = sendNotification('farhan34@yahoo.com  ');
// console.log(resut1);



// #######Problem-03

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input'
    }
    const characters = name.split('');
    for (let i = 0; i < characters.length; i++) {
        if (!isNaN(characters[i]) && characters[i] !== ' ') {
            return true;
        }
    }
    return false;
}
// const result= checkDigitsInName('');
// console.log(result);





// const person = {
//     name: 'harun',
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true
// }
// const person1 = {
//     name: 'halima',
//     testScore: 35,
//     schoolGrade: 30,
//     isFFamily: false
// }
// ##########Problem-04
function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean' || obj.testScore > 50 || obj.schoolGrade > 30) {
        return 'Invalid Input'
    }
    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += 20;
    }
    if(finalScore>=80){
        return true;
    }
    else {
        return false;
    }

}
// const result = calculateFinalScore(person1);
// console.log(result);


// ######Problem-05

function waitingTime(waitingTimes , serialNumber) {
    
    }