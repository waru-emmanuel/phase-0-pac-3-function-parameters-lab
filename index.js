function introduction (name) {
    return  `Hi, my name is ${name}.`
}

function introductionWithLanguage (name, language){
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    
}
console.log(introductionWithLanguage("Aki","Ember.js"));

              
function introductionWithLanguageOptional (name , language){
    return`Hi, my name is ${name} and I am learning to program in JavaScript.`;
} 
console.log(introductionWithLanguageOptional ("Gracie","JavaScript" ));

function introductionWithLanguageOptional (name,language){
    return`Hi, my name is ${name} and I am learning to program in ${language}.`;   
}
  console.log(introductionWithLanguageOptional ("Gracie","Python"));