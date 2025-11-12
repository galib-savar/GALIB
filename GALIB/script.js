// ? Typewriter
const typeWriter = document.querySelector("#typewriter");
const text = " Web Developer.";
let index = 1;

function autoWriteing() {
  let write = text.slice(0, index);
  typeWriter.innerText = write;
  if (index <= text.length) {
    index++;
  } else {
    index = 1;
  }
  setTimeout(() => {
    autoWriteing();
  }, 300);
}
autoWriteing();
// ? Date
let date = document.querySelector("#date");
let year = new Date().getFullYear();

date.innerText = year;
