## Project 1

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'red'){
      body.style.backgroundColor = event.target.id
    }

  })

})

## project 2
const form = document.querySelector('form')

//agr yeh height n weight walo ko form ke bhr use kreneg toh empty dega woh

form.addEventListener('submit', function(event){
  event.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results') 

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let category = "";

  if (bmi < 18.6) {
    category = "Underweight";
}   else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "Normal Weight";
}   else {
    category = "Overweight";
}
    results.innerHTML = `<span>Your BMI is ${bmi}</span><br>
    <span>Category: ${category}</span>`;
  }
});

## Project 3

const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')


setInterval(function(){    //continously updates
  let date = new Date()
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

   