
let Persons = JSON.parse(localStorage.getItem("listperson")) || [];

const saveData = () =>{
    localStorage.setItem("listperson",JSON.stringify(Persons)) || [] ;
};


let inputEmailLoginElement = document.getElementById("email");
let inputPasswordLoginElement = document.getElementById("password");
let buttonLogin = document.getElementById("btn-login");
let emailEr = document.getElementById("ErrorEmail");
let ErrorPass = document.getElementById("ErrorPass");



buttonLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    const emailVal = inputEmailLoginElement.value.trim();
    const passVal = inputPasswordLoginElement.value.trim();

    emailEr.innerText="";
    ErrorPass.innerText="";
    let check = true;


    const userFound = Persons.find(a => a.email === emailVal);

    if(inputEmailLoginElement.value === "") {
      emailEr.innerText = "email không được để trống !"

      check = false;
    }
    if(inputPasswordLoginElement.value === ""){
     ErrorPass.innerText = "password không được để trống ! ";
        check = false;

    }

    if (!userFound) {
        ErrorEmail.innerText= 'Email không đúng hoặc chưa được đăng ký';
        check = false;
    }
    if (userFound.password !== passVal) {
        ErrorPass.innerText='Mật khẩu không đúng';
        check = false;
    };

    if(!check){
        return;

    }
   Swal.fire({
    title: "Good job!",
    text: "Đăng nhập thành công!",
    icon: "success"
    }).then(() => {
    localStorage.setItem("currentUser", JSON.stringify(userFound));
    window.location.href="../homepage/index.html"
});
});