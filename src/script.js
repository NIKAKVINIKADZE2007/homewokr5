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
