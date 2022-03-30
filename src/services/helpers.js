

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
      yearNmb =date.getFullYear();
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
      mainText: `${day} ${hours}:${minutes} - ${parseInt(hours, 10) + parseInt(duration, 10)}:${minutes}`,
      secondText: `${dayNmb}.${monthNmb}.${yearNmb}`
  }
}
