const lastdate = '1 April 2023 00:00 PM';
document.getElementById('enddate').innerText = lastdate;

const inputs = document.querySelectorAll('input');
setInterval(function clock() {
  const end = new Date(lastdate);
  const now = new Date();
  const differ = (end - now) / 1000;
  //   console.log(differ);
  inputs[0].value = Math.floor(differ / 3600 / 24);
  inputs[1].value = Math.floor(differ / 3600) % 24;
  inputs[2].value = Math.floor(differ / 60) % 60;
  inputs[3].value = Math.floor(differ) % 60;
});
// clock();
17;
