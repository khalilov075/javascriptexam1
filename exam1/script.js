// function $(id) {
//     return document.getElementById(id);
// }
// let people = [];

// function Person(name, email, password) {
//     this.name = name;
//     this.__proto__ = new Login(email, password);
//     return this;
// }

// function Login(email, password) {
//     this.email = email;
//     this.password = password;
//     return this;
// }


// function daxilOl() {

//     let email = $('email_login').value;
//     let password = $('password_login').value;
//     let finded = false;
//     for (let k of people) {
//         if (k.email == email && k.password == password) {
//             finded = true;
//         }
//     }

//     if (finded) {
//         alert('tapildi');
//     }
//     else {
//         alert('tapilmadi');
//     }

// }



// function Register() {
//     let person = new Person($('name').value, $('email').value, $('password').value);

//     if ($('password').value == $('passwordrew').value) {
//         people.push(person)

//     }
//     else {
//         alert('password incorrect')
//     }
//     return false;

// }

// let people = [];

// document.getElementById("addname").addEventListener("click", function () {
//     let person = document.getElementById("name").value;
//     people.push(person);
//     let count = 0;
//     for (let k = 0; k < people.length; k++) {
//         if (people.length > 1) {
//             count++;
//             let elem = document.createElement("div");
//             elem.textContent = count + "-- " + people[people.length - 1];
//             elem.style.color = "red";
//             document.querySelector(".main").appendChild(elem);
//             document.getElementById("name").value="";
//             break;
//         }
//         else {
//             count++;
//             let elem = document.createElement("div");
//             elem.textContent = count + "-- " + people[k];
//             elem.style.color = "red";
//             document.querySelector(".main").appendChild(elem);
//             document.getElementById("name").value="";
//         }
//     }


// })




let people = [];
document.getElementById("addname").addEventListener("click", function () {
    let k = 1;

    let person = document.getElementById("name").value;
    people.push(person);
    document.getElementById('name').value = "";
    let textarea = document.getElementById('txtArea');

    textarea.value = "";
    for (let i of people) {
        textarea.value += `${k} ${i}` + "\r\n";
        k++;
    }


})




let tasks = [];
document.getElementById("addTask").addEventListener("click", function () {
    let x = 1;

    let task = document.getElementById("taskName").value;
    tasks.push(task);
    document.getElementById('taskName').value = "";
    let textarea2 = document.getElementById('txtArea2');

    textarea2.value = "";
    for (let a of tasks) {
        textarea2.value += `${x} ${a}` + "\r\n";
        x++;
    }
    console.log("birinci : "+ x +"ikinci : " + k);

})


document.getElementById("addRandom").addEventListener("click", function () {
 let rnd =  Math.floor(Math.random() *people.length);
 document.getElementById("randomArea").innerHTML=people[rnd] + "  --  " + tasks[rnd];

})