class Formatter {
  //add static methods here
  static capitalize(str){
    let s = [];
    s[0] = str[0].toUpperCase();
    for (let i = 1; i<str.length; i++){
      s[i] = str[i];
    }
    return s.join("");
  }

  static sanitize(garbage){
    return garbage.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(title){
    let a = title.split(" ");
    const notWorthy = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    for (let i = 0; i < a.length; i++){
      if (i == 0){
         a[i] = this.capitalize(a[i]);
      }else if(notWorthy.includes(a[i])){
        a[i] = a[i];
      }else{
        a[i] = this.capitalize(a[i]);
      }
    }
    return a.join(" ")
  }
}