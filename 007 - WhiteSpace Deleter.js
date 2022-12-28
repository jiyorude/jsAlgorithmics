/*
CHALLENGE:
Create a function that utilizes Regex to delete whitespaces in strings
*/

whiteSpaceDel = (str) => {
  const result = str.replaceAll(/\s/g, "");
  console.log(result);
};

whiteSpaceDel("I      l ik e whit es  pace");

// Logs: Ilikewhitespace
