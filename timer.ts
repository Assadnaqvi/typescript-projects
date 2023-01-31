import inquirer from "inquirer";
 
let date=new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
date.setFullYear(2023);
date.setMonth(2);
date.setDate(14);


let ts = Date.now();

let date_ob = new Date(ts);
let date1 = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date1);