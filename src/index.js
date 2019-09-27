module.exports = function check(str, bracketsConfig) {
  let checkedStr = "";
  let checkedBefore = str;
  let string = "";
  do {
    for (let i = 0; i <= str.length-1; i++) {
      if (str[i] == "("  && str[i+1] == ")") {
        i += 1;
        continue;
      }
      if (str[i] == "["  && str[i+1] == "]") {
        i += 1;
        continue;
      }
      if (str[i] == "{"  && str[i+1] == "}") {
        i += 1;
        continue;
      }
      if (str[i] == "|"  && str[i+1] == "|") {
        i += 1;
        continue;
      }
      if (str[i] == "1"  && str[i+1] == "2") {
        i += 1;
        continue;
      }
      if (str[i] == "3"  && str[i+1] == "4") {
        i += 1;
        continue;
      }
      if (str[i] == "5"  && str[i+1] == "6") {
        i += 1;
        continue;
      }
      if (str[i] == "7"  && str[i+1] == "7") {
        i += 1;
        continue;
      }
      if (str[i] == "8"  && str[i+1] == "8") {
        i += 1;
        continue;
      }
      string += str[i];   
 }
    checkedStr = string;
    string = "";
    if (checkedBefore == checkedStr) break;
    checkedBefore = checkedStr;
    str = checkedStr;
  } while (checkedStr != "");
    return (!checkedStr);
} 