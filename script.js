let d = new Date();

//array of days
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//array of months
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//storing date data from the object in variables
let year = d.getFullYear();
let month = months[d.getMonth()]
let date = d.getDate()


//storing time data from the object in variables
let hour = d.getHours()
let minute = d.getMinutes()
let second = d.getSeconds()


//configuring am/pm setting
let meridium = "AM"
// making the date in 12 hour format
if (hour > 12) {
    hour = hour - 12;
    meridium = "PM"
}

let datebox = document.createElement("div")
datebox.className = "date"
datebox.innerHTML = `${date} ${month} ${year}`


let timebox = document.createElement("div")
timebox.className = "time";

//function to update the time continuosly using set interval
async function timeupdate() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            second++

            //setting to update minute and restart second from 0
            if (second > 59) {
                second = 0;
                minute++
            }
            //settting to update hour and restart minute from 0
            if (minute > 59) {
                minute = 0;
                hour++
            }

            if (hour < 10) {

                if (minute < 10) {
                    timebox.innerHTML = `0${hour} : 0${minute} : ${second} ${meridium}`;
                }
                else {

                    timebox.innerHTML = `0${hour} : ${minute} : ${second} ${meridium}`;
                }
            }
            else if (minute < 10) {

                timebox.innerHTML = `${hour} : 0${minute} : ${second} ${meridium}`;
            }
            else {

                timebox.innerHTML = `${hour} : ${minute} : ${second} ${meridium}`;
            }


        }, 1000);
        resolve()
    }
    )
}
(async function main() {
    await timeupdate()
    document.querySelector(".box").append(timebox)
    document.querySelector(".box").append(datebox)
})()