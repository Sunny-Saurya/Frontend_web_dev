const acountId = "12345"
let acountEmail = "sunnysaurya@gmail.com"
var acountPassword = "346783"
acountCity = "New delhi"

// Now i want to change the value and verify that which one is change or which one is still same;

// acountId = "98765"
acountEmail = "sunnnnyyyy@gamil.com"
acountPassword = "xyzsunny"
acountCity = "Ranchi"
let acountState;

// console.log(acountId)
// console.log(acountEmail)  

/* RATHER THAN EXCUTING THE CHANGE INDIVIDUALLY, YOU CAN USE "CONSOLE.TABLE([VAR1,VAR2,VAR3,...]) "*/ 

console.table([acountId,acountEmail,acountPassword,acountCity,acountState])


/* PREFER NOT TO USE "VAR" KEYWORD FOR TAKING THE INPUT OR SOMETHING ELSE
BECAUSE OF THE ISSUES IN THE BLOCK OF THE SCOPE */