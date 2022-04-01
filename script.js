function feedAnimal() {
  const button = document.getElementById('feed-btn')
  const animalImage = document.getElementById('animal')
  const currentHeight = animalImage.clientHeight

  if (currentHeight < 150) {
    animalImage.style.height = currentHeight + 10 + 'px'
  } else {
    animalImage.src = '/images/iu-4.png'
    button.disabled = true
  }
}
