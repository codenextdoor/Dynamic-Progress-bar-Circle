// const progress = document.querySelector(".progress");
// const loading = document.querySelector(".loading");

// let i = 0;

// const uploadPercentage = [0, 10, 25, 40, 42, 60, 80, 100];

// const interval = setInterval(() => {
//   progress.style.width = uploadPercentage[i] + "%";
//   loading.innerHTML = uploadPercentage[i] + "%";
//   i++;
//   if (i == uploadPercentage.length) {
//     clearInterval(interval);
//     loading.innerHTML = "Completed";
//   }
// }, 1000);

const circle = document.querySelector(".progress-circle");
const loading = document.querySelector(".loading");

let i = 0;

const uploadPercentage = [0, 10, 25, 40, 42, 60, 80, 100];
const cir = circle.getTotalLength();

const interval = setInterval(() => {
  circle.style.strokeDashoffset = cir - (uploadPercentage[i] / 100) * cir;
  loading.innerHTML = uploadPercentage[i] + "%";
  i++;
  if (i == uploadPercentage.length) {
    clearInterval(interval);
    loading.innerHTML = "Ok";
  }
}, 1000);
