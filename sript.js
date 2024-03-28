let person = document.getElementById("person");
let userName = document.getElementById("full-name");
let sex = document.getElementById("gen");
let date = document.getElementById("birth");
let agy = document.getElementById("old")
let place = document.getElementById("town");
let area = document.getElementById("mine")
let city = document.getElementById("live")
let mail = document.getElementById("drive");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let num = document.getElementById("num");
let rename = document.getElementById("rename");
let phone = document.getElementById("phone");
let street = document.getElementById("street");

async function profile(){
    let url = "https://randomuser.me/api/";
    let response = await fetch(url);
    let persona = await response.json();
    
    person.setAttribute("src", persona.results[0].picture.large);
    userName.innerHTML += persona.results[0].name.title + " ";
    userName.innerHTML += persona.results[0].name.first + " ";
    userName.innerHTML += persona.results[0].name.last + " ";
    rename.innerHTML += persona.results[0].name.title + " ";
    rename.innerHTML += persona.results[0].name.first + " ";
    rename.innerHTML += persona.results[0].name.last + " " + "Profile.";
    sex.innerHTML += persona.results[0].gender;
    date.innerHTML += persona.results[0].dob.date;
    agy.innerHTML += persona.results[0].dob.age;
    place.innerHTML += persona.results[0].location.country;
    area.innerHTML += persona.results[0].location.state; 
    city.innerHTML += persona.results[0].location.city;
    mail.innerHTML += persona.results[0].email;
    user.innerHTML += persona.results[0].login.username;
    phone.innerHTML += persona.results[0].phone;
    street.innerHTML += persona.results[0].location.street.number + ", ";
    street.innerHTML += persona.results[0].location.street.name + " " +"Street";

}; 
profile();

