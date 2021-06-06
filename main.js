let msg = {
    randomMsg(array){
        let randomWordIndex = Math.floor(Math.random() * array.length);
        const randomWord = array[randomWordIndex];
        return randomWord;
    },
    logOnConsole(){
        console.log('Your sign is ' + this.randomMsg(this.sign));
        console.log('Your\'s todays luck is ' + this.randomMsg(this.todaysLuck));
        console.log('You should '+ this.randomMsg(this.youShould) + ' And you shouldn\'t ' + this.randomMsg(this.youShouldnt));
    },
    sign: ['Aries', 
    'Taurus', 
    'Gemini', 
    'Cancer', 
    'Leo', 
    'Virgo', 
    'Libra', 
    'Scorpius',
    'Ophiuchus',
    'Sagittarius',
    'Capricornus',
    'Aquarius',
    'Pisces'],
    todaysLuck: ['good', 'bad', 'ok', 'fine', 'casual', 'catastrophic', 'low'],
    youShould: [' Do your homework', 'Let the coaches do their job.', 'Behave yourself.',
    'Talk to your child.', 'Get active yourself.'],
    youShouldnt: ['bribe your child to play.', 'force your child to play a particular sport.', 'fixate on a single sport.',
    'compare your child to others.', 'rush things.'],

};
msg.logOnConsole();