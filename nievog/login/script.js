const login = [
    {
        "email" : "niev@gmail.com",
        "senha": "niev1234"
}
]

var emailEnter = document.querySelector("#email");
var pin = document.querySelector("#pin");

function cadastro() {
    
    login.forEach(info => {
        if (info.email != emailEnter.value || info.senha != pin.value) {
            alert("EMAIL OU SENHA ERRADOS")
            
        }else if(info.email == emailEnter.value && info.senha == pin.value) {
            alert("LOGIN CONCLUIDO")
            window.location.href = "../../landingpage/index.html"

        }
    });
}