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
    if (validateForm()) {
        var first = document.getElementById("first").value;
        var password = document.getElementById("password").value;

        if (first == "Sara" && password == "sara@ara") {
            window.location.assign("page1.html");
        } else if (first == "Gregg" && password == "gregg@egg") {
            window.location.assign("page2.html");
        } else {
            alert("Invalid information");
        }
    }
}

function validateForm() {
    const password = document.getElementById("password").value;

    // Validate password
    if (password === "" || (password !== "sara@ara" && password !== "gregg@egg")) {
        document.getElementById("passwordError").style.display = "inline";
        return false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    return true; // Form is valid, proceed with authentication
}


        