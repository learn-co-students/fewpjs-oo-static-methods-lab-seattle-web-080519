class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
  
  

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const dontCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    const stringArray = string.split(" ");
    for (let i = 0; i < stringArray.length; i++) {
      if(dontCapitalize.indexOf(stringArray[i]) === -1) {
        stringArray[i] = this.capitalize(stringArray[i]);
      } 
    }
    string = stringArray.join(" ");
    string = this.capitalize(string);
    return string;
  }
}
