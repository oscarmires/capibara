function feedAnimal() {
  const button = document.getElementById('feed-btn')
  const animalImage = document.getElementById('animal')
  const currentHeight = animalImage.clientHeight

  if (currentHeight < 150) {
    animalImage.style.height = currentHeight + 10 + 'px'
  } else {
    animalImage.src =
      'https://tuxpaint.org/stamps/stamps/animals/mammals/rodents/capybara.png'
    button.disabled = true
  }
}
