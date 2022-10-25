const showDate = () => {
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
  const currentDate = new Date();
  let day = currentDate.getDay();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  let ampm;

  ampm = hour < 12 ? 'AM' : 'PM';
  hour = hour % 12;
  hour = hour < 10 ? '0'+ hour : hour;
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  second = second < 10 ? '0'+ second : second;


  document.getElementById("day").textContent = dayNames[day];
  document.getElementById("hour").textContent = hour + ':';
  document.getElementById("minute").textContent = minutes + ':';
  document.getElementById("second").textContent = second;
  document.getElementById("ampm").textContent = ampm;

  setTimeout(showDate, 100);
};

showDate()
