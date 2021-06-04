class BirthdayService {
    howLongToMyBirthday(date){
        const hours = 24;
        const minOrSec = 60;
        const milisec = 1000;
        const ms = 100;

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let valid = new Date(date).getTime() > 0;
                if(typeof date === 'undefined' || !valid){
                    reject( new Error('Wrong argument!'));
                }
                resolve(new Date(date));
            }, ms)
        })
        return promise.then(
            (birthday) => {
                const today = new Date();
                const daysLeft = Math.floor((birthday - today) / (hours * minOrSec * minOrSec * milisec) + 1);
                if(daysLeft === 0){
                    this.congratulateWithBirthday();
                } else {
                    this.notifyWaitingTime(daysLeft);
                }
            }
        ).then(result => result)
    }
    congratulateWithBirthday() {
        console.log('Hooray!!! It is today!')
    }
    notifyWaitingTime(waitingTime) {
        const handleNegative = -1;
        if (waitingTime > 0){
            return console.log(`Soon...Please, wait just ${waitingTime} day/days`);
        } else {
            return console.log(`Oh, you have celebrated it ${waitingTime * 
                handleNegative} day/s ago, don't you remember?`);
        }
    }
}

module.exports = BirthdayService;