
const items = document.querySelectorAll('.region-item')
items.forEach(function (item) {
  item.addEventListener('mouseenter', (e) => {
    let region = e.target.id
    let regionNode = document.querySelector(`.${region}`);
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
console.log(gElements)
// HTMLCollection並非陣列，故轉換為陣列才可以用forEach
const gArray = Array.from(gElements);
gArray.forEach(function (element) {
  element.addEventListener('mouseenter', (e) => {
    let region = e.currentTarget.getAttribute("class")
    let regionNode = document.getElementById(`${region}`);
    regionNode.style.background = "#66aabb"
    regionNode.style.color = "white"
  })
  element.addEventListener('mouseleave', (e) => {
    let region = e.currentTarget.getAttribute("class")
    let regionNode = document.getElementById(`${region}`);
    regionNode.removeAttribute("style")
  })
});
