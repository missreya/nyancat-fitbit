import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Background Animation
import * as document from "document";

const myAnimatedBG = document.getElementById("myAnimatedBG");

myAnimatedBG.animate("enable");

// Update the clock every tick - minutes
clock.granularity = "minutes";

// Get a handle on the <text> element
const myTime = document.getElementById("myTime");
const myDate = document.getElementById("myDate");

// Update the Time element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myTime.text = `${hours}:${mins}`;
  
  const monthShort = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
 ];
  
  const dayShort = [
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
  "SUN",
 ];

 //Update the Date element every tick
  let monthNameShort = monthShort[today.getMonth()];
  let dayNumber = today.getDate();
  let dateNameShort = dayShort[today.getDay()];

  myDate.text = `${dateNameShort} ${monthNameShort} ${dayNumber}`;

}



