export class Reverser {
    public reverseWord(word: string) {
        let newWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            newWord += word[i];
        }

        return newWord;
    }
}