// characters.js
var obj = { 
  "money":[101,211,304] ,
  "characters":[
    { "name":"Ahria" , "age":19 , "status":true },
    { "name":"John Rain" , "age":25 , "status":true },
    { "name":"Hedor" , "age":43 , "status":true }
  ]
};

var str = "";
str += "John's name: " + obj.characters[1].name + "\n";
str += "Ahria's age: " + obj.characters[0].age + "\n";
str += "Bronze: " + obj.money[2] + "\n";

console.log(str);