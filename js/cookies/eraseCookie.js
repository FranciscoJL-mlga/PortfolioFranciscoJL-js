
document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link redirection

    // Function to erase a specific cookie by name
    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=0; path=/'; // Setting Max-Age=0 deletes the cookie
    }

    eraseCookie("loggedIn"); // borra la cookie

    // Redireecciona al login
    window.location.href = "../login.html";
});
