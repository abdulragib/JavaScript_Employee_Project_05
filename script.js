
// Array of objects
const array = [
  { id: 1, name: "John", age: "18", profession: "Developer" },
  { id: 2, name: "Jack", age: "20", profession: "Developer" },
  { id: 3, name: "Karen", age: "19", profession: "Admin" },
]

// Displaying data on Ui
array.forEach((item) => {
  var card = `<ul>
    <li>${item.id}.</li>
    <li>Name:${item.name}</li>
    <li>Profession:${item.profession}</li>
    <li>Age:${item.age}</li>
    </ul>`

  document.getElementById("card-container").innerHTML += card
})

//filter data on array

const filter = document.getElementById("filter")

filter.addEventListener("click", () => {
  //getting user selection
  var profession = document.getElementById("profession").value

  //no profession selection
  if (profession == "") {
    alert("Select the profession before start Filtering")
  } else {
    //filtering new array data on user selection
    var filterData = array.filter((item) => {
      return item.profession == profession
    })

    //clearing ui
    document.getElementById("card-container").innerHTML = ""

    //adding new filtered data to ui
    filterData.forEach((item) => {
      var card = `<ul>
       <li>${item.id}.</li>
       <li>Name:${item.name}</li>
       <li>Profession:${item.profession}</li>
       <li>Age:${item.age}</li>
       </ul>`

      document.getElementById("card-container").innerHTML += card
    })
  }
})


//adding new user to array
var addUser = document.getElementById("add-user")

addUser.addEventListener("click", () => {
    //getting user input
  var name = document.getElementById("enter-name")
  var age = document.getElementById("enter-age")
  var profession = document.getElementById("enter-profession")

    //checking if input fields are empty
  if (name.value === "" || age.value === "" || profession.value === "") {
    alert("Please fill out all the input fields before adding a user")
    return
  }

    //creating new user
  const newUser = {
    id: array.length + 1,
    name: name.value,
    age: age.value,
    profession: profession.value,
  }

  //display new-user in console
  console.log(newUser)

  //adding new user to old user list
  array.push(newUser)

  //display whole user to console
  console.log(array)

    //clearing input fields
  name.value=""
  age.value=""
  profession.value=""

  //updating ui
    var card = `<ul>
          <li>${newUser.id}.</li>
          <li>Name:${newUser.name}</li>
          <li>Profession:${newUser.profession}</li>
          <li>Age:${newUser.age}</li>
          </ul>`

    
    //appending users
    document.getElementById("card-container").innerHTML += card
})
