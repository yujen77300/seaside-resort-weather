const locationTitleName = document.querySelector('.location-title-name')
const temperature = document.querySelector('.temperature')
const rainPosibilty = document.querySelector('.rain-posibilty')
const uv = document.querySelector('.uv')

window.addEventListener('resize', function () {
  const width = window.innerWidth;
  const svg = document.querySelector('svg');
  svg.removeAttribute('viewBox')
  if (width < 1000) {
    svg.setAttribute('viewBox', '330 300 750 750');
  } else {
    svg.setAttribute('viewBox', '330 400 750 750');
  }
});


const items = document.querySelectorAll('.region-item')
items.forEach(function (item) {
  item.addEventListener('mouseenter', (e) => {
    let region = e.target.id
    let regionNode = document.querySelector(`.${region}`);
    temperature.style.display = "block"
    rainPosibilty.style.display = "block"
    uv.style.display = "block"
    regionNode.firstElementChild.setAttribute("fill", "#66aabb")
    // regionNode.firstElementChild.setAttribute("transform", "translate(-5px,-5px)")
  })
  item.addEventListener('mouseleave', (e) => {
    let region = e.target.id
    let regionNode = document.querySelector(`.${region}`);
    regionNode.firstElementChild.removeAttribute("fill")
    // regionNode.firstElementChild.removeAttribute("transform")
  })
})

const gElements = document.getElementsByTagName("g");
// HTMLCollection並非陣列，故轉換為陣列才可以用forEach
const gArray = Array.from(gElements);
gArray.forEach(function (element) {
  element.addEventListener('mouseenter', (e) => {
    let region = e.currentTarget.getAttribute("class")
    let regionNode = document.getElementById(`${region}`);
    if (!regionNode && regionNode != 0) {
      locationTitleName.textContent = `${region}無海水浴場`
      temperature.style.display = "none"
      rainPosibilty.style.display = "none"
      uv.style.display = "none"
    } else {
      regionNode.style.background = "#66aabb"
      regionNode.style.color = "white"
      temperature.style.display = "block"
      rainPosibilty.style.display = "block"
      uv.style.display = "block"
    }
  })
  element.addEventListener('mouseleave', (e) => {
    let region = e.currentTarget.getAttribute("class")
    let regionNode = document.getElementById(`${region}`);
    if (!regionNode && regionNode != 0) {
      return
    } else {
      regionNode.removeAttribute("style")
    }

  })
});
