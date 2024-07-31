function startSpinner(spinnerNumber) {
    let count = 0;
    const intervalId = setInterval(() => {
      if (count < 90) {
        count++;
        spinnerNumber.textContent = count + "%";
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
            startSpinner(spinnerNumber);
          }, 6000);
      }
    }, 100);
  }

  document.querySelectorAll('.spinner-number').forEach(spinner => {
    startSpinner(spinner);
  });

  let spinnerjs=document.querySelector(".spinner-js")
  let count2=0;

const intervalId2 = setInterval(() => {
  if (count2 < 70) {
    count2++;
    spinnerjs.textContent = count2 + "%";
  } else {
    clearInterval(intervalId2); 
  }
}, 100);

// dark mode
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateButtonText();
});

function updateButtonText() {
  if (body.classList.contains('dark-mode')) {
    themeBtn.textContent = 'Light Mode';
  } else {
    themeBtn.textContent = 'Dark Mode';
  }
}