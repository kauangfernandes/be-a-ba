export const game = {
    letters: [],
    word: '',
    streak: 0,
    error: false,

    newGame: function () {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        const letters = new Array(3).fill().map( function(letter){
                const randomIndex = Math.floor(Math.random() * alphabet.length);
                const sellectLetter = alphabet[randomIndex];
                alphabet.slice(randomIndex, randomIndex + 1);
                return sellectLetter;
            }
        )

        this.letters = letters;
        this.word = '';
        this.streak = 0;
        this.error = false;
    },

    validateWord: function (){

        const tempLetters = [...this.letters];
        for (let index = 0; index < word.length; index++) {
            if(this.tempLetters.includes(word[i])){
                this.tempLetters.slice(this.tempLetters.indexOf(this.word[i]));
            }
        }

        if(this.tempLetters.length == false){
            return false;

        }

        return true;
    }


}