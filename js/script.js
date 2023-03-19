function send(){
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        if(users[0].email == email && users[0].password == password){
            alert("Thats okay here")
            location.href = "home.html"
        } else if(email == '' && password == ''){
            alert("Fill in all entries!")
        } 
        else{
            alert("Check your email or password, maybe something is wrong!")
        }
}

function newUser(){
    location.href = "/html/form.html"
}
function login(){
    location.href = "/html/login.html"
}