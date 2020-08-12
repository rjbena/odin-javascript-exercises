const repeatString = function(string, repeats) {
    if (repeats < 0) {
        return 'ERROR'
    } else {

        let i = repeats;
        let concatinatedString ='';
        
        while (i !== 0) {
            concatinatedString += string;
            
            i--;
        }
        //console.log(concatinatedString);
        return concatinatedString;
    }

}

module.exports = repeatString
