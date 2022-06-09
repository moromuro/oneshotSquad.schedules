

export function MsToTime(duration) {
  let milliseconds = parseInt((duration % 1000));
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor(duration / (1000 * 60 * 60));

  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  milliseconds = milliseconds.toString().padStart(3, '0');

  return {
    hours,
    minutes,
    seconds,
    milliseconds
  };
}

function addFrontZero(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};

export function FormatTime(stringDate, duration, utc = false) {
  let date = new Date(stringDate);
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day;
  let dayNmb;
  let monthNmb;
  let yearNmb;

  let hours;
  let minutes;

  if (!utc) {
      day = days[date.getDay()];
      dayNmb = date.getDate();
      monthNmb = date.getMonth() + 1;
      yearNmb = date.getFullYear();
      hours = addFrontZero(date.getHours());
      minutes = addFrontZero(date.getMinutes());
  } else {
      day = days[date.getUTCDay()];
      dayNmb = date.getUTCDate();
      monthNmb = date.getUTCMonth() + 1;
      yearNmb = date.getUTCFullYear();
      hours = addFrontZero(date.getUTCHours());
      minutes = addFrontZero(date.getUTCMinutes());
  }

  return {
      day: `${day}`,
      mainText: `${hours}:${minutes} - ${addFrontZero(parseInt(hours, 10) + parseInt(duration, 10))}:${minutes}`,
      secondText: `${dayNmb}.${monthNmb}.${yearNmb}`
  }
}
