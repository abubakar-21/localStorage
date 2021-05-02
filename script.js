let uname = document.getElementById("name");
let password = document.getElementById("pass");
let regButton = document.getElementById("button1");
let loginButton = document.getElementById("button");
let num = 0;
let username = [];
let passWord = [];


loginButton.onclick = function() {
    
    for (let i = 0; i < localStorage.length; i++) {

        if (uname.value === "" && password.value === "") {
            return
        } else if (uname.value === username[i] && password.value === passWord[i]) {
                alert("logged in!");
                
            }     
    }
    password.value = "";
    uname.value = "";
}


regButton.onclick = function() {

    localStorage.setItem(num++, uname.value);
    localStorage.setItem(num++, password.value);
    username.push(uname.value);
    passWord.push(password.value);
    
    password.value = "";
    uname.value = "";

}
