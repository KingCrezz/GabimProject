// function untuk memvalidasi id dan password
function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == 'gabim' && password == '123'){
        alert('Login Berhasil!')
        window.location.assign("index.html")
    }
    else {
        alert('Login Gagal')
    }
}

// function untuk melihat password di page login
function showpwd() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }