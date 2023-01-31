import inquirer from "inquirer";
 
let date=new Date()
console.log("This is the default date ",date);
console.log("Year",date.getFullYear());
console.log("Month",date.getMonth()+1);
console.log("Date",date.getDate());
console.log("Day",date.getDay());
console.log("Hours",date.getHours());
console.log("Minutes",date.getMinutes());
console.log("Seconds",date.getSeconds());



let ts = Date.now();

let date_ob = new Date(ts);
let date1 = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in YYYY-MM-DD format
console.log("year", year + "-" ,"Month" ,"-"+ month + "-" ,"Date" ,"-"+ date1);