
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

function sendNotification(email) {
    if (email.includes(email.split('@')) || email.split('@').length !== 2) {
        return 'Invalid Email'
    }
    const [username, domainName] = email.split('@');
    const notification = username + ' ' + 'sent you an email from' + ' ' + domainName;
    return notification;
}

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

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean' || obj.testScore > 50 || obj.schoolGrade > 30) {
        return 'Invalid Input'
    }
    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += 20;
    }
    if (finalScore >= 80) {
        return true;
    }
    else {
        return false;
    }

}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    const staySerialNum = serialNumber - 1;
    const waitingSerialNum = staySerialNum - waitingTimes.length;
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum = sum + waitingTimes[i];
    }
    const avgTime = sum / waitingTimes.length;
    const totalAvg = Math.round(avgTime);
    const totalWaitingTime = waitingSerialNum * totalAvg;
    return totalWaitingTime;
}