const currentDate = document.querySelector(".current-date");
const dayTag = document.querySelector(".days");
const pnicons = document.querySelectorAll(".icons span");

let date = new Date(),
  month = date.getMonth(),
  year = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function renderCalendar() {
  let firstDateofMonth = new Date(year, month, 1).getDay();
  let lastDateofMonth = new Date(year, month + 1, 0).getDate();
  let lastDayMonth = new Date(year, month, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(year, month, 0).getDate();
  let liTag = "";

  for (let i = firstDateofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[month]} ${year}`;
  dayTag.innerHTML = liTag;
}
renderCalendar();

pnicons.forEach((icon) => {
  icon.addEventListener("click", () => {
    month = icon.id === "prev" ? month - 1 : month + 1;

    if (month < 0 || month > 11) {
      date = new Date(year, month);
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
