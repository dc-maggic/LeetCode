var uniqueMorseRepresentations = function(words) {
    var morse={
            "a":".-",
            "b":"-...",
            "c":"-.-.",
            "d":"-..",
            "e":".",
            "f":"..-.",
            "g":"--.",
            "h":"....",
            "i":"..",
            "j":".---",
            "k":"-.-",
            "l":".-..",
            "m":"--",
            "n":"-.",
            "o":"---",
            "p":".--.",
            "q":"--.-",
            "r":".-.",
            "s":"...",
            "t":"-",
            "u":"..-",
            "v":"...-",
            "w":".--",
            "x":"-..-",
            "y":"-.--",
            "z":"--..",
        };
    words.forEach(function(x){
    var word = x;
    var k = word.split("");
    var newWord = k.map(element=>morse[element]).join();
    console.log(newWord);
    });
    };
    
};