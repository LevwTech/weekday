`use strict`;
const myday = document.querySelector(`.day`);
const mymonth = document.querySelector(`.month`);
const myyear = document.querySelector(`.year`);
const btn = document.querySelector(`.btn1`);
const myweekday = document.querySelector(`.weekday`);
const weekday=new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
btn.addEventListener(`click`, function(){
const date = new Date(`${mymonth.value},${myday.value},${myyear.value}`);
const dayNumber = date.getDay();
myweekday.textContent = `${weekday[dayNumber]}! 😊⌚`;
myday.value = mymonth.value = myyear.value = "";
});

