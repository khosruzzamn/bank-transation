document.getElementById("login-button").addEventListener('click', function () {

    //get user Email:

    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;

    //get user Password 

    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;

    //login condition:

    if (userEmail == 'khosru.skz@gmail.com' && userPassword == 'khosru.skz') {

        window.location.href = 'banking.html';


    }



})