Take a sentence as an input and reverse every word in that sentence. 
a. Example - This is a sunny day > shiT si a ynnus yad. 
  
  
  function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const reversedWord = reverseString(word);
        reversedWords.push(reversedWord);
    }
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
