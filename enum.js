var Days;
(function (Days) {
    //  mon = "Mon",tue ="Tue"
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tue"] = 11] = "tue";
    Days[Days["wed"] = 12] = "wed";
    Days[Days["thur"] = 13] = "thur";
    Days[Days["fri"] = 14] = "fri";
    Days[Days["sat"] = 15] = "sat";
    Days[Days["sun"] = 16] = "sun";
})(Days || (Days = {}));
// let whichDay:Days;
// whichDay = Days.mon
// console.log(whichDay);
function whichDay(day) {
    return day;
}
console.log(whichDay(Days.tue));
