class BirthdayService {
    howLongToMyBirthday(date){
        let valid = new Date(date).getTime() > 0;
            
            if(typeof date === 'undefined' || !valid){
                throw new Error('Wrong argument!');
            }
            const hours = 24;
            const minOrSec = 60;
            const milisec = 1000;
            const handleNegative = -1;
            const ms = 100;

            const today = new Date();
            const birthday = new Date(date);
            const daysLeft = Math.floor((birthday - today) / (hours * minOrSec * minOrSec * milisec) + 1);
        
            const conditionChaining = (value) => {
                if(value === 0){
                    return this.congratulateWithBirthday();
                } else {
                    return this.notifyWaitingTime(value);
                }
            }

            new Promise(res => {
                setTimeout(res, ms, daysLeft)
            }).then((res) => {
                conditionChaining(daysLeft);
                return res;
            })
     }
    congratulateWithBirthday(){
        console.log('Hooray!!! It is today!')
    }
    notifyWaitingTime(waitingTime){
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