const palindromes = function(string) {
    let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
     punctuationless= punctuationless.split(" ").join("");
    punctuationless = punctuationless.toLowerCase();

    console.log(punctuationless);
    let back = punctuationless.length;
    back--;
    for (let i =0; i <back; i++){
        console.log(punctuationless[i] + punctuationless[back])
        if (punctuationless[i] !== punctuationless[back]){
            return false;
        }
        back--;
    }
    return true;
}

module.exports = palindromes
