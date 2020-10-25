module.exports = function check(str, bracketsConfig) {
  let result = true;

let openBrackets = [];
let closeBrackets = [];
let uBrackets = [];

for (let i = 0; i < bracketsConfig.length; i++){
if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
openBrackets.push(bracketsConfig[i][0]);
closeBrackets.push(bracketsConfig[i][1]);
}
else {
uBrackets.push(bracketsConfig[i][0]);
}
}

let openCounter = 0;
let closeCounter = 0;

//в строке содержится что-то кроме скобок в конфиге
for (let i = 0; i < str.length; i++) {
if (openBrackets.indexOf(str[i]) === -1 && closeBrackets.indexOf(str[i]) === -1 && uBrackets.indexOf(str[i]) === -1) {
console.log("symbol not found in bracketsConfig");
return false;
}

if (openBrackets.indexOf(str[i]) > -1)
openCounter++;
else if (closeBrackets.indexOf(str[i]) > -1)
closeCounter++;
}

if (openCounter !== closeCounter) {
console.log("open brackets <> close brackets");
return false;
}

if (str.indexOf("()") > -1 || str.indexOf("[]") > -1 || str.indexOf("{}") > -1 || str.indexOf("||") > -1) {
str = clearBrackets(str);
console.log(str);
}

//оканчивается на открывающую скобку
if (openBrackets.indexOf(str[str.length - 1]) > -1) {
console.log("ends with an open bracket");
return false;
}

//начинается на закрывающую скобку
if (closeBrackets.indexOf(str[0]) > -1) {
console.log("starts with a close bracket");
return false;
}

//нечетное количество скобок
if (str.length % 2 !== 0) {
console.log("some brackets are missing");
return false;
}

for (let i = 1; i < str.length; i++) {
if (str[i - 1] === '(' && closeBrackets.indexOf(str[i]) > -1 && str[i] !== ')' ||
str[i - 1] === '{' && closeBrackets.indexOf(str[i]) > -1 && str[i] !== '}' ||
str[i - 1] === '[' && closeBrackets.indexOf(str[i]) > -1 && str[i] !== ']' ||
str[i-1] === '|' && str[i+1] === '|')
{
console.log("incorrect sequence");
return false;
}
}

return result;
}

function clearBrackets(str) {
str = str.replace("||", "");
str = str.replace("()", "");
str = str.replace("[]", "");
str = str.replace("{}", "");
if (str.indexOf("()") > -1 || str.indexOf("[]") > -1 || str.indexOf("{}") > -1 || str.indexOf("||") > -1) {
return clearBrackets(str);
}
else {
console.log("returning string is: " + str);
return str;
}
}

  
