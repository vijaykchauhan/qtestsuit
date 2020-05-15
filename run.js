//var str1 = `oj.glossary.title~==~"22"~"title matched with example"`;
var str1 = `oj.glossary.title<~>==<~>"false"<~>"title matched with example"`;
console.log(str1);
var regexLength = 3;
var regex = /<~>/g;
var current;
var matchIndexes = [];

while ((current = regex.exec(str1)) != null) {
  matchIndexes.push(current.index);
}
console.log(matchIndexes);
let expectedValue = str1.substring(
  matchIndexes[1] + regexLength,
  matchIndexes[2]
);
console.log("Number: " + !isNaN(expectedValue));
if (typeof expectedValue == "string" || expectedValue instanceof String) {
  console.log("String: " + true);
} else {
  console.log("String: " + false);
}
console.log(Boolean(expectedValue));

//console.log(isNaN(expectedValue));
//console.log(isNaN(expectedValue));
//console.log(typeof expectedValue);

// function hintMe(oj) {
//   console.log(oj);
//   try {
//     if (oj.charAt(0) == '"') {
//       return "string";
//     } else {
//       console.log(isNaN(oj));
//       return oj;
//     }
//   } catch (e) {
//     console.log(isNaN(oj));

//     return oj;
//   }
// }

//console.log(hintMe(expectedValue));
