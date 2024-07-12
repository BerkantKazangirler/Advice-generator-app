const button = document.querySelector("button");
const idtext = document.querySelector("#idtext");
const text = document.querySelector("#area");

button.addEventListener('click', (e) => {
  getData()
})

function getData() {
  fetch('https://api.adviceslip.com/advice')
  .then(responve=>responve.json())
  .then(data => {
    const advice = data.slip.advice;
    console.log(advice)
    const id = data.slip.id;
    console.log(id)

    idtext.innerHTML = "ADVICE #"+id;
    text.innerHTML = advice;
  })
}

getData();