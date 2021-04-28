const small = document.querySelectorAll('.cup-small');

const liters = document.getElementById('liters');

const remaining = document.getElementById('remaining');

const filled = document.getElementById('filled');

updateBig();


small.forEach((cup, index) => {
  cup.addEventListener('click', () => {
    highlightCup(index);
  });
})


function highlightCup(x) {
  small.forEach((cup, y) => {

    if (small[x].classList.contains('full') && !small[x].nextElementSibling.classList.contains('full')) {
      x--;
    }

    if (y <= x) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  })
  updateBig();
}


function updateBig() {
  const smallFull = document.querySelectorAll('.cup-small.full').length;

  const totalCups = small.length;

  if (smallFull === 0) {
    filled.style.visibility = 'hidden';
    filled.style.height = 0;
  } else {
    filled.style.visibility = 'visible';
    filled.style.height = `${smallFull / totalCups * 330}px`;
    filled.innerText = `${smallFull / totalCups * 100}%`;

    if (smallFull === totalCups) {
      remaining.style.visibility = 'hidden';
      remaining.style.height = 0;
    } else {
      remaining.style.visibility = 'visible';
      liters.innerText = `${2 - (250 * smallFull / 1000)}liters`
    }
  }
}