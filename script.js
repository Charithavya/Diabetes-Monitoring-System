const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
var first = document.getElementById("first").value;
var password = document.getElementById("password").value;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


function auth() {
   
        var first = document.getElementById("first").value;
        

        if (first == "Sara" ) {
            window.location.assign("page1.html");
        } else if (first == "Gregg" ) {
            window.location.assign("page2.html");
        } else {
            alert("Invalid information");
        }

}





        
