import React from "react";
import "./HumanReadableTimeFormat.scss";

// messages
const messages = {
  NOW: "just now",
  LESS_THAN_A_MINUTE: "a few secs ago",
  LESS_THAN_5_MINUTES: "a minute ago",
  MINUTES: "mins ago",
  HOURS: "hours ago",
  DAYS: "days ago",
  MONTHS: "months ago",
  YEARS: "years ago",
};
// time in seconds
const timeInSecond = {
  MINUTE: 60,
  HOUR: 60 * 60,
  DAY: 24 * 60 * 60,
  MONTH: 30 * 24 * 60 * 60,
  YEAR: 365 * 24 * 60 * 60,
};
// get the floor value
const getFormatted = (time) => {
  return Math.floor(time);
};
const calculate = (lastDate) => {
  // get the current time in milliseconds
  const current = new Date();
  // get the date in milliseconds
  const lastTime = new Date(lastDate);
  // get the difference in milliseconds
  let diff = Math.abs(current - lastTime);
  // convert the time to seconds
  diff = diff / 1000;
  // convert the time to the human-readable format
  switch (diff) {
    case diff < 10:
      return messages.NOW;
    case diff > 10 && diff < timeInSecond.MINUTE:
      return messages.LESS_THAN_A_MINUTE;
    case diff > timeInSecond.MINUTE && diff < timeInSecond.MINUTE * 5:
      return messages.LESS_THAN_5_MINUTES;
    default:
      if (diff < timeInSecond.HOUR) {
        return `${getFormatted(diff / timeInSecond.MINUTE)} ${
          messages.MINUTES
        }`;
      } else if (diff > timeInSecond.HOUR && diff < timeInSecond.DAY) {
        return `${getFormatted(diff / timeInSecond.HOUR)} ${messages.HOURS}`;
      } else if (diff > timeInSecond.DAY && diff < timeInSecond.MONTH) {
        return `${getFormatted(diff / timeInSecond.DAY)} ${messages.DAYS}`;
      } else if (diff > timeInSecond.MONTH && diff < timeInSecond.YEAR) {
        return `${getFormatted(diff / timeInSecond.MONTH)} ${messages.MONTHS}`;
      } else if (diff > timeInSecond.YEAR) {
        return `${getFormatted(diff / timeInSecond.YEAR)} ${messages.YEARS}`;
      }
  }
};
function HumanReadableTimeFormat({ time }) {
  const convertedTime = calculate(time);
  return <span className="time-readable-box">{convertedTime}</span>;
}

export default HumanReadableTimeFormat;
