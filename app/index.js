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
const myTime = document.getElementById("time");
const myDate = document.getElementById("date");

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
  
//  let months =  ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
//  let days = ["SUN","MON","TUE","WED","THU","FRI", "SAT"];

  let months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri", "Sat"];

 //Update the Date element every tick
  let monthName = months[today.getMonth()];
  let dayNumber = today.getDate();
  let dateName = days[today.getDay()];

  myDate.text = `${dateName} ${monthName} ${dayNumber}`;
}

//Background Color function using Settings
import { me } from "appbit";
import * as document from "document";
import * as fs from "fs";
import * as messaging from "messaging";

const SETTINGS_TYPE = "cbor";
const SETTINGS_FILE = "settings.cbor";

let settings = loadSettings();

let backgroundColor = document.getElementById("background");

messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt && evt.data && evt.data.key === "myColor") {
    backgroundColor.style.fill = evt.data.value;
  }
});

// Load settings from filesystem
function loadSettings() {
  try {
    return fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
  } catch (ex) {
    // Defaults
    return {};
  }
}

// Save settings to the filesystem
function saveSettings() {
  fs.writeFileSync(SETTINGS_FILE, settings, SETTINGS_TYPE);
}