// Code your solution here

function heyJude(str){
    // let str = "Na na na na na na na, na na na na, hey Jude.";
    return str.repeat(16);
}

function prohibitedLanguage(str){
    let myRegExp = /candycorn|brusselssprouts/;
    return str.search(myRegExp);
}