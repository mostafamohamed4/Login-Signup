let NameInput = document.getElementById("name")
let EmailInput = document.getElementById("email")
let PasswordInput = document.getElementById("password")
let btnn = document.getElementById("btnn")
let regList;
if (localStorage.getItem("reg") != null) {
    regList = JSON.parse(localStorage.getItem("reg"))

} else {
    regList = [];

}




// NameInput.addEventListener("blur", validateInputName)
function validateInputName() {
    let regex = /^[A-Z][a-z]{3,9}$/
    if (regex.test(NameInput.value) == true) {
        console.log("valid Name")

        return true;
    } else {
        console.log("not valid Name")

        return false;

    }
}
// EmailInput.addEventListener("blur", validateInputemail)
function validateInputemail() {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    if (regex.test(EmailInput.value) == true) {
        console.log("valid email")
        return true;
    } else {
        console.log(" not valid email")
        return false;

    }
}
// PasswordInput.addEventListener("blur", validateInputpassword)
function validateInputpassword() {
    let regex = /^[0-9]{7,10}$/
    if (regex.test(PasswordInput.value) == true) {
        console.log("valid password")

        return true;
    } else {
        console.log("not valid password")
        return false;

    }
}

function isEmailExist() {
    for (let i = 0; i < regList.length; i++) {
        if (EmailInput.value == regList[i].Email) {
            console.log(regList[i].Email);
            return false

        }
    }

}

// btnn.addEventListener("click", registration)
function registration() {
    if (validateInputName() == true && validateInputemail() == true && validateInputpassword() == true) {
        reg = {
            Name: NameInput.value,
            Email: EmailInput.value,
            Password: PasswordInput.value
        }
        if (isEmailExist() == false) {
            document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        } else {
            regList.push(reg);
            localStorage.setItem("reg", JSON.stringify(regList))
            console.log(regList);
            document.getElementById("incorrect").innerHTML = `<span class="text-success  m-3">All inputs is done</span>`

        }

    } else {
        document.getElementById("incorrect").innerHTML = `<span class="text-danger  m-3">All inputs is required</span>`
    }
}


// *************  login  ***********************

let Emaillogin = document.getElementById("Email")
let Passwordlogin = document.getElementById("Password")
let button = document.getElementById("button")


let username = localStorage.getItem('username')
if (username) {
    document.getElementById("home").innerHTML = `<h1 id="home">Welcome ${username}</h1>`

} else {
    username = 0;
}


// button.addEventListener("click", login)
function login() {
    for (let i = 0; i < regList.length; i++) {
        if (Emaillogin.value == regList[i].Email && Passwordlogin.value == regList[i].Password) {
            console.log(regList[i].Name);
            document.getElementById("Incorrect").innerHTML = `<span class="text-success  m-3">All inputs is done</span>`
            localStorage.setItem("username", regList[i].Name);
            location.replace("home.html")
        } else {
            document.getElementById("Incorrect").innerHTML = `<span class="text-danger  m-3">Incorrect email or password</span>`

        }

    }


}


function logout() {
    localStorage.removeItem('username');
    location.replace("index.html")
}



