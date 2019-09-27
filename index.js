class Formatter {
  //add static methods here
  
  static capitalize(string) {
    let returnString = '';
    let firstChar = string.slice(0,1).toUpperCase()
    let restOfString = string.slice(1)
    
    console.log(returnString)
    return returnString + firstChar + restOfString
    
  }
  
  static sanitize(string) {
    // return string.replace( /[^A-Za-z0-9 '-]/g, '' ) <-- one liner solution

    const isAlphaNumeric = ch => {
      return ch.match(/^[a-z0-9]+$/i) !== null;
    }

    let copyOfString = string
    copyOfString.split()
    let sanitized = [];
    // let allowedCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM -'"

    for (let indexVal in copyOfString) {
      let char = copyOfString[indexVal]
      // if(allowedCharacters.includes(cd)) {
      if ( (isAlphaNumeric(char)) || (char.includes("-")) || (char.includes("'")) || (char.includes(" ")) ) {
        console.log(char)
        sanitized.push(char)
      }
    }

    console.log(sanitized)
    return sanitized.join("")
  }

  //takes in a string and capitalizes all words in a sentence except exceptions
  //always capitalizes the first word
  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}
Formatter.capitalize("abc")
Formatter.sanitize("@a'-b+c -")
Formatter.titleize("qw%&@%&@iorh 1291-+2490 sz9thec01,but, Ofand,FORat")