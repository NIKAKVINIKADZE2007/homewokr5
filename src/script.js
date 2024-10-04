function changeActive(id) {
  let curentActive = document.querySelector('.active');
  if (curentActive.id !== id) {
    curentActive.classList.remove('active');

    let newActive = document.getElementById(id);

    newActive.classList.add('active');

    console.log(newActive);
  }
}

document.getElementById('li1').addEventListener('click', () => {
  changeActive('li1');
});

document.getElementById('li2').addEventListener('click', () => {
  changeActive('li2');
});

document.getElementById('li3').addEventListener('click', () => {
  changeActive('li3');
});

document.getElementById('li4').addEventListener('click', () => {
  changeActive('li4');
});

//swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    390: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
