let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23,5,3)//0 January
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);     //time in ms from 1 jan 1970
// console.log(myCreatedDate.getTime());
console.log(Date.now()); //in ms
console.log(Math.floor(Date.now()/1000)); // in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); //0 sunday

//console.log(`${newDate.getDay()} and the time `)
newDate.toLocaleString('default',{
    weekday:"long",
    //timeZone:''
})
console.log();


