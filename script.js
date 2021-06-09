// This line connects the "Is It Free?" button to the function //
document.getElementById('button').addEventListener('click', comparison)
let age = 0
let day = 0

function comparison () {
  // This line gets the user's input and converts it to an integer.//
  age = document.getElementById('age').value
  age = parseInt(age)

  day = document.getElementById('day').value

  // These lines checks the user's age and day and checks if they get a discount.//
  if ((day === 'Thursday') || (age >= '15' && age <= '18')) {
    document.getElementById('answer').innerHTML = 'It is free!'
  } else {
    document.getElementById('answer').innerHTML = 'You have to pay.'
  }
}
