// 16777215;

const btn = document.getElementById('btn');
const code = document.getElementById('colorcode');

function colorcode() {
  const rndomnum = Math.floor(Math.random() * 16777215);
  const randomcolor = '#' + rndomnum.toString(16);
  code.textContent = randomcolor;
  document.body.style.backgroundColor = randomcolor;
}
// colorcode();
btn.addEventListener('click', colorcode);
// btn.addEventListener('click', function () {
//   code.textContent = randomcolor;
// });
//
