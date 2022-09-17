function checkForSpam(message) {
    let result;
    // Change code below this line
//  let cringe = message.toLowerCase();
    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
        result = true;
    } else {
        result = false;
   }
    
  // Change code above this line
  return result;
}

console.log(checkForSpam("sAdle"))