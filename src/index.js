module.exports = function check(str, bracketsConfig) {
  
  let result = true;
  
  let openBrackets = [];
  
  let closeBrackets = [];
  
  for (let i = 0; i < bracketsConfig.length; i++){
  
  if (bracketsConfig[i][0] !== '|') {
  
  openBrackets.push(bracketsConfig[i][0]);
  
  closeBrackets.push(bracketsConfig[i][1]);
  
  }
  
  }
  
  let openCounter = 0;
  
  let closeCounter = 0;

  
  for (let i = 0; i < str.length; i++) {
  
  if (openBrackets.indexOf(str[i]) === -1 && closeBrackets.indexOf(str[i]) === -1 && str[i] !== '|') {
  

  
  return false;
  
  }
  
  if (openBrackets.indexOf(str[i]) > -1)
  
  openCounter++;
  
  else if (closeBrackets.indexOf(str[i]) > -1)
  
  closeCounter++;
  
  }
  
  if (openCounter !== closeCounter) {
  
 
  
  return false;
  
  }
  

  
  if (openBrackets.indexOf(str[str.length - 1]) > -1) {
  

  
  return false;
  
  }
  

  
  if (closeBrackets.indexOf(str[0]) > -1) {
  

  
  return false;
  
  }
  

  
  if (str.length % 2 !== 0) {
  
  
  return false;
  
  }
  
  if (str.indexOf("()") > -1 || str.indexOf("[]") > -1 || str.indexOf("{}") > -1 || str.indexOf("||") > -1) {
  
  str = clearBrackets(str);
  
  
  }
  
  for (let i = 1; i < str.length; i++) {
  
  if (str[i - 1] === '(' && closeBrackets.indexOf(str[i]) > -1 && str[i] !== ')' ||
  
  str[i - 1] === '{' && closeBrackets.indexOf(str[i]) > -1 && str[i] !== '}' ||
  
  str[i - 1] === '[' && closeBrackets.indexOf(str[i]) > -1 && str[i] !== ']' ||
  
  str[i-1] === '|' && str[i+1] === '|')
  
  {
  
  
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
  
  
  return str;
  
  }
  
}

  
