enum Days{
  //  mon = "Mon",tue ="Tue"
  //mon,tue,wed,thur,fri,sat,sun
    mon=1,tue,wed,thur,fri,sat,sun
}

// let whichDay:Days;
// whichDay = Days.mon
// console.log(whichDay);


function whichDay(day:Days) {
    return day
}

console.log(whichDay(Days.tue));



